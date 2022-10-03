import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Registrar = () => {


return (<>

<Header />
<div class="container">
        <form id="form" action="/registrar" method="post" class="form">
            
            <h2>Faça seu cadastro conosco!</h2>
            
            <div class="form-control">
                
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Coloque seu nome aqui!"/>
                <small>Mensagem de Erro</small>
            </div>

            <div class="form-control">
                
                <label for="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" name="sobrenome" placeholder="Coloque seu sobrenome aqui!"/>
                <small>Mensagem de Erro</small>
            </div>
            
            <div class="form-control">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Coloque seu e-mail aqui!"/>
                <small>Mensagem de Erro</small>
            </div>
            
            <div class="form-control">   
                <label for="senha">Cadastre sua senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Coloque seu senha aqui!"/>
                <small>Mensagem de Erro</small>
            </div>

            <div class="form-control">   
                <label for="senha">Confirme sua senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Repita sua senha aqui!"/>
                <small>Mensagem de Erro</small>
            </div>

            <button type="submit" class="btn-comprar">Enviar</button>

        </form>
    </div>
<Footer />

</>)
}

export default Registrar