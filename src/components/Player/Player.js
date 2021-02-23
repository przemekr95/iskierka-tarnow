import React from 'react';
import './../../css/Player.css';

const Player = (props) => {
    return(
        <div className="player">
            <img src={props.player.img} alt={props.player.surname}/>
            <p className="player__name">{props.player.name} {props.player.surname}</p>
            <p className="player__position">{props.player.position}</p>
        </div>
    )
}

export default Player