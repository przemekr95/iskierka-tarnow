import React from 'react';
import './../../../css/Contact.css'

const Contact = () => {
    return(
        <>
            <div className="wrapper padding__top">
                <h3 className="section__title"><span>Kontact</span></h3>
                <div className="section__wrapper">
                    <div className="contact__info">
                        <h4><span>MUKS</span> Iskierka Tarnów</h4>
                        <p><i className="fas fa-map-marker-alt"></i> ul. Krzyska 118, 33-103 Tarnów</p>
                        <p><span>NIP:</span> 873-26-11-598</p>
                        <p><span>REGON:</span> 850509910</p>
                        <p><i className="fas fa-money-check-alt"></i> 96 1160 2202 0000 0000 2839 6311</p>
                        <p><i className="fas fa-phone-square"></i> 605 721 423</p>
                        <p><i className="fas fa-envelope"></i> andlos@tlen.pl</p>
                    </div>
                    <div className="contact__photo"></div>
                </div>
            </div>
    </>
    )
}

export default Contact