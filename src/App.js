import React, { useEffect } from "react";
//import logo from './logo.svg';
import "./App.css";
//import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import data from "./components/yourdata";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import { logPageView } from "./analytics";

function App() {
  useEffect(() => {
    logPageView(); // Log the initial page view
  }, []);

  return (
    <div className="App">
      <>
        <Landing
          name={data.landingPageName}
          paragraph={data.landingPagePara}
          landingPageImage={data.landingPageImage}
        />
        <Header data={data} contactEmail={data.contactEmail} />
        <About />
        <Projects projects={data.projects} projects2={data.projects2} />
        <Resume resumeURL={data.resumeURL} />
        <Contact contactEmail={data.contactEmail} socialLinks={data.social} />
      </>
    </div>
  );
}

export default App;
