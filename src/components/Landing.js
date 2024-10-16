import React from "react";

const Landing = ({ name, paragraph, landingPageImage }) => {
  return (
    <div className="land-flex" id="labding">
      <div className="home_container">
        <div className="home_head_wrapper">
          <h1>
            {" "}
            Hello I 'm <br></br> <span>{name}</span>
          </h1>
          <p>{paragraph}</p>
        </div>
        <div className="image_container">
          <img
            src={process.env.PUBLIC_URL + "/img-no-prop.jpg"}
            alt="Author"
          ></img>
          <div className="bg"></div>
        </div>
      </div>
      <div class="Landing-container">
        <a href="#header">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Learn More</span>
        </a>
      </div>
    </div>
  );
};

export default Landing;
