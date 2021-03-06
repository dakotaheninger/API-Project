import React from "react";
import {Link} from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="nav-bar">
                    <div className="col-md-6 col-sm-12">
                        <h1 className="main-title">{this.props.title}</h1>
                    </div>
                    <div className="col-md-6 col-sm-12 all-links">
                        <h1 className="link-titles">
                            <Link to="/">Home</Link>
                            <Link to="/news">News</Link>
                            <Link to="/stats">Stats</Link>
                        </h1>
                    </div>
                </div>
            </div>

        );
    }

}

export default Navbar;