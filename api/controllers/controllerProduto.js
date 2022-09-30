//importação do modelo de produto
const produto = require("../database/models/modelProduto.js");

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
  },
  async editarProduto() {
    const [req, res] = arguments;
    const produtoEditar = await produto.findByPk(req.params.id);
    if(produtoEditar !== null){
      await produtoEditar.update(req.body)
     const updated = await produtoEditar.save()
      res.json(updated)
    }else{
      res.json({message: "produto não existe"})
    }
  },
  async buscarProduto(){
    const [req, res] = arguments;
    const produtoPelaId = await produto.findByPk(req.params.id);
    if(produtoPelaId !== null){
      res.json(produtoPelaId);
    }else{
      res.json({message: "produto não existe"})
    }
  },
  async excluirProduto(){
    const [req, res] = arguments;
    const produtoExcluir = await produto.findByPk(req.params.id);
    if(produtoExcluir !== null){
      await produtoExcluir.destroy()
      res.json({status: "OK"})
    }else{
      res.json({message: "produto não existe"})
    }
  }
};

module.exports = controllers;
