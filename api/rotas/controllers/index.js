const produto = require('../../database/models/produto.js')
const controllers = {
  produtos() {
    const [, res] = arguments;
    produto.create({nome: 'Luiz'})
    res.send("Produtos");
  },
  home() {
    const [, res] = arguments;
    res.send("bem vindo a loja");
  },
};

module.exports = controllers;
