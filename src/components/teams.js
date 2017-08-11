import React from "react";
import {Link} from "react-router-dom";
import Tilt from "react-tilt";


class Teams extends React.Component {
    render() {
        return (
            <Link key={this.props.index}
                  to={`/team/${this.props.item.team.Name}`}
            >
                <div className="col-md-2 col-sm-3 col-xs-6 team-info" onClick={()=>{
                    this.props.getRoster(this.props.sport, this.props.item.team.Abbreviation);
                }}>
                    <Tilt className="Tilt" options={{scale: 1.1, speed: 0, max: 25}}>
                        <div className="ind-teams Tilt-inner">
                            <img src={`/images/${this.props.item.team.Abbreviation}_${this.props.sport}.png`}
                                 alt='team logo'
                                 className='team-logo'/>
                            <p>{this.props.item.team.City}</p>
                            <p>{this.props.item.team.Name}</p>
                        </div>
                    </Tilt>
                </div>
            </Link>
        );
    }

}


export default Teams;
