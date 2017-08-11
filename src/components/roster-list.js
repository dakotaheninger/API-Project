import React from "react";
import Roster from "./roster";



class RosterList extends React.Component{
    getPlayers() {
        return this.props.roster.map((item, index) => {
            return <Roster item={item} index={index} key={item + index}/>

        })
    }
    render() {
        return (
            <div className="row">
                {this.getPlayers()}
            </div>
        );
    }

}


export default RosterList;