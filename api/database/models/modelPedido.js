const {DataTypes} = require('sequelize')

const sequelize = require('../conection-local.js')

const pedido = sequelize.define('Pedido',{
    items: {
        type: DataTypes.JSON
    },
    pagamentoId: {
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.ENUM(['pendente','cancelado','concluido']),
        defaultValue: 'pendente'
    }
});
module.exports = pedido