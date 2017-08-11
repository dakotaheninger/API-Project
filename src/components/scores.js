import React from "react";


class Scores extends React.Component {
    render() {
        let awayScore = this.props.item.awayScore;
        let homeScore = this.props.item.homeScore;
        let backImg = "";
        if (parseInt(awayScore) > parseInt(homeScore)) {
            backImg = this.props.item.game.awayTeam.Abbreviation;
        } else if (parseInt(homeScore) > parseInt(awayScore)) {
            backImg = this.props.item.game.homeTeam.Abbreviation;
        }
        let style = {
            backgroundImage: `url("/images/${backImg}_mlb.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",

        };
        return (
            <div className="ind-score" style={style}>
                <div className="row top-score">
                    <div className="col-md-offset-5 col-md-5">
                        <p className="team-name">
                            {this.props.item.game.awayTeam.Abbreviation}
                        </p>
                    </div>
                    <div className="col-md-2">
                        <p className="team-score">
                            {this.props.item.awayScore}
                        </p>
                    </div>
                </div>
                <div className="at col-md-offset-5 col-md-1">
                    <p>
                        @
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-offset-5 col-md-5">
                        <p className="team-name">
                            {this.props.item.game.homeTeam.Abbreviation}
                        </p>
                    </div>
                    <div className="col-md-2">
                        <p className="team-score">
                            {this.props.item.homeScore}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}


export default Scores;