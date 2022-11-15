const {DataTypes} = require('sequelize')

const sequelize = require('../conection.js')
// const usuario = require('./modelUsuario.js')

const endereco = sequelize.define('Endereco',{
   local: {
    type: DataTypes.STRING
   },
   cep: {
    type: DataTypes.INTEGER
   },
   numero: {
    type: DataTypes.INTEGER
   },
   complemento:{
    type: DataTypes.STRING
   }
});
// endereco.belongsTo(usuario)
module.exports = endereco