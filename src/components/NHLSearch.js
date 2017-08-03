import React, { Component } from "react";
import './search.css';

class NHLSearch extends Component{


    render() {

        return (
            <section className='search'>

                <div className='search_img nhl_img'></div>
                
                <div className='search_options'>Overall Team Standings</div>
                <div className='search_options'>Team Roster</div>
                <div className='search_options'>Player Search</div>

            </section>
        );
    }

}


export default NHLSearch;