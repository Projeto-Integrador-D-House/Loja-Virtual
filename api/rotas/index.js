const express = require("express");
// importação dos controladores
const controllers = require("../controllers");
const rotas = express.Router();

// rota para mostrar a Home Page
rotas.get("/", controllers.home);
// rota para listar os Produtos
rotas.get("/produtos", controllers.listarProdutos);
// rota para criar novos produtos
rotas.post("/produtos/novo", controllers.novoProduto)

module.exports = rotas;
