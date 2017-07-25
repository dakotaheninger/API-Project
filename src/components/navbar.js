import React from "react";


class Navbar extends React.Component {
    render() {
        return (
            <div className="row nav-bar">
                <div className="col-md-6">
                    <h1 className="main-title">{this.props.title}</h1>
                </div>
                <div className="col-md-6 all-links">
                    <a className="links espn" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                    }}><img src="/images/espn.png" height="20px"/></a>
                    <div className="dropdown links">
                        <a className="links fox-sports"><img src="/images/fox sports.png" height="35x"/></a>
                        <div className="dropdown-content">
                            <a onClick={() => {
                                this.props.loadData(`https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                            }}>Top</a>
                            <a onClick={() => {
                                this.props.loadData(`https://newsapi.org/v1/articles?source=fox-sports&sortBy=latest&apiKey=0f683a77678046878ea0e075733292ba`)
                            }}>Latest</a>
                        </div>
                    </div>
                    <a className="links nfl" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                    }}><img src="/images/nfl.png" height="45px"/></a>
                </div>
            </div>

        );
    }

}

export default Navbar;