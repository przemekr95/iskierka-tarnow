import React, { Component } from 'react';
import PlayersList from '../../PlayersList/PlayersList';
import './../../../css/Teams.css';
import { players } from './players';

class Teams  extends Component {
    
    state={
        players: players,
        playersCopy: players,
        btns:[{id:"all", name:"Wszyscy", active: false},{id: "senior", name:"Seniorzy", active: false}, {id:"junior", name: "Juniorzy", active: false}, {id:"kadet", name:"Kadeci", active: false}]
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
            <div className="teams-wrapper">
                <div className="players-box">
                    <h2>Zawodnicy</h2>
                    <PlayersList players={this.state.playersCopy} handleBtns={this.handleBtns} btns={this.state.btns}/>
                </div>
            </div>
        )
    }
}

export default Teams