import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

import img_1 from "./Assests/Gimages/garden1.jpg";
import img_2 from "./Assests/Gimages/garden2.jpg";
import img_3 from "./Assests/Gimages/garden3.jpg";
import img_4 from "./Assests/Gimages/garden4.jpg";
import img_5 from "./Assests/Gimages/garden5.jpg";
import img_7 from "./Assests/Gimages/garden7.jpg";

// import img_9 from "./Assests/images/img-9.jpg";
// import img_2 from "./Assests/images/img-2.jpg";
// import img_3 from "./Assests/images/img-3.jpg";
// import img_4 from "./Assests/images/img-4.jpg";
// import img_8 from "./Assests/images/img-8.jpg";

function Cards() {
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
            <CardItem
              src={img_1}
              text="Supporting information about this service"
              label="Weed Control and Fertilization"
              path="/services"
            />
            <CardItem
              src={img_2}
              text="Keep your lawn green and tidy"
              label="Lawn Mowing"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img_3}
              text="Set grass layout as you wish"
              label="Layout"
              path="/services"
            />
            <CardItem
              src={img_4}
              text="Get your lawn ready for winter"
              label="Fall Clean Up"
              path="/products"
            />
            <CardItem
              src={img_5}
              text="Keep your lawn green and tidy"
              label="Lawn Mowing"
              path="/sign-up"
            />
            <CardItem
              src={img_7}
              text="Keep your lawn green and tidy"
              label="Spring Clean Up"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
