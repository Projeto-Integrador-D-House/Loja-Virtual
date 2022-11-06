
import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import Accordion from "react-bootstrap/Accordion";

import '/public/style/cadastro.css';


function CadastroValidação() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            nome:"",
            sobrenome:"",
            dataNascimento:"",
            cpf:"",
            email:"",
            senha:"",
            senhaC:"",
            cep:"",
            logradouro:"",
            numero:"",
            complemento:"",
            bairro:"",
            cidade:"",
            uf:"",
          
        },

        validationSchema: yup.object().shape({
            nome:yup
            .string()
            .required("Campo obrigatório"),
            
            sobrenome:yup
            .string()
            .required("Campo obrigatório"),
            
            dataNascimento:yup
            .date()
            .required("Campo obrigatório"),
            
            cpf:yup
            .string()
            .required("Campo Obrigatório")
            .matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/, "CPF inválido"),

            email:yup
            .string()
            .email("E-mail inválido")
            .required("O campo é obrigatório"),
            
            senha:yup
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
            
            cep: yup
            .string()
            .required("Campo Obrigatório")
            .matches(/^\d{5}-?\d{3}$/, "CEP inválido"),

            logradouro:yup
            .string()
            .required("Campo Obrigatório"),

            numero:yup
            .string()
            .required("Campo Obrigatório"),
              
            complemento:yup
            .string(),

            bairro:yup
            .string()
            .required("Campo Obrigatório"),

            cidade:yup
            .string()
            .required("Campo Obrigatório"),

            uf:yup
            .string()
            .required("Campo Obrigatório"),

        }),

        url: () => {
          return `http://viacep.com.br/ws/${this.state.cep}/json/`;
        },

        onSubmit: (values) => {
            navigate('/api/cadastro');
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
              value={formik.values.name}
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
              type="string"
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
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
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
          <label htmlFor="cep">CEP:</label>
            <input
              id="cep"
              name="cep"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cep}
              />
            {formik.touched.cep && formik.errors.cep ? (
              <div>{formik.errors.cep}</div>
            ) : null}

<label htmlFor="logradouro">Logradouro:</label>
            <input
              id="logradouro"
              name="logradouro"
              type="text"
              value={formik.values.logradouro}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
            {formik.touched.logradouro && formik.errors.logradouro ? (
              <div>{formik.errors.logradouro}</div>
            ) : null}

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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bairro}
            />
            {formik.touched.bairro && formik.errors.bairro ? (
              <div>{formik.errors.bairro}</div>
            ) : null}
          
          <label htmlFor="cidade">Cidade:</label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cidade}
            />
            {formik.touched.cidade && formik.errors.cidade ? (
              <div>{formik.errors.cidade}</div>
            ) : null}


            
          </Accordion.Body>
        </Accordion.Item>
      
        



        <button type="submit">Submit</button>
      </form>
    </Accordion>

  
      )

}

export default CadastroValidação