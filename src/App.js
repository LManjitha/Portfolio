import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProjects from './components/newProjects';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './style.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <About/>
      {/* <Projects/> */}
      <NewProjects/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    {/* <Route path="/home" exact component={Home}/>
    <Route path="/about" exact component={About}/> */}
    </Router>
  );
}

export default App;
