import React from 'react'

const Header = () => {
    return (
        <header id="header">
        <div className="header-logo">
            <a href="#"><img src="/image/Logo-64-games.webp" alt="Logomarca 64Games" /></a>
        </div>
        <nav className="header-menu">
            <div className="menu-principal">
                <ul>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Promoções</a></li>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#"><i className="fa-solid fa-user"></i> Login</a></li>
                    <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
export default Header