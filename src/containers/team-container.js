import React, { Component } from "react";
import axios from 'axios';
import './css/teamPage.css';

class TeamContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {

        return (
            <section className='team_page'>

                This is the { this.props.match.params.teamName } team page

            </section>
        );
    }

}


export default TeamContainer;