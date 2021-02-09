import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './../../css/Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);




    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-volleyball-ball'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Strona Główna
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/teams' className="nav-links" onClick={closeMobileMenu}>
                        Zespół
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/club' className="nav-links" onClick={closeMobileMenu}>
                        Klub
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                        Kontakt
                    </Link>
                </li>
            </ul>
            
        </nav>
        </>
    );
}

export default Navbar;