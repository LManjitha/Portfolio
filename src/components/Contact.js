import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Contact() {
    return (
        <div class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get in Touch</div>
                        {/* <p>rupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p> */}
                        <div class="icons">
                            <div class="row">
                                {/* <i class="fas fa-user"></i> */}
                                <i><FaIcons.FaUser/></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Limal Manjitha Hiripitiya</div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <i class="fas fa-map-marker-alt"></i> */}
                                <i><FaIcons.FaMapMarkerAlt/></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">267/1 Pitipana north, Homagama</div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <i class="fas fa-envelope"></i> */}
                                <i><FaIcons.FaEnvelope/></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">lmanjithah@gmail.com</div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <i class="fas fa-envelope"></i> */}
                                <i><FaIcons.FaPhoneSquareAlt/></i>
                                <div class="info">
                                    <div class="head">Phone</div>
                                    <div class="sub-title">+94770763060</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="icons">
                            <div class="row">
                                {/* <i class="fas fa-user"></i> */}
                                <i><FaIcons.FaLinkedin/></i>
                                <div class="info">
                                    <div class="head"><a href="https://www.linkedin.com/in/limal-manjitha-hiripitiya-47b36b1a4" className="link">LinkedIn</a></div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <i class="fas fa-map-marker-alt"></i> */}
                                <i><FaIcons.FaFacebookSquare/></i>
                                <div class="info">
                                    <div class="head"><a href="https://www.facebook.com/limal.manjitha.1" className="link">Facebook</a></div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <i class="fas fa-envelope"></i> */}
                                <i><FaIcons.FaTwitterSquare/></i>
                                <div class="info">
                                    <div class="head"><a href="https://twitter.com/L_Manjitha" className="link">Twitter</a></div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <i class="fas fa-envelope"></i> */}
                                <i><FaIcons.FaGithub/></i>
                                <div class="info">
                                    <div class="head"><a href="https://github.com/LManjitha" className="link">Github</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
