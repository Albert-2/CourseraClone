import React from "react";
import GlobNavbar from "../globalCompo/GlobNavbar";
import Logo from "../page2/assets/businLogo.svg";
import GlobHero from "../globalCompo/GlobHero";
import HomePage from "./assets/HomepageImg.jpg";
import BusinsCard from "../globalCompo/BusinsCard";

const Hero = () => {
  const navBar = {
    logo: Logo,
    navLinks: [
      "Why Coursera",
      "Solutions",
      "Resources",
      "For Teams",
      "Compare Plans",
    ],
    button: "Contact Sales",
  };
  const heroContent = {
    image: HomePage,
    head: "Make talent your competitive advantage",
    list: [
      "trengthen critical skills with content you can trust",
      "Develop, retain, and advance critical talent",
      "Lower training costs without sacrificing quality",
      "Track and measure skills to demonstrate ROI",
    ],
    button: "Contact Sales",
    footer: "Upskilling fewer than 125 employees? ",
    subFoot: "Get Coursera for Teams",
    footContainer: [
      {
        head: "24%",
        subHead: "Reduction in training costs",
      },
      {
        head: "38%",
        subHead: "Higher retention rates",
      },
      {
        head: "25%",
        subHead: "More employee productivity",
      },
    ],
  };
  return (
    <>
      <GlobNavbar info={navBar} />
      <GlobHero heroInfo={heroContent} />
      <BusinsCard />
    </>
  );
};

export default Hero;
