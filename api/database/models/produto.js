const {DataTypes} = require('sequelize')
const sequelize = require('../index.js')
console.log('produto')
const produto = sequelize.define('Produto',{
    nome:{
        type: DataTypes.STRING
    }
})
produto.sync({force: true})
module.exports = produto