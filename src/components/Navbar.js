import React,{useState,useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';

// import '../style.css';

function Navbar() {

    const [scrolled,setScroll] = useState(false)
    const [menu,setMenu] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>20){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    })

    const showMenu = () => {
        // console.log("clicked");
        setMenu(!menu)
    };

    return (
        <div>
            <nav className={scrolled ? "navbar sticky" : "navbar hov"}>
               
                    <div className="max-width">
                        <div className="logo"><Link to="#">Welco<span>me.</span></Link></div>
                        <ul className={menu ? "menu active" : "menu"}>
                            <li><Link to="home" onClick={showMenu} activeClass="active" spy="true" smooth="true" offset={-70} duration={100}>Home</Link></li>
                            <li><Link to="about" onClick={showMenu} activeClass="active" spy="true" smooth="true" offset={-70} duration={100}>About</Link></li>
                            <li><Link to="projects" onClick={showMenu} activeClass="active" spy="true" smooth="true" offset={-70} duration={100}>Projects</Link></li>
                            <li><Link to="skills" onClick={showMenu} activeClass="active" spy="true" smooth="true" offset={-70} duration={100}>Skills</Link></li>
                            <li><Link to="contact" onClick={showMenu} activeClass="active" spy="true" smooth="true" offset={-70} duration={100}>Contact</Link></li>
                        </ul>
                        <div className="menu-btn" onClick={showMenu}>
                           {menu ?
                               (<FaIcons.FaWindowClose/>) : (<FaIcons.FaBars/>)
                           } 
                            
                        </div>
                    </div>
                
            </nav>
        </div>
    )
}

export default Navbar
