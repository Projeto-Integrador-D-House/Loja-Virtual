const express = require("express");
// importação dos controlador../controllers/controllersProduto
const controllersProdutos = require("../controllers/controllerProduto");
const controllersAccess = require("../controllers/controllerAccess");

const rotas = express.Router();

// rota para mostrar a Home Page
rotas.get("/", () => {
  const [, res] = arguments;
  res.send("bem vindo a loja");
});

rotas.post("/login", controllersAccess.autenticar);
// rota para listar os Produtos
rotas.get("/produtos", controllersProdutos.listarProdutos);
// rota para criar novos produtos
rotas.post("/produtos/novo", controllersAccess.verificarToken, controllersProdutos.novoProduto);

module.exports = rotas;
