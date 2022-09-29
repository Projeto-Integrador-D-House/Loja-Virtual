const {DataTypes} = require('sequelize')

const sequelize = require('../conection.js')

// definição de modelo de porduto - colunas e tipos de dados
const produto = sequelize.define('Produto',{
    nome: {
        type: DataTypes.STRING
    },
    descricao:{
        type: DataTypes.STRING
    },
    EAN: {
        type: DataTypes.STRING(13),
        unique: true
    },
    categoria: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = produto