import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import ArticleContainer from "./containers/article-container"
import "./index.css";
import PopularArticlesContainer from "./containers/popular-articles-container";
import ScoresContainer from './containers/scores-container';


const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <ScoresContainer/>
                    <ArticleContainer/>
                    <PopularArticlesContainer/>
                </div>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
