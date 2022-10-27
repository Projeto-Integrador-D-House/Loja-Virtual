require('dotenv').config()
const Sequelize = require('sequelize');
// instancia do banco de dados  ( databasee | user | password )
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host:"containers-us-west-52.railway.app",
    port: 5571
  });

module.exports = sequelize