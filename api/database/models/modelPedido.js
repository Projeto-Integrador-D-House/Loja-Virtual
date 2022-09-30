const {DataTypes} = require('sequelize')

const sequelize = require('../conection.js')

const pedido = sequelize.define('Pedido',{
    uid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    items: {
        type: DataTypes.JSON
    }
});
module.exports = pedido