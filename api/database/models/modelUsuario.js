const {DataTypes} = require('sequelize')

const sequelize = require('../conection.js')

// definição de modelo de usuarios - colunas e tipos de dados
const usuario = sequelize.define('Usuario',{
    email: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    sobrenome:{
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    role: {
        type:DataTypes.STRING,
        defaultValue: "cliente"
    }
})

module.exports = usuario