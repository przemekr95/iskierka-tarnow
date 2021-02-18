import React from 'react';
import './../../../css/Club.css'
import template from './../../../images/template-club.png'

const managements = [ {id: 1, name: "Andrzej", surname: "Łoś", position: "Prezes Klubu", img: template}, {id: 2, name: "Sebastian", surname: "Mruk", position: "Wiceprezes Klubu", img: template}, {id: 3, name: "Dariusz", surname: "Kuta", position: "Sekretarz Klubu", img: template}, {id: 4, name: "Bożena", surname: "Janiec", position: "Pełnomocnik Zarządu", img: template}]

const practice = [
    {
        category: "Minisiatkówka",
        info: [
            {day: "Poniedziałek", time: "16:00-17:30", location: "SP14, ul. Krzyska 118"},
            {day: "Środa", time: "16:00-17:30", location: "SP14, ul. Krzyska 118"}
        ]
    },
    {
        category: "Młodzicy",
        info: [
            {day: "Wtorek", time: "16:30-18:00", location: "SP14, ul. Krzyska 118"},
            {day: "Środa", time: "17:30-19:00", location: "SP14, ul. Krzyska 118"},
            {day: "Piątek", time: "16:00-17:30", location: "SP14, ul. Krzyska 118"}
        ]
    },
    {
        category: "Kadeci",
        info: [
            {day: "Poniedziałek", time: "17:30-19:00", location: "SP14, ul. Krzyska 118"},
            {day: "Wtorek", time: "18:45-20:45", location: "TOSiR, ul. Krupnicza 8a"},
            {day: "Czwartek", time: "18:45-20:45", location: "TOSiR, ul. Krupnicza 8a"},
            {day: "Piątek", time: "17:30-19:00", location: "SP14, ul. Krzyska 118"}
        ]
    },
    {
        category: "Juniorzy",
        info: [
            {day: "Poniedziałek", time: "20:00-21:30", location: "MDS, ul. Traugutta 5a"},
            {day: "Wtorek", time: "18:45-20:45", location: "TOSiR, ul. Krupnicza 8a"},
            {day: "Środa", time: "20:00-21:30", location: "MDS, ul. Traugutta 5a"},
            {day: "Czwartek", time: "18:45-20:45", location: "TOSiR, ul. Krupnicza 8a"},
            {day: "Piątek", time: "20:00-21:30", location: "MDS, ul. Traugutta 5a"}
        ]
    },
    {
        category: "Seniorzy",
        info: [
            {day: "Poniedziałek", time: "20:00-21:30", location: "MDS, ul. Traugutta 5a"},
            {day: "Środa", time: "20:00-21:30", location: "MDS, ul. Traugutta 5a"},
            {day: "Piątek", time: "20:00-21:30", location: "MDS, ul. Traugutta 5a"}
        ]
    }         
]

const managementsList = managements.map(item=>(
    <div className="management-item" key={item.id}>
        <img src={template} className="management-photo" alt={item.surname}></img>
        <div className="management-des">
            <h3>{item.name}</h3>
            <h3><span>{item.surname}</span></h3>
            <p>{item.position}</p>
        </div>
    </div>
))


function showPractice(index){
    const element = document.getElementById(index)
    if(element.className === "practice-box practice-active"){
        element.classList.remove("practice-active");
    } else{
        element.classList.add("practice-active");
    }
}

const practiceList = practice.map((item, index)=>(
    <div className="practice-group" key={index}>
    <h3 onClick={()=>{showPractice(index)}}><i className="fas fa-sort-down"></i> {item.category} <i className="fas fa-sort-down"></i></h3>
    <div className="practice-box" id={index}>
        {item.info.map((item, index)=>(
            <div className="practice-day" key={index}>
                <p><i className="fas fa-calendar-day"></i> {item.day}</p>
                <p><i className="far fa-clock"></i> {item.time}</p>
                <p><i className="fas fa-map-marker-alt"></i> {item.location}</p>
            </div>
        ))}
    </div>
</div>
))

const Club = () => {
    return(
        <>
            <div className="club-wrapper">
                <div className="club-history">
                    <h3 className="club-title"><span>Nasza</span> historia</h3>
                    <div className="history-wrapper">
                        <div className="photo"></div>
                        <div className="text">
                            <p><span>Międzyszkolny Uczniowski Klub Sportowy Iskierka Tarnów</span>, został założony 22 czerwca 1994 roku przez grupę miłośników aktywnego spędzania czasu wolnego – nauczycieli Szkoły Podstawowej nr 14 w Tarnowie.
                            <br/>
                            Klub wpisany jest do ewidencji stowarzyszeń sportowych m. Tarnowa pod numerem WSP.4221.2.1.2015 Pierwszym miejscem jego działalności  była Szkoła Podstawowa nr 14 przy ul. Krzyskiej 118 w Tarnowie, gdzie prowadzona była sekcja szermierki.
                            <br/>
                            Na przestrzeni kolejnych lat w Klubie powstawała  sekcja piłki siatkowej chłopców, jednak w wyniku ogromnego zainteresowania piłką siatkową władze <span>MUKS Iskierki Tarnów </span>podjęły strategiczną decyzję o skupieniu się na szkoleniu młodych adeptów tylko i wyłącznie tej dyscypliny sportu.
                            <br/>
                            <span>MUKS Iskierka Tarnów</span> od kilku lat prowadzi szkolenie we wszystkich grupach rocznikowych dzieci oraz młodzieży (chłopcy), począwszy od mini siatkówki, poprzez młodzików, kadetów aż po juniorów. Wszystkie grupy młodzieżowe są zgłaszone do oficjalnych rozgrywek MZPS. Dodatkowo w 2012 roku w Klubie powstała drużyna męska seniorów, która obecnie występuje w II lidze MZPS .
                            <br/>
                            Poza działalnością szkoleniową, <span>MUKS Iskierka Tarnów</span> angażuje się również w organizację różnorodnych imprez sportowych, obozów jak i akcji charytatywnych.</p>
                        </div>
                    </div>
                </div>
                <div className="club-management">
                    <h3 className="club-title"><span>Nasz</span> Zarząd</h3>
                    <div className="management-box">
                        {managementsList}
                    </div>
                </div>
                <div className="club-practice">
                    <h3 className="club-title"><span>Nasze</span> treningi</h3>
                    <div className="practice-wrapper">
                        {practiceList}
                    </div>
                    <p className="practice-info">W każdym roku startowym ubezpieczycielem wszystkich zawodników Międzyszkolnego Klubu Sportowego Iskierka Tarnów jest InterRisk. Umowa Ubezpieczeniowa zawierana jest co roku w dniu 27 czerwca.</p>
                </div>
            </div>
        </>
    )
}

export default Club