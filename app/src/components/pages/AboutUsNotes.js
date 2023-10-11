import React from "react";
import "./AboutUsNotes.css";

import garden11 from "../Assests/Gimages/garden11.jpg";

const AboutUsNotes = () => {
  return (
    <div className="des-container">
      <div className="About-notes">
        <div className="des">
        <div className="des-h1">
            <h1>Excellent Lawn Leaf Cleanout Services</h1>
        </div>
          <p className="des-p">
            We are a competent residential and commercial leaf blowout business
            serving Waxahachie and the surrounding 40-mile area. Homeowners who
            have benefited from our professional services are aware of our
            capabilities. 
          </p>
        </div>
          <div className="des-image-1">
            <img className="img-seed" src={garden11} alt="seeds" />
          </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default AboutUsNotes;
