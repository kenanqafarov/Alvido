import React from "react";

// Style
import "../../style/components_style/HomeComponents/whatwedo.css";


function WhatWeDo() {
  return (
    <>
      <div className="what_we_do">
        <h1>WHAT WE DO</h1>
        <div className="list_of_services">
          <a href="">
            <span>01</span> GAME SERVER
          </a>
          <a href="">
            <span>02</span> GAME TESTING
          </a>
          <a href="">
            <span>03</span>AR/VT INTERGRATIOIN
          </a>
          <a href="">
            <span>04</span>GAME DESIGN
          </a>
          <a href="">
            <span>05</span>GAME DEVELOPMENT
          </a>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
