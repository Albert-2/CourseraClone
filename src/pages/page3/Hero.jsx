import React from "react";
import Logo from "./assets/campLogo.svg";
import GlobNavbar from "../globalCompo/GlobNavbar";
import HomePage from "./assets/HomepageImg.jpg";
import GlobHero from "../globalCompo/GlobHero";
import ClgCollage from "./assets/university-collage.png";
import BusinsCard from "../globalCompo/BusinsCard";
import BusinsCard2 from "../globalCompo/BusinsCard2";
import CareerAcademy from "./assets/career-academy.jpg";
import CoverImage from "./assets/video_cover_image.jpg";

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
  const cardCont = {
    heading:
      "Offer students 5,400 courses from 275+ leading universities and industry partners",
    collage: ClgCollage,
  };
  const content = [
    {
      mainImg: CareerAcademy,
      heading: "CAREER ACADEMY",
      subHead:
        "Strengthen student employability with skills training from the world's leading companies.",
      listHead: "With Career Academy, enable your students to:",
      list: [
        "Earn a Professional Certificate designed to get them job-ready",
        "Gain common job skills employers demand",
        "Showcase skill mastery with a portfolio of work",
        "Explore a range of in-demand roles across industries",
      ],
      button: "Learn more about Career Academy",
    },
    {
      CoverImage,
      flxDir: "reverse",
      heading: "PROFESSIONAL CERTIFICATES",
      subHead:
        "Learn why students and employers value Professional Certificates",
      listHead:
        "A survey of 5,000 students and employers in 11 countries finds that the majority value Professional Certificates for driving employment outcomes. Professional Certificates help students demonstrate to employers that they are qualified and job-ready.",
      button: "Get report",
    },
  ];
  return (
    <>
      <GlobNavbar info={navBar} />
      <GlobHero heroInfo={heroContent} />
      <BusinsCard content={cardCont} />
      <div className="bg-gray-100">
        {content.map((content, index) => (
          <BusinsCard2 content={content} key={index} />
        ))}
      </div>
    </>
  );
};

export default Hero;
