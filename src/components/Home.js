import React from 'react'
import Typed from 'react-typed';
import Particles from 'react-particles-js'
// import '../style.css'

function Home() {

    return (
        <>
        <Particles
            params={{
                particles:{
                    number:{
                        value:30,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:{
                        type:"circle",
                        stroke:{
                            width:6,
                            color:"#EB984E"
                        }
                    }
                }
            }}
        />
        <div className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Limal Manjitha</div>
                    <div className="text-3">And I'm <span>
                        <Typed className="typed-text" strings={["an Undergraduate","a Developer","a Programmer"]} typeSpeed={50} backSpeed={60} loop/>
                    </span></div>
                    {/* <a href="#">Hire me</a> */}
                </div>
            </div>
        </div>
        {/* <p>George Vincent (1796 – c. 1832) was an English landscape artist who produced watercolours, etchings and oil paintings. He is considered to be one of the most talented of the Norwich School of painters, a group of artists inspired by the Norfolk countryside. Vincent's work was founded on the Dutch school of landscape painting and the style of John Crome, also of the Norwich School. The son of a weaver, Vincent was apprenticed to Crome. Vincent exhibited at the Royal Academy and the British Institution. From 1811 until 1831 he showed at the Norwich Society of Artists, exhibiting over 100 pictures of Norfolk landscapes and marine works. By 1818 he had relocated to London, yet struggled financially. He was imprisoned for debt from 1824 to 1827. After 1831, Vincent disappeared and was never found. The art historian Herbert Cundall wrote in the 1920s that had Vincent "not given way to intemperate habits he would probably have ranked amongst the foremost of British landscape painters</p> */}
        </>
    )
}

export default Home
