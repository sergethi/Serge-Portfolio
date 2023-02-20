import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen, FaRegArrowAltCircleUp } from "react-icons/fa";



function Contact({contactEmail, contactPara, socialLinks}) {
    return (
        <div className="contact_container" id="contact">
        <h1>Get in touch.</h1>
        <hr className="line"/>
        {/* <p>{contactPara}</p> */}
        <br></br>
        <a className="email_link" href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">
          {contactEmail}
        </a>
         {/* animated up arrow */}
         <div class="arrow bounce">
          <a href="#header">
            <FaRegArrowAltCircleUp></FaRegArrowAltCircleUp>
            </a>
        </div>
      
        <div className="social_links">
          <ul>
            <li>
              <a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer">
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer">
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Contact
