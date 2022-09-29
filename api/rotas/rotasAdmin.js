
const express = require("express");
// importação dos controladores
const controllersProdutos = require("../controllers/controllerProduto");

const rotas = express.Router();

rotas.get("/", function() {
    const [, res] = arguments;
    res.send("bem vindo Admin")
  });
// rota para criar novos produtos
rotas.post("/produtos/novo", controllersProdutos.novoProduto);
// rota para editar produto
rotas.patch("/produto/:id/editar", controllersProdutos.editarProduto)

module.exports = rotas;
 