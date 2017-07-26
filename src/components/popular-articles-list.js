import React from "react";
import PopularArticles from "./popular-articles";


class PopularArticlesList extends React.Component{
    getPopularArticles() {
        return this.props.mixedTopStories.map((item, index) => {
            return <PopularArticles item={item} index={index} key={item + index}/>
        })
    }
    render() {
        return (
            <div className="all-pop-stories">
                {this.getPopularArticles()}
            </div>
        );
    }

}


export default PopularArticlesList;