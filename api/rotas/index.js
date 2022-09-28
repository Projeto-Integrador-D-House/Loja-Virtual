
require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
// importação dos controladores
const controllersProdutos = require("../controllers/controllerProduto");
const controllersUsuario = require("../controllers/controllersUsuario");
const controllersAccess = require("../controllers/controllerAccess");

const rotas = express.Router();

// rota para mostrar a Home Page
rotas.get("/", function() {
  const [req, res] = arguments;
  if(req.cookies.userLogged !== undefined){
    const decode = jwt.verify(req.cookies.userLogged, process.env.JWT_SECRET);
    if(decode === "cliente"){
      res.send("<h2>autenticado</h2>")
    }else{
      res.send("<h2>nao autenticado</h2>")
    }
  }else{
    res.redirect("/login")
  }
});

// rota de registro de usuarios
rotas.post("/registrar", controllersUsuario.cadastrarUsuario);

rotas.post("/login", controllersAccess.login)

// rota para efetuar login ( provisoria )
rotas.get("/login", function(req,res){
  res.send("faço o login")
})

// rota para listar os Produtos
rotas.get("/produtos", controllersProdutos.listarProdutos);

// rota para criar novos produtos
rotas.post("/produtos/novo", controllersAccess.verificarToken, controllersProdutos.novoProduto);

module.exports = rotas;
