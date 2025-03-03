import React from "react";

// Components
import Header from "../components/layout/Header";
import TeamMembers from "../components/TeamComponents/TeamMembers";
import Contact from "../components/General/ContactComponent";
import Team_Slide from "../components/TeamComponents/Team_Slide";
import Footer from "../components/layout/Footer";

function Team() {
  return (
    <>
      <Header />
      <TeamMembers />
      <Team_Slide />
      <Contact />
      <Footer />
    </>
  );
}

export default Team;
