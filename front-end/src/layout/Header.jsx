import React, {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'

const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <header id="header">
        <div className="header-logo">
            <Link to="/"><img src="/image/Logo-64-games.webp" alt="Logomarca 64Games" /></Link>
        </div>
        <nav className="header-menu">
            <div className="menu-principal">
                <ul>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><a href="#">Promoções</a></li>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><Link to="/login"><i className="fa-solid fa-user"></i>{user?.nome ?? ' Login'}</Link></li>
                    <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
export default Header