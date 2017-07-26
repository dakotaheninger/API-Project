import React from "react";


class Scores extends React.Component {
    render() {
        return (
            <div className="ind-score">
                <p>
                    <span className="team-name">{this.props.item.game.awayTeam.Name}</span><span className="team-score">{this.props.item.awayScore}</span>
                </p>
                <p>
                    @
                </p>
                <p>
                    <span className="team-name">{this.props.item.game.homeTeam.Name}</span><span className="team-score"> {this.props.item.homeScore}</span>
                </p>
            </div>
        );
    }

}


export default Scores;