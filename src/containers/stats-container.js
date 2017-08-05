import React, { Component } from "react";
import './css/stats.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SportSearch from './../components/SportSearch.js';

import nflImg from './../img/nfl.png';
import nbaImg from './../img/nba.png';
import nhlImg from './../img/nhl.jpg';
import mlbImg from './../img/mlb.png';

import GSW from './../img/GSW.png';
import SAS from './../img/SAS.png';
import HOU from './../img/HOU.png';
import BOS from './../img/BOS.png';
import LAC from './../img/LAC.png';
import TOR from './../img/TOR.png';
import UTA from './../img/UTA.png';
import CLE from './../img/CLE.png';
import WAS from './../img/WAS.png';
import OKL from './../img/OKL.png';
import MEM from './../img/MEM.png';
import ATL from './../img/ATL.png';
import MIL from './../img/MIL.png';
import IND from './../img/IND.png';
import MIA from './../img/MIA.png';
import CHI from './../img/CHI.png';
import POR from './../img/POR.png';
import DEN from './../img/DEN.png';
import DET from './../img/DET.png';
import CHA from './../img/CHA.png';
import NOP from './../img/NOP.png';
import DAL from './../img/DAL.png';
import SAC from './../img/SAC.png';
import MIN from './../img/MIN.png';
import NYK from './../img/NYK.png';
import ORL from './../img/ORL.png';
import PHI from './../img/PHI.png';
import LAL from './../img/LAL.png';
import PHX from './../img/PHX.png';
import BRO from './../img/BRO.png';

class StatsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            stats: [{team:{}}],
            currentSport: 'nba'
        }

        this.getRankings = this.getRankings.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.putStatsOnState = this.putStatsOnState.bind(this);
        this.getImageSource = this.getImageSource.bind(this);
    }

    componentDidMount(){
        this.getRankings(this.state.currentSport)
    }

    getRankings(sport){
        let today = new Date();
        let year = today.getFullYear();
        let newStats = [];
        let config = {
            "auth": {
                "username": "dakotaheninger" ,
                "password": "dh1133094"
            }
        };
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sport}/${year-1}-${year}-regular/overall_team_standings.json`, config)
        .then( response => {
            newStats = response.data.overallteamstandings.teamstandingsentry
            this.putStatsOnState(newStats)
        })
    }

    handleNavClick(str){
        this.setState({
            currentSport: str
        })
        this.getRankings(str)
    }

    putStatsOnState(newStats){
        this.setState({
            stats: newStats
        })
        console.log(newStats)
    }

    getImageSource(str){
        if (this.state.currentSport === 'nba'){
            switch(str){
                case 'GSW':
                    return GSW
                case 'SAS':
                    return SAS
                case 'HOU':
                    return HOU
                case 'BOS':
                    return BOS
                case 'LAC':
                    return LAC
                case 'TOR':
                    return TOR
                case 'UTA':
                    return UTA
                case 'CLE':
                    return CLE
                case 'WAS':
                    return WAS
                case 'OKL':
                    return OKL
                case 'MEM':
                    return MEM
                case 'ATL':
                    return ATL
                case 'MIL':
                    return MIL
                case 'IND':
                    return IND
                case 'MIA':
                    return MIA
                case 'CHI':
                    return CHI
                case 'POR':
                    return POR
                case 'DEN':
                    return DEN
                case 'DET':
                    return DET
                case 'CHA':
                    return CHA
                case 'NOP':
                    return NOP
                case 'DAL':
                    return DAL
                case 'SAC':
                    return SAC
                case 'MIN':
                    return MIN
                case 'NYK':
                    return NYK
                case 'ORL':
                    return ORL
                case 'PHI':
                    return PHI
                case 'LAL':
                    return LAL
                case 'PHX':
                    return PHX
                case 'BRO':
                    return BRO
                default:
                    return GSW
            }
        }else if(this.state.currentSport === 'nfl'){
            return nflImg
        }else if(this.state.currentSport === 'nhl'){
            return nhlImg
        }else if(this.state.currentSport === 'mlb'){
            return mlbImg
        }
    }

    render() {

        let sport  = this.state.currentSport;
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

                <div className='sport_heading'>
                    { img }
                    <h2>Overall {this.state.currentSport.toUpperCase()} Standings</h2>
                    <h3>Select a team to visit their page</h3>
                </div>

                <section className='results'>
                    
                        {
                            this.state.stats.map( (item, i) => {
                                let abbr = item.team.Abbreviation
                                let teamName = item.team.Name
                                let imgSrc = this.getImageSource(abbr)

                                return <Link key={i} 
                                        className='team_info' 
                                        to={`/team/${teamName}`}
                                        >
                                        <div> 
                                            <img src={imgSrc} alt='team logo' className='team_logo' />
                                            Ranking: { item.rank}- { item.team.City } { item.team.Name } ({ item.team.Abbreviation }) 
                                        </div> 
                                        </Link>
                            })
                        }
                   
                </section>

            </section>
        );
    }

}


export default StatsContainer;