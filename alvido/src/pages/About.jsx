import React from "react";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Error404 from "../components/ErrorComponents/Error404";
import FAQ from "../components/FAQ/FAQ";
import CompanyJourney from "../components/CompanyJourney/CompanyJourney";
import Home_Slide from "../components/HomeComponents/Home_Slide";

function About() {
  return (
    <>
      <CompanyJourney/>
      <Home_Slide/>
      <FAQ/>
    </>
  );
}

export default About;
