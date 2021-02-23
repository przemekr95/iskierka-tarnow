import React, { useState } from 'react';
import Player from '../Player/Player';
import './../../css/PlayersList.css';


const PlayersList = (props) => {
    const [appState, changeState] = useState({
        activeObject: null,
        btns:[{id:"all", name:"Wszyscy"},{id: "senior", name:"Seniorzy"}, {id:"junior", name: "Juniorzy"}, {id:"kadet", name:"Kadeci"}],

    })

    function toggleActive(clickEvent, index){
        props.handleBtns(clickEvent);
        changeState({
            ...appState, activeObject: appState.btns[index]
        })
    }

    function toggleActiveStyles(index){
        
        if(appState.btns[index] === appState.activeObject){
            return "button active__category__btn";
        } else {
            return "button inactive__category__btn";
        }
    }

    return(   
        <>
            <div className="players__btns">
                {appState.btns.map((elements, index)=>(          
                    <button className={toggleActiveStyles(index)} key={elements.id} value={elements.id} onClick={(clickEvent)=>{toggleActive(clickEvent, index)}}>{elements.name}</button>
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