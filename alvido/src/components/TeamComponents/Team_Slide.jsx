import React from "react";

// Style

import "../../style/components_style/TeamComponents/slide.css";

import skull from "../../images/Home_Page_Images/skull.png";

function Home_Slide() {
  return (
    <div className="carousel-app">
      <div className="marquee-wrapper">
        <div className="element">
          <img src={skull} alt="" />
          <span>THE WITCHER</span>
          <img src={skull} alt="" />
        </div>
        <div className="element">
          <span>RDR 2</span>
        </div>
        <div className="element">
          <img src={skull} alt="" />
          <span>POINT BLANK</span>
          <img src={skull} alt="" />
        </div>
        <div className="element">
          <span>ZULA</span>
          <img src={skull} alt="" />
        </div>
        <div className="element">
          <span>GTA 5</span>
        </div>
        <div className="element">
          <img src={skull} alt="" />
          <span>FIFA 19</span>
          <img src={skull} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home_Slide;
