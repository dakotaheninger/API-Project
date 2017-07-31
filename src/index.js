import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import "./index.css";
import HomePageContainer from "./containers/home-page-container";
import NewsContainer from "./containers/news-container";
import StatsContainer from "./containers/stats-container";
import Navbar from "./components/navbar";


const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <div className="row">
                        <Navbar title="My Sports API"/>
                        <Switch>
                            <Route exact path ="/" component={HomePageContainer}/>
                            <Route exact path ="/news" component={NewsContainer}/>
                            <Route exact path ="/stats" component={StatsContainer}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
