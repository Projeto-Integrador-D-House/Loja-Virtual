
import { useFormik} from 'formik';
import { useState, StrictMode } from 'react';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Collapse, Button, CardBody, Card,UncontrolledCollapse } from 'reactstrap';
import '/public/style/pagamento.css';


function Pagamentos (args) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    let formik = useFormik({

        initialValues: {
          entrega: "",
        },
    
         validationSchema: yup.object({
           entrega: yup
             .string()
             .required("Campo obrigatório"),
    
           
    
     }),
    
     onSubmit: (values) => {
        navigate('/api/cadastro');
          
        }
    
      });
        
    
    return (

        <div>
            <div className='toggle-pagamento'>
                <Button
                    color="primary"
                    id="toggler-1"
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                   <span><i className="fa-solid fa-mailbox"></i>Forma de Envio</span>
                </Button>
                <UncontrolledCollapse toggler="#toggler-1">
                    <Card>
                        <CardBody >
                            <div id="my-radio-group">Selecione a opção de entrega:</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="escolhaEntrega"
                                        id='entrega'
                                        value="PAC"
                                    />
                                    PAC
                                    <small> R$ 13,00</small>
                                    <small> chega em 28 dias</small>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="escolhaEntrega"
                                        id='entrega'
                                        value="SEDEX"
                                    />
                                    SEDEX
                                    <small> R$ 33,00</small>
                                    <small> chega em 10 dias</small>
                                </label>
                            </div>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            <div className='toggle-pagamento'>
                <Button
                    color="primary"
                    id="toggler-2"
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    Toggle
                </Button>
                <UncontrolledCollapse toggler="#toggler-2">
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            <div className='toggle-pagamento'>
                <Button
                    color="primary"
                    id="toggler-3"
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    Toggle
                </Button>
                <UncontrolledCollapse toggler="#toggler-3">
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        </div>

    );
}

export default Pagamentos