import React from "react";
import Contact from "../components/contact/Contact";
import Intro from "../components/Intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import Work from "../components/work/Work";
import "./Home.scss";

const Home = () => {
  return (
    <div className="sections">
      <Intro />
      <Portfolio />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
