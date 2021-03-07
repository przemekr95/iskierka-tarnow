import React from 'react';
import './../../../css/Home.css';
import tarnow from './../../../images/partners/tarnow.png';
import pzps from './../../../images/partners/pzps.png';
import mzps from './../../../images/partners/mzps.png';
import tarnowska from './../../../images/partners/tarnowska.png';
import mpec from './../../../images/partners/mpec.png';
import tw from './../../../images/partners/tw.png';
import marju from './../../../images/partners/marju.png';
import megael from './../../../images/partners/megael.jpg';

const textAbout = 'Międzyszkolny Uczniowski Klub Sportowy Iskierka Tarnów to blisko 27 lat tradycji! Został założony 22 czerwca 1994 roku. Dziś dzięki przychylności władz Miasta Tarnowa nasz klub prężnie rozwija się szczególnie pod kątem siatkarskim. Prowadzimy szkolenie w różnych grupach rocznikowych dzieci, młodzieży oraz dorosłych, począwszy od mini siatkówki, poprzez młodzików, kadetów i juniorów, aż po grupę seniorów. Wszystkie grupy szkoleniowe są zgłoszone do oficjalnych rozgrywek MZPS. Łączy nas pasja do sportu! Zachęcamy wszystkich do współtworzenia naszej społeczności, dla której liczy się sport i rywalizacja. Zapraszamy do kibicowania naszym zawodnikom.'

const partners = [
    {id:"tarnow", img: tarnow, link:"https://tarnow.pl/"},
    {id:"pzps", img: pzps, link:"https://www.pzps.pl/pl/"},
    {id:"mzps", img: mzps, link:"http://www.mzps.pl/"},
    {id:"tarnowska", img: tarnowska, link:"https://www.tarnowska.tv/"},
    {id:"mpec", img: mpec, link:"https://mpec.tarnow.pl/"},
    {id:"tw", img: tw, link:"http://www.tw.tarnow.pl/"},
    {id:"marju", img: marju, link:"https://www.marju.pl/"},
    {id:"megael", img: megael, link:"http://www.megael.pl/"}

]

const partnersList = partners.map(item=>(
        <a target="_blank" rel="noreferrer" href={item.link} key={item.id}>
            <img className="partner__logo" src={item.img} alt={item.id}/>
        </a>
    
))

const Home = () => {
    return(
        <>
            <div className="wrapper home__wrapper">
                <div className="home__shadow"></div>
                <h1>Iskierka Tarnów</h1>
                <h2>#JednaDrużynaJedenCel</h2>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="home__info">
                <div className="home__text">
                    <h3>Iskierka</h3>
                    <h2>Tarnów</h2>
                    <p>{textAbout}</p>
                </div>
                <div className="home__photo"></div>
            </div>
            <div className="wrapper">
                <h3 className="section__title"><span>Nasi</span> partnerzy</h3>
                <div className="partner__wrapper">
                    {partnersList}
                </div>
            </div>
        </>
    )
}

export default Home