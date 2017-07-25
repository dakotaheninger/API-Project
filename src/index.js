import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import ArticleContainer from "./containers/article-container"
import "./index.css";



const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <ArticleContainer/>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
