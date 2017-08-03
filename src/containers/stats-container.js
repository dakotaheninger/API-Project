import React, { Component } from "react";
import axios from 'axios';
import './stats.css';

import SportSearch from './../components/SportSearch.js';
// import MLBSearch from './../components/MLBSearch.js';
// import NHLSearch from './../components/NHLSearch.js';
// import NFLSearch from './../components/NFLSearch.js';

class StatsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            searchBy: 'player',
            stats: [],
            currentSport: 'nba'
        }

        this.updateUserInput = this.updateUserInput.bind(this);
        this.updateSearchBy = this.updateSearchBy.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.putStatsOnState = this.putStatsOnState.bind(this);
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
        this.setState({
            stats: newStats
        })
        console.log(newStats)
    }

    render() {

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
                    <ul>
                        {
                            this.state.stats.map( (item, i) => {
                                return <li key={i}>item</li>
                            })
                        }
                    </ul>
                </section>

            </section>
        );
    }

}


export default StatsContainer;