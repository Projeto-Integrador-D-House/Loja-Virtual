const {DataTypes} = require('sequelize')

const sequelize = require('../conection.js')
// const usuario = require('./modelUsuario.js')

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
// pedido.hasOne(usuario)
module.exports = pedido