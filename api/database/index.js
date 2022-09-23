const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'mestre', {
    dialect: 'postgres'
  });

module.exports = sequelize