const express = require("express");
// importação dos controladores
const controllersProdutos = require("../controllers/controllerProduto");
const controllersUsuario = require("../controllers/controllersUsuario");
const controllersAccess = require("../controllers/controllerAccess");

const rotas = express.Router();

// rota para mostrar a Home Page
rotas.get("/", function() {
  const [, res] = arguments;
  res.send("bem vindo a loja");
});

// rota de registro de usuarios
rotas.post("/registrar", controllersUsuario.cadastrarUsuario);

// rota para listar os Produtos
rotas.get("/produtos", controllersProdutos.listarProdutos);

// rota para criar novos produtos
rotas.post("/produtos/novo", controllersAccess.verificarToken, controllersProdutos.novoProduto);

module.exports = rotas;
