
import {useContext, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {Link, useNavigate} from 'react-router-dom';
import "/public/style/login.css";
import { UserContext } from '../App';
import {decode} from 'base-64'
const Login = () => {

    const {setUser} = useContext(UserContext);
    const [cookie] = useCookies();
    const redirect = useNavigate();

    useEffect(()=>{
        if(cookie.cliente){
            let payload = cookie.cliente.split('.')
            const decodeinfo = decode(payload[1])
            setUser(JSON.parse(decodeinfo))
            redirect('/')
        }
    },[])

    return (
        <>

            <main className="login">
                <h3 className="titulo-login">Login</h3>
                <div className="novo-login">
                    <h5>Novo por aqui?<Link to="/cadastro">Registre-se</Link></h5>
                </div>
                <form method='post' action='/api/login' className="login-entrar">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" id="senha"/>
                    <small><a href="http://"> Esqueceu a senha?</a></small>
                    <button className="btn-login" type="submit">Entrar</button>
                </form>

                        <div className="login-externo">
                            <div className="titulo-login__externo">
                                <div className="linha-direita">
                                    <hr/>
                                </div>
                                <div className="texto-login__externo">
                                    <h4>ou faça login com</h4>
                                </div>
                                <div className="linha-esquerda">
                                    <hr/>
                                </div>
                            </div>
                            <div className="login-facebook">
                                <button><i className="fa-brands fa-square-facebook"></i>  Facebook</button>
                            </div>

                            <div className="login-google">
                                <button type="submit"><i className="fa-brands fa-google"></i>   Google</button>
                            </div>
                        </div>


            </main>

        </>
    )
}

export default Login