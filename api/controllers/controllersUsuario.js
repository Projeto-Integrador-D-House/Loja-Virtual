const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  async cadastrarUsuario() {
    const [req, res] = arguments;
    const { senha, nome, sobrenome, email, role } = req.body;
    // const {cep, logradouro,numero,complemento} = req.body

    var senhaHashed = await crypto.hash(senha, 10);
    console.log(senhaHashed)
    let usuarioCriado;
    try {
      usuarioCriado = await usuario.create({
        nome,
        sobrenome,
        // dataNascimento,
        // cpf,
        email,
        // bairro,
        // cidade,
        // uf,
        role,
        senha: senhaHashed,

      });
      // if(logradouro !== undefined){

      //   usuario.createEndereco({
      //     local: logradouro,
      //     cep,
      //     numero,
      //     complemento,
      //   })
      // }
      res.status(201).redirect('/');
    } catch (e) {
      res.status(400).json(e.errors);
    }
  },
  
};

module.exports = controllers;
