import React from 'react'
import profile from '../images/meNew.jpg'
import Typed from 'react-typed';


function About() {
    return (
        <div className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={profile} alt=""/>
                        {/* <img src="../"/> */}
                    </div>
                    <div className="column right">
                        <div className="text">I'm Manjitha and I'm <span className="typing-2">
                        <Typed className="typed-text" strings={["an Undergraduate","a Developer","a Programmer"]} typeSpeed={40} backSpeed={60} loop/>

                        </span></div>
                        <p>I'm a Computer science undergraduate at University of Colombo School of Computing. I live in Homagama and my school was Dharmapala vidyalaya pannipitiya.  </p>
                        {/* <a href="#">Download CV</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
