const venda = require("../database/models/modelPedido")

const controllers = {
    async fazerPedido(){
        const [req, res] = arguments;

        let pedidoCriado;
        try {
          pedidoCriado = await venda.create(req.body);
          res.status(201).json(pedidoCriado);
        } catch (e) {
          res.status(400).json(e.errors);
        }
    }
}

module.exports = controllers;