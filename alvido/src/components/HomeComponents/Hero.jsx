import React from "react";

// Style
import "../../style/components_style/HomeComponents/hero.css";

// Images

// Libraries
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <h1>
            ALVIDO <span>GAMING</span>
          </h1>
          <div className="upper_text_part">
            <p className="left_part_text">
              *BASED IN BAKU, AVAILABLE WORLDWIDE
            </p>
            <div className="social_media_icons">
              <a href="">
                <FaFacebookF className="socialIcon" />
              </a>
              <a href="">
                <FaXTwitter className="socialIcon" />
              </a>
              <a href="">
                <FaGithub className="socialIcon" />
              </a>
              <a href="">
                <FaYoutube className="socialIcon" />
              </a>
            </div>
          </div>

          <div className="hero_image_container"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
