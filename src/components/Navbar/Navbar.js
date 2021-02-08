import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './../../css/Navbar.css';

function Navbar(){
    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>Iskierka</Link>
        </nav>
        </>
    );
}

export default Navbar;