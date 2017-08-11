import React from "react";


class Article extends React.Component {
    imageOrNot(index, item){
        let img = "";
        if(index % 3 === 0){
            img = item;
        } else {
            img = "";
        }
        return img
    }
    render() {
        return (
            <div className="stories">
                {/*<div style={this.imageOrNot(this.props.index, this.props.item.urlToImage)}>*/}
                {/*</div>*/}
                <img alt={`${this.props.item.description}`} src={`${this.imageOrNot(this.props.index, this.props.item.urlToImage)}`} width="100%"/>
                <a className="ind-articles" href={`${this.props.item.url}`}>
                    <p className="story-title">{this.props.item.title}</p>
                    <p className="story-description">{this.props.item.description}</p>
                </a>
            </div>
        );
    }

}

export default Article;