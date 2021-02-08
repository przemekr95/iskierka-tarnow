import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './../../css/Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>Iskierka</Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </nav>
        </>
    );
}

export default Navbar;