import React, { Component } from "react";
import axios from 'axios';
import './stats.css';

class StatsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            searchBy: 'player',
            stats: []
        }

        this.updateUserInput = this.updateUserInput.bind(this);
        this.updateSearchBy = this.updateSearchBy.bind(this);
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

    getStats(){
        let config = {
            "auth": {
                "username": "dakotaheninger" ,
                "password": "dh1133094"
            }
        }
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/mlb/latest/scoreboard.json?`, config)
        .then( response => {
            console.log(response)
            // this.setState({
            //     stats: response.data
            // })
        })
    }

    render() {
        return (
            <section className='stats_page'>

                <section className='search_bar'>
                    
                    <input className='search_input'
                    placeholder='Enter Search Here' 
                    onChange={ this.updateUserInput }
                    value={ this.state.userInput } />

                    <h2>Search By</h2>
                    <select onChange={ this.updateSearchBy }>
                        <option value='player'>Player</option>
                        <option value='team'>Team</option>
                    </select>
                    <button onClick={ this.getStats }>Search</button>
                    
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