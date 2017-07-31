import React from "react";



class StatsContainer extends React.Component{
    componentWillMount(){
        this.props.loadData();
        this.props.scoreData();
    }
    render() {
        return (
            <div>Goodbye</div>
        );
    }

}


export default StatsContainer;