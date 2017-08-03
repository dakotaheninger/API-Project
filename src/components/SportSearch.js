import React, { Component } from "react";
import './search.css';

class SportSearch extends Component{
    constructor(props){
        super(props);

        this.state = {
            selection: 'standings'
        }

        this.updatePlayerInput = this.updatePlayerInput.bind(this);
        this.updateTeamInput = this.updateTeamInput.bind(this);
    }

    handleSelectionChange(str){
        this.setState({
            selection: str
        })
    }

    updateTeamInput(){

    }

    updatePlayerInput(){
        
    }

    render() {
        
        let { sport } = this.props;

        return (
            <section className='search_bar'>
                <section className='search'>

                    <div className='search_img nhl_img'></div>
                    
                    <div className='search_options'>Overall Team Standings</div>
                    <div className='search_options'>Team Roster</div>
                    <div className='search_options'>Player Stats</div>

                    <input className='team_input input' 
                    onChange={ this.updateTeamInput } 
                    placeholder='Enter Team Name'
                    />

                    <input className='player_input input' 
                    onChange={ this.updatePlayerInput } 
                    placeholder='Enter Player Name'
                    />

                </section>
            </section>
        );
    }

}


export default SportSearch;