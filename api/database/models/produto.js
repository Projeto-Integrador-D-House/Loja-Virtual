const {DataTypes} = require('sequelize')

const sequelize = require('../conection.js')

const produto = sequelize.define('Produto',{
    nome: {
        type: DataTypes.STRING
    },
    descricao:{
        type: DataTypes.STRING
    },
    EAN: {
        type: DataTypes.BIGINT({length: 13})
    },
    categoria: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.FLOAT
    }
})

module.exports = produto