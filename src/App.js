import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Header from "./components/Header"
import About from './components/About';
import Projects from './components/Projects';
import data from './components/yourdata'
import Resume from './components/Resume';
import Contact from './components/Contact';
import Landing from './components/Landing';


function App() {
  return (

    <div className="App">
      <>
      <Landing name={data.landingPageName} paragraph = {data.landingPagePara} landingPageImage={data.landingPageImage}/>
      <Header data={data} contactEmail = {data.contactEmail}/>
      <About />
      <Projects projects={data.projects} projects2={data.projects2} />
      <Resume resumeURL = {data.resumeURL}/>
      <Contact contactEmail = {data.contactEmail} socialLinks = {data.social}/>
     
      </>
     
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    
    
    
    
   

   


  );
}

export default App;
