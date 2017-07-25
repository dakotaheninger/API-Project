import React from "react";


class Article extends React.Component {
    imageOrNot(index, item){
        let style = {
            backgroundImage: "",
            height: "",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left"
        };
        if(index % 3 === 0){
            style.backgroundImage = `url(${item})`;
            style.height = `50vh`
        } else {
            style.backgroundImage = "";
            style.height = "";
        }
        return style;
    }
    render() {
        return (
            <div>
                <div style={this.imageOrNot(this.props.index, this.props.item.urlToImage)}>
                </div>
                <a href={`${this.props.item.url}`}>
                    <h1>{this.props.item.title}</h1>
                    <h2>{this.props.item.description}</h2>
                </a>
            </div>
        );
    }

}

export default Article;