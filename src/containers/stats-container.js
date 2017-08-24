import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import Teams from "../components/teams";


class StatsContainer extends Component {

    componentWillMount() {
        this.props.getIndStats(this.props.currentSport);
    }


    getTeams() {
        return this.props.teamStats.map((item, index) => {
            return <Teams setTeam={this.props.setTeam} roster={this.props.roster} getSchedule={this.props.getSchedule} getRoster={this.props.getRoster}
                          sport={this.props.currentSport} item={item} index={index} key={item + index}/>
        })
    }


    render() {
        let sport = this.props.currentSport;
        let img = null;
        if (sport === "nba") {
            img = <img src="/images/nba.png" className='search-img' alt='nba symbol'/>
        } else if (sport === "nfl") {
            img = <img src="/images/nfl.png" className='search-img' alt='nfl symbol'/>
        } else if (sport === "nhl") {
            img = <img src="/images/nhl.jpg" className='search-img' alt='nhl symbol'/>
        } else if (sport === "mlb") {
            img = <img src="/images/mlb.png" className='search-img' alt='mlb symbol'/>
        }

        return (
            <div className='stats-page'>
                <div className="row">
                    <div className='col-md-12 col-sm-12 col-xs-12 stats-nav'>
                        <div onClick={() => {
                            this.props.setSport("nba");
                            this.props.getIndStats("nba");
                        }}>
                            NBA
                        </div>
                        <div onClick={() => {
                            this.props.setSport("nhl");
                            this.props.getIndStats("nhl");
                        }}>
                            NHL
                        </div>
                        <div onClick={() => {
                            this.props.setSport("mlb");
                            this.props.getIndStats("mlb");
                        }}>
                            MLB
                        </div>
                        <div onClick={() => {
                            this.props.setSport("nfl");
                            this.props.getIndStats("nfl");
                        }}>
                            NFL
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sport-heading">
                        {img}
                        <h2>Overall {this.props.currentSport.toUpperCase()} Standings</h2>
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


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);