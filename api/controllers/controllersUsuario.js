const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  async cadastrarUsuario() {
    const [req, res] = arguments;
    const { senha, nome, sobrenome, email, role } = req.body;
    const {cep, logradouro,numero,complemento} = req.body

    const senhaHashed = await crypto.hash(senha, 10);

    let usuarioCriado;
    try {
      usuarioCriado = await usuario.create({
        nome,
        sobrenome,
        email,
        role,
        senha: senhaHashed,
        endereco:[
          {
            local: logradouro,
            cep,
            numero,
            complemento,
          }
        ]

      });
      //  if(logradouro !== undefined){
      // const enderecoCriado = await usuarioCriado.createEndereco({
      //      local: logradouro,
      //      cep,
      //      numero,
      //      complemento,
      //    })
      //  }
      res.status(201).json(usuarioCriado);
    } catch (e) {
      res.status(400).json(e.errors);
    }
  },
  
};

module.exports = controllers;
