require("dotenv").config();
const jwt = require("jsonwebtoken");
const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  verificarToken() {
    const [req, res, next] = arguments;
    // verifica existencia de cookie registrado
    if (req.cookies.cliente !== undefined) {
      // decodifica token encontrado
      const decode = jwt.verify(req.cookies.cliente, process.env.JWT_SECRET);
      if (decode.role === "admin") {
        // usuario tem a permissão de administrador
        next();
      } else {
    // usuario não possui a permissão correta
        res.json({message: "usuario sem permissão de admin"});
      }
    }else{
      // mensagem caso não tenha feito login
      res.json({message: "necessario fazer o login"});
    }
  },
  async login() {
    const [req, res] = arguments;
    // recebe dados para login
    // busca usuario no banco de dados
    const usuarioLogado = await usuario.findByPk(req.body.email);
    if (usuarioLogado !== null) {
      // verifica a senha
      const senhaCorreta = await crypto.compare(
        req.body.senha,
        usuarioLogado.senha
      );
      if (senhaCorreta) {
        // gera o token
        const { nome, email, role } = usuarioLogado;
        const token = jwt.sign({ nome, email, role }, process.env.JWT_SECRET);
        // armazena o token no formato de cookie
        res.cookie("cliente", token);
        // redireciona para home
        res.redirect("/");
      } else {
        res.json({message: "senha incorreta"});
      }
    } else {
      res.status(401).json({message: "usuario não existe"});
    }
  },
};

module.exports = controllers;
