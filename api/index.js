const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use("/", rotas);

app.listen(5000, () => {
  console.log("servidor rodando...");
});