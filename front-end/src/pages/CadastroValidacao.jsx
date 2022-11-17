
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import Accordion from "react-bootstrap/Accordion";
import '/public/style/cadastro.css';
import React, { useState, useEffect } from 'react';

function  CadastroValidacao() {

  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState(null);

  function encontraEndereco() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(enderecoInput => setEndereco(enderecoInput))
  };

  useEffect(() => {

    const isNotNull = cep != null;
    const isValidCep = cep?.length == 8;

    if (isNotNull && isValidCep) {
      encontraEndereco();
    }

  }, [cep]);

  useEffect(() => {

    const isNotNull = endereco != null;
    // console.log(endereco)
  }, [endereco]);


  let formik = useFormik({

    initialValues: {
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      cpf: "",
      email: "",
      telefone:"",
      senha: "",
      senhaC: "",
      numero: "",
      complemento:""
    },

     validationSchema: yup.object({
       nome: yup
         .string()
         .required("Campo obrigatório"),

       sobrenome: yup
         .string()
         .required("Campo obrigatório"),

      dataNascimento: yup
        .date()
        .required("Campo obrigatório"),

       cpf: yup
         .string()
         .required("Campo Obrigatório")
        .matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/, "CPF inválido"),

       email: yup
         .string()
         .email("E-mail inválido")
         .required("O campo é obrigatório"),

        telefone: yup
         .string()
         .required("O campo é obrigatório")
         .matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, "Telefone inválido"),

      senha: yup
         .string()
         .required("Digite uma senha")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "A senha precisa ter 8 carácteres com pelo menos: 1 letra maiúscula, 1 número e 1 carácter especial"
          ),

      senhaC: yup
         .string()
         .required("Confirme a sua senha")
        .oneOf([yup.ref('senha'), null], "As senhas precisam ser iguais"
     ),


       numero: yup
         .string()
         .required("Campo Obrigatório"),

       complemento: yup
         .string()
         .required("Campo Obrigatório"),
         

 }),

    onSubmit: values => {
      const {logradouro, uf,localidade, cep} = endereco
     console.log({...values, logradouro,uf,localidade, cep})

      axios.post('/api/cadastro',{...values, logradouro,uf,localidade, cep})
        .then(resp => console.log("RESPONSE", resp))
    }

  });

  return (
    <Accordion>
      <form onSubmit={formik.handleSubmit} className="form">

        <h2>Faça seu cadastro conosco!</h2>

        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Dados Pessoais</h3>
          </Accordion.Header>
          <Accordion.Body>
            <label htmlFor="nome">Name:</label>
            <input
              id="nome"
              name="nome"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nome}
            />
            {formik.touched.nome && formik.errors.nome ? (
              <div>{formik.errors.nome}</div>
            ) : null}

            <label htmlFor="sobrenome">Sobrenome:</label>
            <input
              id="sobrenome"
              name="sobrenome"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sobrenome}
            />
            {formik.touched.sobrenome && formik.errors.sobrenome ? (
              <div>{formik.errors.sobrenome}</div>
            ) : null}


            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dataNascimento}
            />
            {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
              <div>{formik.errors.dataNascimento}</div>
            ) : null}

            <label htmlFor="cpf">CPF:</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpf}
            />

            {formik.touched.cpf && formik.errors.cpf ? (
              <div>{formik.errors.cpf}</div>
            ) : null}
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <h3>Dados da Conta</h3>
          </Accordion.Header>
          <Accordion.Body>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="telefone">Telefone:</label>
              <input
                id="telefone"
                name="telefone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefone}
              />
            {formik.touched.telefone && formik.errors.telefone ? (
              <div>{formik.errors.telefone}</div>
            ) : null}


            <label htmlFor="senha">Senha:</label>
            <input
              id="senha"
              name="senha"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.senha}
            />
            {formik.touched.senha && formik.errors.senha ? (
              <div>{formik.errors.senha}</div>
            ) : null}


            <label htmlFor="senhaC">Confirmação de Senha:</label>
            <input
              id="senhaC"
              name="senhaC"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.senhaC}
            />
            {formik.touched.senhaC && formik.errors.senhaC ? (
              <div>{formik.errors.senhaC}</div>
            ) : null}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            <h3>Endereço</h3>
          </Accordion.Header>
          <Accordion.Body>
            <label htmlFor="cep">CEP: (somente números)</label>
            <input
              id="cep"
              name="cep"
              type="text"
              onChange={(e) => { setCep(e.target.value) }}
            />
            <small>
              <a 
              href='https://buscacepinter.correios.com.br/app/endereco/index.php' 
              target="_blank">Não sei o CEP
              </a>
              </small>
            <label htmlFor="logradouro">Logradouro:</label>
            <input
              id="logradouro"
              name="logradouro"
              type="text"
              value={endereco?.logradouro}
            />

            <label htmlFor="numero">Número:</label>
            <input
              id="numero"
              name="numero"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numero}
            />
            {formik.touched.numero && formik.errors.numero ? (
              <div>{formik.errors.numero}</div>
            ) : null}

            <label htmlFor="complemento">Complemento:</label>
            <input
              id="complemento"
              name="complemento"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.complemento}
            />
            {formik.touched.complemento && formik.errors.complemento ? (
              <div>{formik.errors.complemento}</div>
            ) : null}

            <label htmlFor="bairro">Bairro:</label>
            <input
              id="bairro"
              name="bairro"
              type="text"
              value={endereco?.bairro}
            />


            <label htmlFor="cidade">Cidade:</label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              value={endereco?.localidade}
            />


            <label htmlFor="uf">Estado:</label>
            <select
              id="uf"
              name="uf"
              type="text"
              value={endereco?.uf}
            >
              <option value={null}>Selecione o Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>

            </select>

          </Accordion.Body>
        </Accordion.Item>

        <button type="submit">Submit</button>
      </form>
    </Accordion>


  )

}

export default CadastroValidacao