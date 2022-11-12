import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
        <div className="footer-principal">
            <div className="footer-logomarca">
                <a href="#"><img src="/image/IMG-20220823-WA0011.jpg" alt=""/></a>
            </div>
            <div className="footer-produtos">
                <h4 className="titulo">Produtos</h4>
                <ul>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Consoles</a></li>
                    <li><a href="#">Controles</a></li>
                    <li><a href="#">Acessórios</a></li>
                </ul>
            </div>
            <div className="footer-empresa">
                <h4 className="titulo">Loja</h4>
                <ul>
                    <li>Rua Marechal Deodoro</li>
                    <li>Funcionamos: Segunda a Sexta</li>
                    <li>Horário: 08:00 às 17:00</li>
                    <li>atendimento@64games.com.br</li>
                    <li>Telefones: 41 9 9999 0000</li>
                </ul>
            </div>
            <div className="footer-politica">
                <h4 className="titulo">Políticas</h4>
                <ul>
                    <li><a href="#">Termos  Condições</a></li>
                    <li><a href="#">Política de Envio</a></li>
                    <li><a href="#">Política de Reembolso</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Política de Cookie</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-redes_sociais">
            <h4>Redes Sociais</h4>
            <ul>
                <li><a href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
            </ul>
        </div>
        <div className="formas-de-pagamento">
            
            <h4>Formas de Pagamento</h4>
            <ul>
                <li>
                    <i className="fa-brands fa-cc-visa"></i>
                </li>
                <li>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    </li>
                <li>
                    <i className="fa-brands fa-cc-discover"></i>
                </li>
                <li>
                    <i className="fa-brands fa-cc-amex"></i>
                </li>
                <li>
                    <i className="fa-brands fa-cc-jcb"></i>
                </li>
                <li>
                    <i className="fa-brands fa-cc-paypal"></i>
                </li>
                <li>
                    <i className="fa-brands fa-cc-diners-club"></i>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer