import React from "react";
import Logo from "../page3/assets/campLogo.svg";
import GlobNavbar from "../globalCompo/GlobNavbar";
import HomePage from "./assets/HomepageImg.jpg";
import GlobHero from "../globalCompo/GlobHero";

const Hero = () => {
  const navBar = {
    logo: Logo,
    navLinks: ["Why Coursera", "Solutions", "Resources", "Compare Plans"],
    button: "Contact Us",
  };
  const heroContent = {
    image: HomePage,
    head: "Strengthen employability to attract more students",
    subHead:
      "Equip students with the most in-demand skills and prepare them for job success.",
    button: "Contact Sales",
    footer: "Upskilling fewer than 125 employees? ",
    subFoot: "Get Coursera for Teams",
    footContainer: [
      {
        head: "76%",
        subHead:
          "Students are 76% more likely to enroll in a degree program that offers industry micro-credentials",
      },
      {
        head: "88%",
        subHead:
          "of employers believe that Professional Certificates strengthen a candidate’s job application",
      },
      {
        head: "90%",
        subHead:
          "of students agree that a Professional Certificate will help them secure a job",
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
