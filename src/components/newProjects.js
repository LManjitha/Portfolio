import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import pro1 from '../images/1.PNG'
import pro2 from '../images/2.PNG'
import pro3 from '../images/3.PNG'
import pro4 from '../images/profile-4.jpeg'
import * as FaIcons from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.css"; 

function newProjects() {
    return (
        <div className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                {/* <div className="carousel"> */}
                    <Carousel autoPlay infiniteLoop >
                    
                        <div class="card">
                            <img src={pro1} alt=""/>
                            {/* <a href="https://covid19-tracker-bad42.web.app/"></a> */}
                            <div class="text"><a className="link" href="https://covid19-tracker-bad42.web.app/">Covid-19 Tracker</a></div>
                            <div className="des"><p>This is a covid-19 dashboard which shows daily cases,deaths,recovered patients.Also includes cases,deaths by country. This web site is created by using React js. </p>
                            </div>
                        </div>
                    
                    
                        <div class="card">
                            <img src={pro2} alt=""/>
                            <div class="text"><a className="link" href="https://github.com/hexclan640/Care-U-App">CareU</a></div>
                            <div className="des"><p>This is our 2nd year group project.We created a web application and mobile app for emergency services.I have contributed to the mobile application in this project.</p>
                            </div>
                        </div>
                    
                    
                        <div class="card">
                            <img src={pro3} alt=""/>
                            <div class="text">Github Finder</div>
                            <div className="des"><p>This is a small web application that you find github users. I hava used jquery and ajax for this application. </p>
                            </div>
                        </div>
                    
                    </Carousel>
                    {/* </div> */}
                </div>
            
        </div>
    )
}

export default newProjects
