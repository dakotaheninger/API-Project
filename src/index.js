import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import "./index.css";
import HomePageContainer from "./containers/home-page-container";
import NewsContainer from "./containers/news-container";
import StatsContainer from "./containers/stats-container";
import TeamContainer from "./containers/team-container";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dakota from "./components/dakota";
import Loren from "./components/loren";


const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                        <Navbar title="ME-SPN"/>
                        <Switch>
                            <Route exact path ="/" component={HomePageContainer}/>
                            <Route exact path ="/news" component={NewsContainer}/>
                            <Route exact path ="/stats" component={StatsContainer}/>
                            <Route exact path="/LorenPabst" component={Loren}/>
                            <Route exact path="/DakotaHeninger" component={Dakota}/>
                            <Route exact path ="/team/:teamName" component={TeamContainer}/>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
