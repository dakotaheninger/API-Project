import React from "react";


class Schedule extends React.Component {
    render() {
        return (
            <div className="row all-schedule">
                <div className="col-md-12">
                    <div className="col-md-3">
                        {this.props.item.date}
                    </div>
                    <div className="col-md-3">
                        {this.props.item.time} E.T.
                    </div>
                    <div className="col-md-3">
                        {this.props.item.awayTeam.Name}
                    </div>
                    <div className="col-md-3">
                        {this.props.item.homeTeam.Name}
                    </div>
                </div>
            </div>
        );
    }

}


export default Schedule;