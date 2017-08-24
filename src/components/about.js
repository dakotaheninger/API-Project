import React from "react";


class About extends React.Component {
    render() {
        return (
            <div className="about-page">
                <div className="row  about-names">
                    <div className="col-md-6">
                        <h1>Dakota Heninger</h1>
                    </div>
                    <div className="col-md-6">
                        <h1>Loren Pabst</h1>
                    </div>
                </div>
                <div className="row about-pics">
                    <div className="col-md-6">
                        <img alt="Dakota Heninger" src="/images/DSC_1862.JPG" height="200px"/>
                    </div>
                    <div className="col-md-6">
                        <img alt="Loren Pabst" src="/images/headshot_devmtn.jpg" height="200px"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Hello! My name is Dakota Heninger and I am a Web Developer! I am a recent graduate from V
                            School
                            in Salt Lake City, Utah. I attended V School to learn and sharpen my skills through an
                            intensive
                            Full Stack Javascript Course. I have a passion for Web Development and enjoy pushing myself
                            to
                            the limits to learn and grow! I also have a passion for many other things, these include:
                            Fishing, Hunting, Snowboarding, Video Games, Movies, Binge Watching Netflix, and above all
                            others, Sports. As I believe this site shows, I have a love for sports! I love playing
                            sports,
                            watching sports, fantasy sports, all things sports! The passion I have for coding and sports
                            is
                            what pushed me to design/build this website alongside one of my very close friends Loren
                            Pabst
                            who happens to be an absolutely amazing Web Developer! </p>
                    </div>
                    <div className="col-md-6">
                        I was born and raised in Utah. I attended Utah State University and earned a bachelor's degree
                        in Business Administration. After working in management at America First Credit Union for 3
                        years, I decided to pursue my passion of web development, and attended a 13 week immersive
                        coding program at DevMountain. I live with my wife and two cats in the Provo Area. I enjoy
                        coding, exercising, reading, and seeing new places!
                    </div>
                </div>
            </div>
        );
    }

}


export default About;
