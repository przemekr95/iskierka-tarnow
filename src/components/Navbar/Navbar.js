import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './../../css/Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

const navItems = [
    {name: "Strona Główna", link: "/"},
    {name: "Zespół", link: "/teams"},
    {name: "Klub", link: "/club"},
    {name: "Kontakt", link: "/contact"}
]

const nav = navItems.map(item => (
    <li className='nav-item' key={item.name}>
        <Link to={item.link} className="nav-links" onClick={closeMobileMenu}>
        {item.name}
        </Link>
    </li>
))

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-volleyball-ball'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <a className="facebook__link" href="https://www.facebook.com/MUKSIskierkaTarnow">Aktualności</a>
                {nav}
            </ul>        
        </nav>
        </>
    );
}

export default Navbar;