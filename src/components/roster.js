import React from "react";


class Roster extends React.Component {
    render() {
        return (
            <div className="all-roster">
                <div className="col-md-6">
                    <div className="col-md-2">
                        {this.props.item.player.JerseyNumber}
                    </div>
                    <div className="col-md-4">
                        {this.props.item.player.FirstName} {this.props.item.player.LastName}
                    </div>
                    <div className="col-md-2">
                        {this.props.item.player.Position}
                    </div>
                    <div className="col-md-2">
                        {this.props.item.player.Age}
                    </div>
                    <div className="col-md-2">
                        {this.props.item.player.Height}
                    </div>
                </div>
            </div>
        );
    }

}


export default Roster;