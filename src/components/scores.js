import React from "react";


class Scores extends React.Component {
    render() {
        return (
            <div className="ind-score">
                <div>
                    <span className="team-name">{this.props.item.game.awayTeam.Name}</span><span className="team-score">{this.props.item.awayScore}</span>
                </div>
                <div className="at">
                    @
                </div>
                <div>
                    <span className="team-name">{this.props.item.game.homeTeam.Name}</span><span className="team-score"> {this.props.item.homeScore}</span>
                </div>
            </div>
        );
    }

}


export default Scores;