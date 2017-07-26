import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ScoresList from "../components/scores-list";
import Navbar from "../components/navbar";
import Header from "../components/header";


class ScoresContainer extends React.Component{
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <Navbar title="Sports News" loadData={this.props.loadData}/>
                </div>
                <div className="col-md-12">
                    <Header/>
                </div>
                <ScoresList allScores={this.props.allScores}/>
            </div>
        );
    }

}


const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(ScoresContainer);