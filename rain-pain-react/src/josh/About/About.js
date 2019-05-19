import React from "react";
import "./about.css"

export const About = () => (
    <div className="about-component">

        <div className="about-content_wrapper">
            <h1>About the Project</h1>
            <div className="image-wrapper"><img src="https://cdn.cnn.com/cnnnext/dam/assets/170829182744-23-harvey-0829-exlarge-169.jpg" /></div>
        </div>
        <div className="about-info">
            <p>
                As part of the 2019 Houston Hackathon, a group of developers and
                data scientist came together to analyze how Harvey and the changing
                flood plain is affecting the city. In particular, one question that arose
                was how the effect of decreased property values impacted the tax base of
                Houston.
            </p>

        </div>
    </div>
)