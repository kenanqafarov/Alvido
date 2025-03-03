import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

import "../../style/components_style/HomeComponents/contact.css";

import "aos";

function ContactComponent() {
  const [activeButton, setActiveButton] = useState("DESIGN");

  const handleClick = (category) => {
    setActiveButton(category);
  };

  return (
    <>
      
      <div className="contact-content">
        <div className="wrapper-contact" data-aos="fade-up">
          <div className="topPart">
            <p className="contact-p">CONTACT US</p>
            <p className="project-p">HAVE A PROJECT?</p>
          </div>
          <div className="center-part">
            <p className="center-part-p">WHAT CAN WE DO FOR YOU?</p>
            <div className="buttons">
              {["DESIGN", "DEVELOPMENT", "ANIMATION", "OTHER"].map(
                (category) => (
                  <p
                    key={category}
                    className={`button ${
                      activeButton === category ? "active" : ""
                    }`}
                    onClick={() => handleClick(category)}
                  >
                    {category}
                  </p>
                )
              )}
            </div>
            <form action="" className="msg-form">
              <div className="first-row">
                <div className="row">
                  <input type="text " placeholder="Your name" />
                  <FaRegUser className="user" />
                </div>
                <div className="row">
                  <input type="mail " placeholder="Info" />
                  <HiOutlineMailOpen className="letter" />
                </div>
              </div>
              <FaPencilAlt className="pen" />
              <textarea
                className="desc"
                placeholder="Project details"
              ></textarea>
            </form>
            <p className="formDesc">
              Driven by innovation and creativity, we're
              <br />
              constantly evolving and expanding our platform
              <br />
              to bring you the latest and greatest in gaming.
              <br />
              From exciting new releases to classic favorites.
            </p>
            <div className="socialIcons">
              <FaFacebookF className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaGoogle className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
