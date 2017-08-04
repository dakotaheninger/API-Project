import React, { Component } from "react";
import './stats.css';

import SportSearch from './../components/SportSearch.js';

class StatsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            searchBy: 'player',
            stats: [{}],
            currentSport: 'nba'
        }

        this.updateUserInput = this.updateUserInput.bind(this);
        this.updateSearchBy = this.updateSearchBy.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.putStatsOnState = this.putStatsOnState.bind(this);
        this.closeNoResults = this.closeNoResults.bind(this);
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
            newStats = newStats.slice(0, 20);
        }
        this.setState({
            stats: newStats
        })
        // console.log(newStats)
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
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> { item.rank}: { item.team.Name } </div> 
                    </div>
                })
            }else if (this.state.stats[0].player){
                results = this.state.stats.map( (item, i) => {
                    return <div key={i} className='player_info'>
                            <div> 
                                {item.player.FirstName} {item.player.LastName} ({item.team.Name})
                            </div> 
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