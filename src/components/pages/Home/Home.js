import React from 'react';
import './../../../css/Home.css'

const text = 'Międzyszkolny Uczniowski Klub Sportowy Iskierka Tarnów to blisko 27 lat tradycji! Został założony 22 czerwca 1994 roku. Dziś dzięki przychylności władz Miasta Tarnowa nasz klub prężnie rozwija się szczególnie pod kątem siatkarskim. Prowadzimy szkolenie w różnych grupach rocznikowych dzieci, młodzieży oraz dorosłych, począwszy od mini siatkówki, poprzez młodzików, kadetów i juniorów, aż po grupę seniorów. Wszystkie grupy szkoleniowe są zgłoszone do oficjalnych rozgrywek MZPS. Łączy nas pasja do sportu! Zachęcamy wszystkich do współtworzenia naszej społeczności, dla której liczy się sport i rywalizacja. Zapraszamy do kibicowania naszym zawodnikom.'

const Home = () => {
    return(
        <>
            <div className="home-wrapper">
                <div className="shadow"></div>
                <h1>Iskierka Tarnów</h1>
                <h2>#JednaDrużynaJedenCel</h2>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="home-info">
                <div className="text">
                    <h3>Iskierka</h3>
                    <h2>Tarnów</h2>
                    <p>{text}</p>
                </div>
                <div className="photo"></div>

            </div>
        </>
    )
}

export default Home