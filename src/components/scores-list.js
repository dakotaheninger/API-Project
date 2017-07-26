import React from "react";
import Scores from "./scores";


class ScoresList extends React.Component{
    getScores(){
        return this.props.allScores.map((item, index)=>{
            return <Scores item={item} index={index} key={item + index}/>
        })
    }
    render() {
        return (
            <div className="col-md-offset-1 col-md-3 all-scores">
                {this.getScores()}
            </div>
        );
    }

}

export default ScoresList;