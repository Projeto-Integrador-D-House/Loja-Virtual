const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  async cadastrarUsuario() {
    const [req, res] = arguments;
    const { senha, nome, sobrenome, email } = req.body;

    const senhaHashed = await crypto.hash(senha, 10);

    console.log(senhaHashed)
    let usuarioCriado;
    try {
      usuarioCriado = await usuario.create({
        nome,
        sobrenome,
        email,
        senha: senhaHashed,
      });
      res.status(201).json(usuarioCriado);
    } catch (e) {
      res.status(400).json(e.errors);
    }
  },
};

module.exports = controllers;
