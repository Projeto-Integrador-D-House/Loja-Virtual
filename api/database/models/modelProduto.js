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
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    EAN: {
        type: DataTypes.STRING(13),
        unique: true
    },
    categoria: {
        type: DataTypes.STRING,
    },
    estoque:{
        type: DataTypes.INTEGER
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = produto