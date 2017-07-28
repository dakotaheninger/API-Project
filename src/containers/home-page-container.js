import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ArticleList from "../components/article-list";
import ScoresList from "../components/scores-list";
import PopularArticlesList from "../components/popular-articles-list";
import Navbar from "../components/navbar";
import Header from "../components/header";

class HomePageContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
        this.props.scoreData();
    }
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <Header/>
                </div>
                <div className="col-md-4">
                    <ScoresList allScores={this.props.allScores}/>
                </div>
                <div className="col-md-4">
                    <ArticleList allArticles={this.props.allArticles}/>
                </div>
                <div>
                    <PopularArticlesList mixedTopStories={this.props.mixedTopStories}/>
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