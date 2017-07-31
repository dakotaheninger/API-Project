import React from "react";


class NewsSelection extends React.Component {
    render() {
        return (
            <div className="all-channels">
                <div>
                    <p>
                        {this.props.click}
                    </p>
                </div>
                <div>
                    <img alt="ESPN" src="/images/espn.png" height="50px" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`);
                    }}>

                    </img>
                </div>
                <div className="dropdown fox-sports">
                    <img alt="FOX SPORTS" src="/images/fox_sports.png" height="100px" className="dropbtn">
                    </img>
                    <div className="dropdown-content">
                        <a onClick={() => {
                            this.props.loadData(` https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                        }}>Top</a>
                        <a onClick={() => {
                            this.props.loadData(`https://newsapi.org/v1/articles?source=fox-sports&sortBy=latest&apiKey=0f683a77678046878ea0e075733292ba`)
                        }}>Latest</a>
                    </div>
                </div>
                <div>
                    <img alt="BBC SPORT" src="/images/BBC-Sport.png" height="150px" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                    }}>
                    </img>
                </div>
                <div>
                    <img alt="NFL" src="/images/nfl.png" height="150px" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                    }}>
                    </img>
                </div>
                <div>
                    <img alt="TALK SPORT" src="/images/talkSPort.png" height="150px" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                    }}>
                    </img>
                </div>
                <div>
                    <img alt="SPORT BIBLE" src="/images/sportBible.png" height="60px" onClick={() => {
                        this.props.loadData(`https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`)
                    }}>
                    </img>
                </div>
            </div>
        );
    }

}

export default NewsSelection;