
import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import '/public/style/cadastro.css'

function CadastroValidação() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            nome:"",
            sobronome:"",
            dataNascimento:"",
            cpf:"",
            email:"",
        },

        validationSchema: yup.object({
            nome:yup.string().required("Campo obrigatório"),
            sobronome:yup.string().required("Campo obrigatório"),
            dataNascimento:yup.number().required("Campo obrigatório"),
            cpf:yup.number("").integer().positive().required("Campo Obrigatório"),
            email:yup.string().email("E-mail inválido").required("O campo é obrigatório"),

        }),

        onSubmit: valores => {
            navigate('/api/cadastro');
        }

    });

  return (
    <form onSubmit={formik.handleSubmit} className="form">

        <h2>Faça seu cadastro conosco!</h2>

       <label htmlFor="nome">Name:</label>
       <input
         id="nome"
         name="nome"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
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
         value={formik.values.lastName}
       />
       {formik.touched.sobrenome && formik.errors.lastName ? (
         <div>{formik.errors.sobrenome}</div>
       ) : null}


<label htmlFor="dataNascimento">Data de Nascimento:</label>
       <input
         id="dataNascimento"
         name="dataNascimento"
         type="dataNascimento"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
         <div>{formik.errors.dataNascimento}</div>
       ) : null}

<label htmlFor="cpf">CPF:</label>
       <input
         id="cpf"
         name="cpf"
         type="cpf"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.cpf && formik.errors.cpf? (
         <div>{formik.errors.cpf}</div>
       ) : null}
 
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


 
       <button type="submit">Submit</button>
     </form>
  )
}

export default CadastroValidação