const express = require("express");
const controllers = require("./controllers");
const rotas = express.Router();

rotas.get("/", controllers.home);
rotas.get("/produtos", controllers.produtos);

module.exports = rotas;
