const express = require("express");
// importação dos controladores
// const controllersVenda = require("../controllers/controllerVenda");
const controllersProdutos = require("../controllers/controllerProduto");
const controllersUsuario = require("../controllers/controllersUsuario");
const controllersAccess = require("../controllers/controllerAccess");

const rotas = express.Router();

// rota para mostrar a Home Page
rotas.get("/", function(req, res) {
      res.send("<h2>Home</h2>")
    }
);

// rotas.post("/pedido", controllersVenda.fazerPedido)
// rota para listar os Produtos
rotas.get("/produtos", controllersProdutos.listarProdutos);
// rota para listar um Produto pela id
rotas.get("/produto/:id", controllersProdutos.buscarProduto);
// rota de registro de usuarios
rotas.post("/cadastro", controllersUsuario.cadastrarUsuario);

rotas.post("/login", controllersAccess.login)

module.exports = rotas;
 