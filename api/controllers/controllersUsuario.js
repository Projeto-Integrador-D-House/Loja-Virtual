const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  async cadastrarUsuario() {
    const [req, res] = arguments;
    const { senha, nome, sobrenome, dataNascimento, cpf, email, role } = req.body;

    const senhaHashed = await crypto.hash(senha, 10);

    let usuarioCriado;
    try {
      usuarioCriado = await usuario.create({
        nome,
        sobrenome,
        dataNascimento,
        cpf,
        email,
        role,
        senha: senhaHashed,

      });
      res.status(201);
    } catch (e) {
      res.status(400).json(e.errors);
    }
  },
};

module.exports = controllers;
