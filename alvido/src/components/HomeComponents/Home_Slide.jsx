import React from "react";

// Style

import "../../style/components_style/HomeComponents/slide.css";

import skull from "../../images/Home_Page_Images/skull.png";

function Home_Slide() {
  return (
    <div className="carousel-app">
      <div className="marquee-wrapper">
        <div className="element">
          <img src={skull} alt="" />
          <span>GAMING COMMUNITY</span>
          <img src={skull} alt="" />
        </div>
        <div className="element">
          <span>GAMING COMMUNITY</span>
        </div>
        <div className="element">
          <img src={skull} alt="" />
          <span>GAMING COMMUNITY</span>
          <img src={skull} alt="" />
        </div>
        <div className="element">
          <span>GAMING COMMUNITY</span>
          <img src={skull} alt="" />
        </div>
        <div className="element">
          <span>GAMING COMMUNITY</span>
        </div>
        <div className="element">
          <img src={skull} alt="" />
          <span>GAMING COMMUNITY</span>
          <img src={skull} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home_Slide;
