import React, {useState} from "react";
import '/public/style/cadastro.css'

const Cadastro = () => {

const [senha, setSenha] = useState('')
const [senhaC, setSenhaC] = useState('')

let error = senha !== senhaC

return (

<div className="container">
        <form id="form" action="/api/registrar" method="post" className="form">
            
            <h2>Faça seu cadastro conosco!</h2>
            
            <div className="form-control">
                
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Coloque seu nome aqui!"/>
                <small>Mensagem de Erro</small>
            </div>

            <div className="form-control">
                
                <label htmlFor="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" name="sobrenome" placeholder="Coloque seu sobrenome aqui!"/>
                <small>Mensagem de Erro</small>
            </div>
            
            <div className="form-control">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Coloque seu e-mail aqui!"/>
                <small>Mensagem de Erro</small>
            </div>
            
            <div className="form-control">   
                <label htmlFor="senha">Cadastre sua senha:</label>
                <input type="password" id="senha" name="senha" onChange={(e)=> setSenha(e.target.value)} placeholder="Coloque seu senha aqui!"/>
                <small>Mensagem de Erro</small>
            </div>
            <div className={`form-control ${error ? 'erro': ''}`}>   
                <label htmlFor="senhaC">Confirme sua senha:</label>
                <input type="password" id="senhaC" onChange={(e)=> setSenhaC(e.target.value)} placeholder="Repita sua senha aqui!"/>
                <small>As senhas precisam ser iguais</small>
            </div>

            <button type="submit" className="btn-comprar"  disabled={error}>Enviar</button>

        </form>
    </div>

)
}

export default Cadastro