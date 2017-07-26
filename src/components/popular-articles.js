import React from "react";


class PopularArticles extends React.Component{
    render() {
        return (
            <a href={`${this.props.item.url}`} className="col-md-offset-1 col-md-3 ind-pop-stories">{this.props.item.title}</a>
        );
    }

}

export default PopularArticles;