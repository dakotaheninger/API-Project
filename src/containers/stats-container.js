import React, { Component } from "react";
import axios from 'axios';
import './stats.css';

import NBASearch from './../components/NBASearch.js';
import MLBSearch from './../components/MLBSearch.js';
import NHLSearch from './../components/NHLSearch.js';
import NFLSearch from './../components/NFLSearch.js';

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
        this.getStats = this.getStats.bind(this);
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

    getStats(){
        let config = {
            "auth": {
                "username": "dakotaheninger" ,
                "password": "dh1133094"
            }
        }
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/mlb/latest/daily_player_stats.json?fordate=20170801&team=chicago-cubs`, config)
        .then( response => {
            console.log(response)
            // this.setState({
            //     stats: response.data
            // })
        })
    }

    render() {

        let searchForm;
        if (this.state.currentSport === 'nba'){
            searchForm = <NBASearch />
        }else if (this.state.currentSport === 'nhl'){
            searchForm = <NHLSearch />
        }else if (this.state.currentSport === 'mlb'){
            searchForm = <MLBSearch />
        }else if (this.state.currentSport === 'nfl'){
            searchForm = <NFLSearch />
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

                <section className='search_bar'>

                    { searchForm }
                    
                    {/* <input className='search_input'
                    placeholder='Enter Search Here' 
                    onChange={ this.updateUserInput }
                    value={ this.state.userInput } />

                    <h2>Search By</h2>
                    <select onChange={ this.updateSearchBy }>
                        <option value='player'>Player</option>
                        <option value='team'>Team</option>
                    </select>
                    <button onClick={ this.getStats }>Search</button> */}

                </section>

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