import React from 'react';
//import Header from './Header';
//import Contact from './Contact';
import data from './yourdata';

const About = () =>{
return (
  <div>
       
    {/* name={data.name} contactEmail={data.contactEmail} */}
    <div className="about_container" id="about">
      <h1>{data.aboutTitle}</h1>
      <hr className="line"/>
      {data.aboutPara.map((para) => {
        return <p className='about_container-p' key={para.id}>{para}</p>
      })}
      <h3>Credentials</h3>
      <h5><span>Skills</span>: {data.aboutCredentialSkills}</h5>
      <h5><span>Languages</span>: {data.aboutCredentialLanguages}</h5>

    </div>
  </div>
);
}
export default About;