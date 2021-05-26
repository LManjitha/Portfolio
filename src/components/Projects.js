import React,{useState} from 'react'
import pro1 from '../images/profile-1.jpeg'
import pro2 from '../images/profile-2.jpeg'
import pro3 from '../images/profile-3.jpeg'
import pro4 from '../images/profile-4.jpeg'
import * as FaIcons from 'react-icons/fa';


function Projects() {

    const[current,setCurrent] = useState(0)
    const length = 4

    const nextSlide = () => {
        setCurrent(current === 4-1 ? 0 : current+1)
        // console.log(current);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? 4-1 : current-1)
        // console.log(current);
    }
    return (
        <div className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div class="carousel owl-carousel">
                <FaIcons.FaArrowAltCircleLeft className="left-arrow"  onClick={prevSlide}/>
                <FaIcons.FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                    <div className={0===current ? 'card active' : 'card'}>
                        {0===current && (
                            <div className="box">
                            <img src={pro1} alt=""/>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        )}
                    </div>
                    <div className={1===current ? 'card active' : 'card'}>
                        {1===current && (<div className="box">
                            <img src={pro2} alt=""/>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>)}
                    </div>
                    <div className={2===current ? 'card active' : 'card'}>
                        {2===current && (<div className="box">
                            <img src={pro3} alt=""/>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>)}
                    </div>
                    <div className={3===current ? 'card active' : 'card'}>
                        {3===current && (<div className="box">
                            <img src={pro4} alt=""/>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
