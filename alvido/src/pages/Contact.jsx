import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Style
import "../style/components_style/ContactComponents/contact.css";
import ContactComponent from "../components/General/ContactComponent";
function Contact() {
  return (
    <>
      <h1 className="title">
        Contact <span>Us</span>
      </h1>
      <div className="map">
        <iframe
          width="520"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=194%20Murtuza%20Muxtarov%20Baku+(Nizami%20UNEC)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=7eaff5a2db5a97b055365276b016592c8d78edbf"
        ></script>
      </div>
      <div className="mediaIcons">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <ContactComponent />
    </>
  );
}

export default Contact;
