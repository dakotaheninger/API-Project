import React from "react";
import Scores from "./scores";


class ScoresList extends React.Component{
    getScores(){
        return this.props.allScores.map((item, index)=>{
            return <Scores teamStats={this.props.teamStats} item={item} index={index} key={item + index}/>
        })
    }
    render() {
        return (
            <div>
                {this.getScores()}
            </div>
        );
    }

}

export default ScoresList;