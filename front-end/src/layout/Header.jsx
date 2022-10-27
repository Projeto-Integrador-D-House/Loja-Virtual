import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    const [user, setUser] = useState("")
    useEffect(()=>{
      const userLocal = localStorage.getItem('user_logged')
      setUser(userLocal)
    },[])
    return (
        <header id="header">
        <div className="header-logo">
            <Link to="/"><img src="/image/Logo-64-games.webp" alt="Logomarca 64Games" /></Link>
        </div>
        <nav className="header-menu">
            <div className="menu-principal">
                <ul>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Promoções</a></li>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><Link to="/login"><i className="fa-solid fa-user"></i>{user ?? ' Login'}</Link></li>
                    <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
export default Header