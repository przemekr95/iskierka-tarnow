import React, { Component } from 'react';
import PlayersList from '../../PlayersList/PlayersList';
import './../../../css/Teams.css';
import { players } from './players';
import trener from './../../../images/trener.jpg'

class Teams  extends Component {
    
    state={
        players: players,
        playersCopy: players,
        btns:[{id:"all", name:"Wszyscy"},{id: "senior", name:"Seniorzy"}, {id:"junior", name: "Juniorzy"}, {id:"kadet", name:"Kadeci"}]
    }



    handleBtns = (e) => {
        let playersCopy;
        if(e.target.value==="all"){
            playersCopy=this.state.players
        } 
        else{
            playersCopy=this.state.players.filter(item=>item.category===e.target.value)
        }
        this.setState({
            playersCopy: playersCopy
        })
    }

    render(){
        return(
            <div className="wrapper padding__top">
                <h3 className="section__title"><span>Nasz</span> trener</h3>
                <div className="player">
                    <img src={trener} alt="Andrzej Łoś"/>
                    <p className="player-name">Andrzej Łoś</p>
                    <p className="player-position">Trener</p>
                </div>
                <div className="section__wrapper">
                    <h3 className="section__title"><span>Nasi</span> zawodnicy</h3>
                    <PlayersList players={this.state.playersCopy} handleBtns={this.handleBtns} btns={this.state.btns}/>
                </div>
            </div>
        )
    }
}

export default Teams