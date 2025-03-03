import React from "react";

import { FaArrowRight } from "react-icons/fa";

import "../../style/components_style/HomeComponents/clashroyalepart.css";

import clash from "../../images/Home_Page_Images/clash.png";

function ClashRoyalePart() {
  return (
    <>
      <div className="clash-royale">
        <div
          className="textContent"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <p className="title">
            SOME COOL & DOPE
            <br />
            CHARECTERS
          </p>
          <p className="desc">
            Driven by innovation and creativity, we’re constantly evolving and
            expanding our platform to bring you the latest and greatest in
            gaming. From exciting new releases to classic favorites.
          </p>
          <a href="#" className="next-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>
              Button
              <FaArrowRight className="right" />
            </p>
          </a>
        </div>
        <div className="clash-man" data-aos="fade-up" data-aos-duration="4000">
          <div className="bg"></div>
          <img src={clash} alt="" />
        </div>
      </div>
    </>
  );
}

export default ClashRoyalePart;
