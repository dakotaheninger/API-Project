import React from "react";


class Article extends React.Component {
    imageOrNot(index, item){
        let style = {
            backgroundImage: "",
            height: "",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain"
        };
        if(index % 3 === 0){
            style.backgroundImage = `url(${item})`;
            style.height = `35vh`
        } else {
            style.backgroundImage = "";
            style.height = "";
        }
        return style;
    }
    render() {
        return (
            <div className="stories">
                <div style={this.imageOrNot(this.props.index, this.props.item.urlToImage)}>
                </div>
                <a href={`${this.props.item.url}`}>
                    <p className="story-title">{this.props.item.title}</p>
                    <p className="story-description">{this.props.item.description}</p>
                </a>
            </div>
        );
    }

}

export default Article;