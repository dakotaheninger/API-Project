import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import {Route, HashRouter, Switch} from "react-router-dom";
import "./index.css";
import HomePageContainer from "./containers/home-page-container";
import NewsContainer from "./containers/news-container";
import StatsContainer from "./containers/stats-container";
import TeamContainer from "./containers/team-container";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";


const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
                <HashRouter>
                    <div className="container-fluid">
                        <Navbar title="ME-SPN"/>
                        <Switch>
                            <Route exact path ="/" component={HomePageContainer}/>
                            <Route exact path ="/news" component={NewsContainer}/>
                            <Route exact path ="/stats" component={StatsContainer}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path ="/team/:teamName" component={TeamContainer}/>
                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
