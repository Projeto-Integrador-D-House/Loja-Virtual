
import { useFormik } from 'formick';
import {useNavigate} from "react-router-dom";
import * as yup from "yup";

function CadastroValidação() {

    const navigate = useNavigate()

    const formick = useFormik({
        initialValues: {
            nome:"",
            sobronome:"",
            cpf:"",
            email:"",
        },

        onSubmit: valores => {
            navigate('/api/cadastro');
        }

    });

  return (
    <div>CadastroValidação</div>
  )
}

export default CadastroValidação