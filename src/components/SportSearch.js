import React, { Component } from "react";
import './search.css';
import axios from 'axios';

import nflImg from './../img/nfl.png';
import nbaImg from './../img/nba.png';
import nhlImg from './../img/nhl.jpg';
import mlbImg from './../img/mlb.png';

class SportSearch extends Component{
    constructor(props){
        super(props);

        this.state = {
            teamInput: '',
            playerInput: ''
        }

        this.getStats = this.getStats.bind(this);
        this.updatePlayerInput = this.updatePlayerInput.bind(this);
        this.updateTeamInput = this.updateTeamInput.bind(this);
    }

    getStats(str){
        let today = new Date();
        let year = today.getFullYear();
        let newStats = [];
        let config = {
            "auth": {
                "username": "dakotaheninger" ,
                "password": "dh1133094"
            }
        }

        if (str === 'standings'){

            axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${this.props.sport}/${year-1}-${year}-regular/overall_team_standings.json`, config)
            .then( response => {
                newStats = response.data.overallteamstandings.teamstandingsentry
                this.props.putStatsOnState(newStats)
            })

        }else if (str === 'roster'){

             axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${this.props.sport}/${year-1}-${year}-regular/roster_players.json?fordate=${year}0101&team=${this.state.teamInput}`, config)
            .then( response => {
                // console.log(response)
                newStats = response.data.rosterplayers.playerentry
                this.props.putStatsOnState(newStats)
            })

        }else if (str === 'player'){

            axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${this.props.sport}/${year-1}-${year}-regular/daily_player_stats.json?fordate=${year}0101&player=${this.state.playerInput}`, config)
            .then( response => {
                newStats = response.data.dailyplayerstats.playerstatsentry
                this.props.putStatsOnState(newStats)
            })

        }

    }

    updateTeamInput(e){
        this.setState({
            teamInput: e.target.value
        })
    }

    updatePlayerInput(e){
        this.setState({
            playerInput: e.target.value
        })
    }

    render() {

        let { sport } = this.props;
        let img = null;
        if (sport === 'nba'){
            img = <img src={nbaImg} className='search_img' alt='nba symbol' />
        }else if (sport === 'nfl'){
            img = <img src={nflImg} className='search_img' alt='nfl symbol' />
        }else if (sport === 'nhl'){
            img = <img src={nhlImg} className='search_img' alt='nhl symbol' />
        }else if (sport === 'mlb'){
            img = <img src={mlbImg} className='search_img' alt='mlb symbol' />
        }

        return (
            <section className='search_bar'>
                <section className='search'>

                    { img }
                    
                    <div className='search_options' onClick={ () => this.getStats('standings') } >
                        Overall Standings
                    </div>
                    <div className='search_options' onClick={ () => this.getStats('roster') } >
                        Team Roster
                    </div>
                    <div className='search_options' onClick={ () => this.getStats('player') } >
                        Player Stats
                    </div>

                    <input className='team_input input' 
                    onChange={ this.updateTeamInput } 
                    placeholder='Enter City Abbreviation ex: DAL'
                    value={ this.state.teamInput }
                    />

                    <input className='player_input input' 
                    onChange={ this.updatePlayerInput } 
                    placeholder='Enter Players Last Name'
                    value={ this.state.playerInput }
                    />

                </section>
            </section>
        );
    }

}


export default SportSearch;