import React from "react";
import SectionFirst from "./SectionFirst";
import SectionSecond from "./SectionSecond";
import Section3 from "./Section3";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="home">
      <SectionFirst />
      <SectionSecond />
      <Section3 />
      <Faq />
    </div>
  );
};

export default Home;
