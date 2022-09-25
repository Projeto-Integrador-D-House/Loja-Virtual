//importação do modelo de produto
const produto = require("../database/models/produto.js");

const controllers = {
  //função para listar produtos
  async listarProdutos() {

    const [, res] = arguments;
    const listaDeProdutos = await produto.findAll();
    res.json(listaDeProdutos);
  },
  //função para criar produto
  async novoProduto() {
    const [req, res] = arguments;

    let produtoCriado;
    try {
      produtoCriado = await produto.create(req.body);
      res.status(201).json(produtoCriado);
    } catch (e) {
      res.status(400).json(e.errors);
    }
  }
};

module.exports = controllers;
