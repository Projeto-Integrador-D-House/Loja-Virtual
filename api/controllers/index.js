//importação do modelo de produto
const produto = require("../database/models/produto.js");
//configuração para validação de requisição de produto
const validarProduto = require("../database/models/produtoValidator");

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
    console.log("novo produto acionado");
    const isValid = await validarProduto.safeParse(req.body);
    if (isValid.success) {
      const produtoCriado = await produto.create(isValid.data);
      res.json(produtoCriado);
      return;
    }
    const errors = isValid.error.issues.map(erro => {
      return {message: erro.message, param: erro.path}
    })
    res.json(errors);
  },
  // mostrar menssagem de boas vindas
  home() {
    const [, res] = arguments;
    res.send("bem vindo a loja");
  },
};

module.exports = controllers;
