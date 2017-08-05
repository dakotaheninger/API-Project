import React, { Component } from "react";
import './css/stats.css';
import autoBind from "react-autobind";

import SportSearch from './../components/SportSearch.js';

class StatsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            searchBy: 'player',
            stats: [{}],
            currentSport: 'nba'
        };
        autoBind(this);
    }

    updateUserInput(e){
        this.setState({
            userInput: e.target.value
        })
    }

    updateSearchBy(e){
        this.setState({
            searchBy: e.target.value
        })
    }

    handleNavClick(str){
        this.setState({
            currentSport: str
        })
    }

    putStatsOnState(newStats){
        if (newStats){
            newStats = newStats.slice(0, 100);
        }
        this.setState({
            stats: newStats
        });
        console.log(newStats)
    }

    closeNoResults(){
        this.setState({
            stats: [{}]
        })
    }

    render() {
        let results = null;
        if (this.state.stats){
            if (this.state.stats[0].rank){
    // Overall Standings shows team rank, name, win-loss spread, and avg point spread
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> 
                                Ranking: { item.rank}- { item.team.City } { item.team.Name } ({ item.team.Abbreviation }) 
                            </div> 
                             <div>
                                 Win/Loss: {item.stats.Wins['#text']}-{item.stats.Losses['#text']} ({ (Number(item.stats.WinPct['#text']) * 100).toFixed(1) }%)
                            </div> 
                            <div>Offense scores {item.stats.PtsPerGame['#text']} PPG</div>
                            <div>Defense allows {item.stats.PtsAgainstPerGame['#text']} PPG</div>
                            <div>
                                Avg Point Spread: { (Number(item.stats.PtsPerGame['#text']) - Number(item.stats.PtsAgainstPerGame['#text'])).toFixed(1) }
                            </div>
                    </div>
                })
            }else if (this.state.stats[0].stats && this.state.currentSport === 'mlb'){
    // MLB Player Stats show name, team, batting avg, homeruns, assists, and total bases
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> 
                                {item.player.FirstName} {item.player.LastName} ({item.team.Name})
                            </div> 
                            <div>Batting Avg: {item.stats.BattingAvg['#text']}</div>
                            <div>Homeruns: {item.stats.Homeruns['#text']}</div>
                            <div>Assists: {item.stats.Assists['#text']}</div>
                            <div>Total bases: {item.stats.TotalBases['#text']}</div>
                    </div>
                })
            }else if (this.state.stats[0].stats && this.state.currentSport === 'nba'){
    // NBA Player Stats show name, team, ppg, rebounds pg, assists pg, and steals pg
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> 
                                {item.player.FirstName} {item.player.LastName} ({item.team.Name})
                            </div> 
                            <div>Points Per Game: {item.stats.PtsPerGame['#text']}</div>
                            <div>Rebounds Per Game: {item.stats.RebPerGame['#text']}</div>
                            <div>Assists Per Game: {item.stats.AstPerGame['#text']}</div>
                            <div>Steals Per Game: {item.stats.StlPerGame['#text']}</div>
                    </div>
                })
            }else if (this.state.stats[0].stats && this.state.currentSport === 'nfl'){
    // NFL Player Stats show name, team, teackles, and interceptions. we could split this
    // out by position and show different stats for different positions! 
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> 
                                {item.player.FirstName} {item.player.LastName} ({item.team.Name})
                            </div> 
                            <div>Tackles: {item.stats.TackleTotal['#text']}</div>
                            <div>Interceptions: {item.stats.Interceptions['#text']}</div>
                    </div>
                })
            }else if (this.state.stats[0].stats && this.state.currentSport === 'nhl'){
    // NHL Player Stats show name, team, goals, assists, penalties, and shot pct
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> 
                                {item.player.FirstName} {item.player.LastName} ({item.team.Name})
                            </div> 
                            <div>Goals: {item.stats.Goals['#text']}</div>
                            <div>Assists: {item.stats.Assists['#text']}</div>
                            <div>Penalties: {item.stats.Penalties['#text']}</div>
                            <div>Shot percentage: {item.stats.ShotPercentage['#text']}</div>
                    </div>
                })
            }else if (this.state.stats[0].player){
    // Team Roster shows name, age, team, position, height, and jersey number
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div>
                                Name: {item.player.FirstName} {item.player.LastName}, {item.player.Age}
                            </div>
                            <div>Team: {item.team.City} {item.team.Name} ({item.team.Abbreviation})</div>
                            <div>Position: {item.player.Position}</div>
                            <div>Height: {item.player.Height}</div>
                            <div>Jersey: {item.player.JerseyNumber}</div>
                    </div>
                })
            }
        }else if(this.state.stats !== [{}]){
            results = <div className='no_results'>
                    <p>No results returned with that search</p>
                    <p className='close_no_results' onClick={ this.closeNoResults }>X</p>
                </div>
        }

        return (
            <section className='stats_page'>

                <div className='stats_nav'>
                    <div onClick={ () => this.handleNavClick('nba') } >
                        NBA
                    </div>
                    <div onClick={ () => this.handleNavClick('nhl') } >
                        NHL
                    </div> 
                    <div onClick={ () => this.handleNavClick('mlb') } >
                        MLB
                    </div>  
                    <div onClick={ () => this.handleNavClick('nfl') } >
                        NFL
                    </div>                    
                </div>

                <SportSearch sport={ this.state.currentSport } 
                putStatsOnState={ this.putStatsOnState } />

                <section className='results'>
                    
                        { results }
                   
                </section>

            </section>
        );
    }

}


export default StatsContainer;