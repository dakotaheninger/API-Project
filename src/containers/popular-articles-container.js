import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import PopularArticlesList from "../components/popular-articles-list";


class PopularArticlesContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
        this.props.scoreData();
    }
    render() {
        return (
            <div>
                <div>
                    <PopularArticlesList mixedTopStories={this.props.mixedTopStories}/>
                </div>
                <div>

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


export default connect(mapStateToProps, mapDispatchToProps)(PopularArticlesContainer);