import React from "react";
import "./Guarantee.css";

import guarantee from "./Assests/Gimages/guarantee-r.png";

const Guarantee = () => {
  return (
    <div className="guarantee">
      <div className="guarantee-label">
        <img className="img-g" src={guarantee} alt="Guarantee label" />
      </div>
      <div  className='Satisfaction'>
        <h1 className="Satisfaction-h">Satisfaction Guaranteed</h1>
        <div className="Satisfaction-text">
        <p>
          Emerald Pros are insured professionals committed to excellence in
          service delivery, who have proven they can meet Emerald’s rigorous
          quality standards. We back our work with a nationwide Satisfaction
          Guarantee.
        </p>
        <p>Emerald is a brand you can trust. In the past seven years, our team has serviced over 10,000 homes in Canada. You can read our reviews here and see what our customers have to say for themselves.</p>
        <p>Get started with Emerald today and enjoy hassle-free yard care all year round.</p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
