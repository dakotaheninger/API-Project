import React from "react";
import Article from "./article";


class HomePageArticleList extends React.Component {
    getArticles() {
        return this.props.allArticles.map((item, index) => {
            if (index < 3) {
                return <Article item={item} index={index} key={item + index}/>
            }
        })
    }

    render() {
        return (
            <div className="home-page-articles">
                {this.getArticles()}
            </div>
        );
    }

}


export default HomePageArticleList;