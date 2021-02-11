import React from 'react';
import {Link} from 'react-router-dom'
import './../../../css/Club.css'

const Club = () => {
    return(
        <>
            <h1>Club</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href="../../../../package.json" download>Daj mie filipaaa</a>
            <Link to="/Babiec-F.jpg" target="_blank" download>Daj mie po Reactowemu</Link>
        </>
    )
}

export default Club