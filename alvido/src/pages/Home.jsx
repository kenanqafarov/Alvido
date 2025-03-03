import React from "react";

// Components [This is components of out Home Page (Header,Footer etc.)]
import Header from "../components/layout/Header";
import Hero from "../components/HomeComponents/Hero";
import WhatWeDo from "../components/HomeComponents/WhatWeDo";
import Home_Slide from "../components/HomeComponents/Home_Slide";
import ClashRoyalePart from "../components/HomeComponents/ClashRoyalePart";
import MinecraftPart from "../components/HomeComponents/MinecraftPart";
import Statistics from "../components/HomeComponents/Statistics";
import Contact from "../components/General/ContactComponent";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhatWeDo />
      <Home_Slide />
      <ClashRoyalePart />
      <MinecraftPart />
      <Statistics />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
