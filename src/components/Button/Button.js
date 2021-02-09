import React from 'react'
import './../../css/Button.css'
import { Link } from 'react-router-dom';

const Button = () => {
    return(
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
    )
}

export default Button