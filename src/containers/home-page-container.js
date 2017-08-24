import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ScoresList from "../components/scores-list";
import PopularArticlesList from "../components/popular-articles-list";
import HomePageArticleList from "../components/home-page-article-list";

class HomePageContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
        this.props.scoreData();
    }

    render() {
        return (
            <div className="row">
                <div className="main-page">
                    <div className="col-md-4">
                        <ScoresList teamStats={this.props.teamStats} allScores={this.props.allScores}/>
                    </div>
                    <div className="col-md-4 home-articles">
                        <HomePageArticleList allArticles={this.props.allArticles}/>
                    </div>
                    <div>
                        <PopularArticlesList mixedTopStories={this.props.mixedTopStories}/>
                    </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);