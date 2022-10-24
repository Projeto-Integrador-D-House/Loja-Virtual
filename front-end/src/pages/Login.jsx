import "/public/style/login.css"

const Login = () => {
    return (
        <>

            <main className="login">
                <h3 className="titulo-login">Login</h3>
                <div className="novo-login">
                    <h5>Novo por aqui? <a href=""> Registre-se</a></h5>
                </div>
                <form className="login-entrar">
                    <label for="email">E-mail:</label>
                    <input type="email" name="email" id="email"/>
                    <label for="senha">Senha:</label>
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