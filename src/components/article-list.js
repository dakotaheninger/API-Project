import React from "react";
import Article from "./article";


class ArticleList extends React.Component {
    getArticles(){
        return this.props.allArticles.map((item, index) =>{
                return <Article item={item} index={index} key={item + index}/>
        })
    }
    render()
    {
        return (
            <div>{this.getArticles()}</div>
        );
    }

}


export default ArticleList;