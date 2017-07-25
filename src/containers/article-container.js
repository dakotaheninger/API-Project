import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ArticleList from "../components/article-list";
import Navbar from "../components/navbar";
import Header from "../components/header";

class ArticleContainer extends React.Component{
    // componentWillMount(){
    //     this.props.loadData();
    // }
    render() {
        return (
            <div>
                <Navbar  title="Sports News" loadData={this.props.loadData}/>
                <Header/>
                <ArticleList allArticles={this.props.allArticles}/>
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



export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);