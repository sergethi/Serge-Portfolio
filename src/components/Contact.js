import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen, FaRegArrowAltCircleUp } from "react-icons/fa";



function Contact({contactEmail, contactPara, socialLinks}) {
    return (
        <div className="contact_container" id="contact">
        <h1>Get in touch.</h1>
        <hr className="line"/>
        {/* <p>{contactPara}</p> */}
        <br></br>
        <a className="email_link" href={`mailto:${contactEmail}`}>
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
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url}>
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Contact
