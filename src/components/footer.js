import React from "react";
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom";


class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 whole-footer">
                    <div className="row footer">
                        <div className="devs col-md-offset-1 col-md-3">
                            <div>
                                <Link to="/DakotaHeninger" className="circular-image">
                                    <img alt="Dakota Heninger" src="/images/DSC_1862.JPG"/>
                                </Link>
                            </div>
                            <a className="footer-padding fa-stack" href="https://github.com/dakotaheninger">
                                <FontAwesome
                                    name="circle"
                                    stack="2x"
                                />
                                <FontAwesome
                                    name="github"
                                    stack="1x"
                                    inverse
                                />
                            </a>
                            <a className="footer-padding fa-stack" href="https://www.linkedin.com/in/dakotaheninger/">
                                <FontAwesome
                                    name="circle"
                                    stack="2x"
                                />
                                <FontAwesome
                                    name="linkedin"
                                    stack="1x"
                                    inverse
                                />
                            </a>
                        </div>
                        <div className="devs col-md-offset-4 col-md-3">
                            <div>
                                <Link to="/LorenPabst" className="circular-image">
                                    <img alt="Loren Pabst" src="/images/headshot_devmtn.jpg"/>
                                </Link>
                            </div>
                            <a className="footer-padding fa-stack" href="https://github.com/lpabst">
                                <FontAwesome
                                    name="circle"
                                    stack="2x"
                                />
                                <FontAwesome
                                    name="github"
                                    stack="1x"
                                    inverse
                                />
                            </a>
                            <a className="footer-padding fa-stack" href="https://www.linkedin.com/in/lorenpabst/">
                                <FontAwesome
                                    name="circle"
                                    stack="2x"
                                />
                                <FontAwesome
                                    name="linkedin"
                                    stack="1x"
                                    inverse
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}


export default Footer;