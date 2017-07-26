import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ArticleList from "../components/article-list";
import Header from "../components/header";

class ArticleContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-4">
                    <ArticleList allArticles={this.props.allArticles}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);