const express = require("express");
const app = express();

const sequelize = require('./database/conection.js')
const rotas = require("./rotas");

try {
  sequelize.authenticate();
  sequelize.sync()
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(express.json())
app.use("/", rotas);

app.listen(5000, () => {
  console.log("servidor rodando...");
});