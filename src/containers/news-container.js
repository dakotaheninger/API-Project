import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ArticleList from "../components/article-list";
import NewsSelection from "../components/news-selection";


class NewsContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
        this.props.scoreData();
    }

    render() {
        return (
            <div className="news-articles">
                <div className="col-md-offset-4 col-md-4 main-articles">
                    <ArticleList allArticles={this.props.allArticles}/>
                </div>
                <div className="col-md-offset-1 col-md-2">
                    <NewsSelection click="Click on the Logo of the network you would like to read" loadData={this.props.loadData}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);

