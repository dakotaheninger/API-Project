import React from "react";
import './css/teamPage.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import RosterList from "../components/roster-list";
import ScheduleList from "../components/schedule-list";

class TeamContainer extends React.Component {
    render() {
        if (this.props.roster.length === 0) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div className='team-page'>
                    <div className="row">
                        <h1 className="col-md-12 team-title">{this.props.roster[0].team.City} {this.props.roster[0].team.Name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Team Roster</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col-md-2">
                                        <p>
                                            Number
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>
                                            Name
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p>
                                            Position
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        Age
                                    </div>
                                    <div className="col-md-2">
                                        Height
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-md-2">
                                        <p>
                                            Number
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>
                                            Name
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p>
                                            Position
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        Age
                                    </div>
                                    <div className="col-md-2">
                                        Height
                                    </div>
                                </div>
                            </div>
                            <RosterList roster={this.props.roster}/>
                        </div>
                        <div className="col-md-4">
                            <h2>Team Schedule</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-3">
                                        <p>
                                            Date
                                        </p>

                                    </div>
                                    <div className="col-md-3">
                                        <p>
                                            Time
                                        </p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>
                                            Away Team
                                        </p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>
                                            Home Team
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ScheduleList schedule={this.props.schedule}/>
                        </div>
                    </div>
                </div>
            );
        }

    }

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);