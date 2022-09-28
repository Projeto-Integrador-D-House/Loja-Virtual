require("dotenv").config();
const jwt = require("jsonwebtoken");
const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  verificarToken() {
    const [req, res, next] = arguments;

    const decode = jwt.verify(req.cookies.userLogged, process.env.JWT_SECRET);

    if (decode === "cliente") {
      res.status(401).json({ message: "não autorizado" });
    } else {
      next();
      console.log("autorizado");
    }
  },
  async login() {
    const [req, res] = arguments;
    // recebe dados para login
    // busca usuario no banco de dados
    const usuarioLogado = await usuario.findByPk(req.body.email);
    console.log("UL",usuarioLogado.role);
    if (usuarioLogado !== null) {
      // verifica a senha
      const senhaCorreta = crypto.compare(req.body.senha, usuarioLogado.senha);
      console.log("SC",senhaCorreta);
      if (senhaCorreta) {
        // gera o token
        const token = jwt.sign(usuarioLogado.role, process.env.JWT_SECRET);
        // armazena o token no formato de cookie
        res.cookie("userLogged", token);
        // redireciona para home
        res.redirect("/");
      } else {
        res.send("senha incorreta");
      }
    } else {
      res.send("usuario não existe");
    }
  }
};

module.exports = controllers;
