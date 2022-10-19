const {v1: uuid} = require('uuid')
const venda = require("../database/models/modelPedido")

const controllers = {
    async fazerPedido(){
        const [req, res] = arguments;
        // const id = new Date().getMilliseconds()
        // const { email } = jwt.verify(req.cookies.client, process.env.JWT_SECRET)
        // const getItems = localStorage.getItem('carrinho')

      // console.log(id.toString())

        let pedidoCriado;
        try {
          pedidoCriado = await venda.create({uid: uuid(),...req.body});
          res.status(201).json(pedidoCriado);
        } catch (e) {
          res.status(400).json(e.original);
        }
    }
}

module.exports = controllers;