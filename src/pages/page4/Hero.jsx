import React from "react";
import Logo from "../page4/assets/govtLogo.svg";
import GlobNavbar from "../globalCompo/GlobNavbar";
import HomePage from "./assets/HomepageImg.png";
import GlobHero from "../globalCompo/GlobHero";

const Hero = () => {
  const navBar = {
    logo: Logo,
    navLinks: ["Why Coursera", "Solutions", "Resources", "For Teams"],
    button: "Contact Sales",
  };
  const heroContent = {
    image: HomePage,
    head: "Equip citizens and government employees with in-demand skills",
    subHead:
      "Drive sustainable economic growth and build a competitive workforce with online learning from leading universities and companies.",
    button: "Contact Sales",
    footer: "",
    footContainer: [
      {
        head: "1%",
        subHead: "new job is created for every 30 people trained online*",
      },
      {
        head: "71%",
        subHead: "of learners on the Coursera platform report career benefits",
      },
    ],
  };
  return (
    <>
      <GlobNavbar info={navBar} />
      <GlobHero heroInfo={heroContent} />
    </>
  );
};

export default Hero;
