import React, {Component} from "react";
import './css/stats.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import autoBind from "react-autobind";

import SportSearch from './../components/SportSearch.js';
import Teams from "../components/teams";


class StatsContainer extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            stats: [{team: {}}],
            currentSport: 'nba'
        };
    }

    componentDidMount() {
        this.getRankings(this.state.currentSport)
    }

    getRankings(sport) {
        let today = new Date();
        let year = today.getFullYear();
        let newStats = [];
        let config = {
            "auth": {
                "username": "dakotaheninger",
                "password": "dh1133094"
            }
        };
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sport}/${year - 1}-${year}-regular/overall_team_standings.json`, config)
            .then(response => {
                newStats = response.data.overallteamstandings.teamstandingsentry;
                this.putStatsOnState(newStats)
            })
    }

    handleNavClick(str) {
        this.setState({
            currentSport: str
        });
        this.getRankings(str)
    }

    putStatsOnState(newStats) {
        this.setState({
            stats: newStats
        });
        console.log(newStats)
    }

    getTeams() {
        return this.state.stats.map((item, index) => {
            return <Teams sport={this.state.currentSport} item={item} index={index} key={item + index}/>
        })
    }


    render() {

        let sport = this.state.currentSport;
        let img = null;
        if (sport === 'nba') {
            img = <img src="/images/nba.png" className='search_img' alt='nba symbol'/>
        } else if (sport === 'nfl') {
            img = <img src="/images/nfl.png" className='search_img' alt='nfl symbol'/>
        } else if (sport === 'nhl') {
            img = <img src="/images/nhl.jpg" className='search_img' alt='nhl symbol'/>
        } else if (sport === 'mlb') {
            img = <img src="/images/mlb.png" className='search_img' alt='mlb symbol'/>
        }

        return (
            <div className='stats_page'>
                <div className="row">
                    <div className='col-md-12 col-sm-12 col-xs-12 stats-nav'>
                        <div onClick={() => this.handleNavClick('nba')}>
                            NBA
                        </div>
                        <div onClick={() => this.handleNavClick('nhl')}>
                            NHL
                        </div>
                        <div onClick={() => this.handleNavClick('mlb')}>
                            MLB
                        </div>
                        <div onClick={() => this.handleNavClick('nfl')}>
                            NFL
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sport-heading">
                        {img}
                        <h2>Overall {this.state.currentSport.toUpperCase()} Standings</h2>
                        <h3>Select a team to visit their page</h3>
                    </div>
                </div>
                <div className="row">
                    {this.getTeams()}
                </div>

            </div>
        );
    }

}


export default StatsContainer;