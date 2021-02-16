import React, { useState } from 'react';
import Player from '../Player/Player';
import './../../css/PlayersList.css';


const PlayersList = (props) => {
    const [appState, changeState] = useState({
        activeObject: null,
        btns:[{id:"all", name:"Wszyscy"},{id: "senior", name:"Seniorzy"}, {id:"junior", name: "Juniorzy"}, {id:"kadet", name:"Kadeci"}],

    })





    function toggleActive(index){
        
        changeState({
            ...appState, activeObject: appState.btns[index]
        })
    }

    function toggleActiveStyles(index){
        
        if(appState.btns[index] === appState.activeObject){
            return "players-btn active";
        } else {
            return "players-btn inactive";
        }
    }


    return(
        <>
            <div className="players-btns">
                {props.btns.map(btn=>{
                    return(
                        <button className={btn.active ? "players-btn inactive" : "players-btn"} key={btn.id} value={btn.id} onClick={props.handleBtns}>{btn.name}</button>
                    )
                })}


                {
                    appState.btns.map((elements, index)=>(
                        <button className={toggleActiveStyles(index)} key={elements.id} value={elements.id} onClick={()=>{toggleActive(index)}}>{elements.name}</button>
                    ))}



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