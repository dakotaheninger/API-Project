import React from "react";
import Schedule from "./schedule";


class ScheduleList extends React.Component {
    getSchedule() {
        console.log(this.props.schedule);
        if (this.props.schedule.length === 1) {
            return <div className="offseason"><h1>{this.props.schedule[0]}</h1></div>
        } else {
            return this.props.schedule.map((item, index) => {
                return <Schedule item={item} index={index} key={item + index}/>

            })
        }
    }

    render() {
        return (
            <div>
                {this.getSchedule()}
            </div>
        );
    }

}


export default ScheduleList;