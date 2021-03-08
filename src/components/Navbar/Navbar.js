import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './../../css/Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => {
        window.scrollTo(0, 0);
        setClick(false);
    }

const navItems = [
    {name: "Strona Główna", link: "/"},
    {name: "Zespół", link: "/teams"},
    {name: "Klub", link: "/club"},
    {name: "Kontakt", link: "/contact"}
]

const nav = navItems.map(item => (
    <li className='nav__item' key={item.name}>
        <Link to={item.link} className="nav__links" onClick={closeMobileMenu}>
        {item.name}
        </Link>
    </li>
))

const changeBackground = () => {
    if(window.scrollY >= 80){
        setNavbar(true)
    }else {
        setNavbar(false)
    }
}

window.addEventListener('scroll', changeBackground)

    return (
        <>
        <nav className={navbar ? 'navbar activeNav' : 'navbar'}>
            <Link to='/' className='navbar__logo'></Link>
            <div className='menu__icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-volleyball-ball'} />
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                <a className="facebook__link" href="https://www.facebook.com/MUKSIskierkaTarnow"><i className="fab fa-facebook-square"></i>Aktualności</a>
                {nav}
            </ul>        
        </nav>
        </>
    );
}

export default Navbar;