const express = require("express");
const controllers = require("../controllers");
const rotas = express.Router();

rotas.get("/", controllers.home);
rotas.get("/produtos", controllers.produtos);
rotas.post("/produtos/novo", controllers.novoProduto)

module.exports = rotas;
