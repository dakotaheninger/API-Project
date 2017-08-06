import React, { Component } from "react";
import axios from 'axios';
import './css/teamPage.css';

class TeamContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            roster: [],
            schedule: [],
            teamName: '',
            teamCity: ''
        }
    }

    componentDidMount(){
        let today = new Date();
        let year = today.getFullYear();
        let newRoster = [];
        let config = {
            "auth": {
                "username": "dakotaheninger" ,
                "password": "dh1133094"
            }
        }
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${this.props.match.params.sport}/${year-1}-${year}-regular/roster_players.json?fordate=${year}0101&team=${this.props.match.params.team}`, config)
        .then( response => {
            // console.log(response)
            newRoster = response.data.rosterplayers.playerentry
            this.setState({
                roster: newRoster,
                teamName: newRoster[0].team.Name,
                teamCity: newRoster[0].team.City
            })
        })

        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${this.props.match.params.sport}/latest-regular/full_game_schedule.json&team=${this.props.match.params.team}`, config)
        .then( response => {
            console.log(response)
            // newRoster = response.data.rosterplayers.playerentry
            // this.setState({
            //     roster: newRoster,
            //     teamName: newRoster[0].team.Name,
            //     teamCity: newRoster[0].team.City
            // })
        })
    }

    render() {

        return (
            <section className='team_page'>

                <h2>{this.state.teamCity} {this.state.teamName}</h2>

                <section className='team_roster team_container'>
                    <h2>Team Roster</h2>
                    {
                        this.state.roster.map( (person, i) => {
                            return  <div className='roster_player' key={i} >
                                        <p>{person.player.FirstName} {person.player.FirstName}, {person.player.Position}</p>
                                        <p>Age: {person.player.Age}</p>
                                        <p>Jersey: {person.player.JerseyNumber}</p>
                                    </div>
                        })
                    }
                </section>

                <section className='team_schedule team_container'>
                    <h2>Team Schedule</h2>
                    {/* {
                        this.state.schedule.map( (item, i) => {
                            return  <div className='schedule_item' key={i} >
                                        <p>{}</p>
                                        <p>{}</p>
                                        <p>{}</p>
                                    </div>
                        })
                    } */}
                </section>

            </section>
        );
    }

}


export default TeamContainer;