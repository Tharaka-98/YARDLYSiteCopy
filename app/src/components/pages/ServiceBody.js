import React from "react";
import ServiceBodyCards from "./ServiceBodyCards";
import "./ServiceBody.css";

import img_1 from "../Assests/Gimages/garden1.jpg";
import img_2 from "../Assests/Gimages/garden2.jpg";
import img_3 from "../Assests/Gimages/garden3.jpg";
import img_4 from "../Assests/Gimages/garden4.jpg";
import img_5 from "../Assests/Gimages/garden5.jpg";
import img_7 from "../Assests/Gimages/garden7.jpg";


const ServiceBody = () => {
  return (
    <div className="cards">
      <h1>Easy and reliable yard care</h1>
      <p className="c-p">
        Emerald offers a wide range of yard care services including lawn mowing
        service, spring and fall yard clean up, and snow removal services. Get
        consistent and convenient service from trusted local professionals.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ServiceBodyCards
              src={img_1}
              text="Supporting information about this service"
              label="Weed Control and Fertilization"
              path="/services"
            />
            <ServiceBodyCards
              src={img_2}
              text="Keep your lawn green and tidy"
              label="Lawn Mowing"
              path="/services"
            />
            <ServiceBodyCards
              src={img_1}
              text="Lawn restorations / New Lawns"
              label="Weed Control and Fertilization"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ServiceBodyCards
              src={img_3}
              text="Spring lawn wake up services"
              label="Layout"
              path="/services"
            />
            <ServiceBodyCards
              src={img_4}
              text="Get your lawn ready for winter"
              label="Fall Clean Up"
              path="/products"
            />
            <ServiceBodyCards
              src={img_5}
              text="Full Clean Up"
              label="Lawn Mowing"
              path="/sign-up"
            />
            <ServiceBodyCards
              src={img_7}
              text="Total yard clean up"
              label="Spring Clean Up"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceBody