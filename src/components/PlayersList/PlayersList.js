import React from 'react';
import Player from '../Player/Player';
import './../../css/PlayersList.css';

const PlayersList = (props) => {
    return(
        <>
            <div className="players-btns">
                {props.btns.map(btn=>{
                    return(
                        

                        <button className={btn.active ? "players-btn active" : "players-btn"} key={btn.id} value={btn.id} onClick={props.handleBtns}>{btn.name}</button>

                    )
                })}
            </div>
            <div className="players">
                {props.players.map(player=>{
                    return <Player key={player.id} player={player} />
                })}
            </div>
        </>
    )
}

export default PlayersList