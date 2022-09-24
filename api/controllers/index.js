const produto = require("../database/models/produto.js");
const controllers = {
  async produtos() {
    const [, res] = arguments;
    const listaDeProdutos = await produto.findAll();
    res.send(listaDeProdutos);
  },
  async novoProduto() {
    const [req, res] = arguments;
    const produtoCriado = await produto.create(req.body);
    res.json(produtoCriado)
  },
  home() {
    const [, res] = arguments;
    res.send("bem vindo a loja");
  },
};

module.exports = controllers;
