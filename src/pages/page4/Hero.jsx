import React from "react";
import Logo from "../page4/assets/govtLogo.svg";
import GlobNavbar from "../globalCompo/GlobNavbar";
import HomePage from "./assets/HomepageImg.png";
import GlobHero from "../globalCompo/GlobHero";
import icon1 from "./assets/featureIcons/icon_one.svg";
import icon2 from "./assets/featureIcons/icon_two.svg";
import icon3 from "./assets/featureIcons/icon_three.svg";
import icon4 from "./assets/featureIcons/icon_four.svg";
import Footer from "../page1/components/Footer";
import Footer1 from "../globalCompo/FooterAsst/Footer1.png";
import Footer2 from "../globalCompo/FooterAsst/Footer2.png";
import Footer3 from "../globalCompo/FooterAsst/Footer3.png";
import BlkBanner from "../globalCompo/BlkBanner";
import backgroundLight from "../../assets/coursera-bg-light-white.png";
import backgroundDark from "../../assets/coursera-bg-drk-blue.png";
import AchievementCard from "../globalCompo/achievementCard";
import BlueBanner from "../globalCompo/BlueBanner";
import imgOne from "./assets/card_Citizen_Workforce_Development.jpg";
import CarSoln from "./components/CarSoln";
import PageRoute from "../globalCompo/PageRoute";

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
  const footerData = [
    [
      [
        "New & Trending",
        "New Courses",
        "Free Courses",
        "Learn Artificial Intelligence",
        "Learn ChatGPT",
        "Learn Cyber Security",
        "Learn Data Science",
        "Learn Excel",
        "Learn Generative AI with Large Language Models",
        "Learn Prompt Engineering For Chatgpt",
        "Learn Python",
      ],
      [
        "Popular Skills",
        "Learn Computer Science",
        "Learn Data Analysis",
        "Learn Digital Marketing",
        "Learn Information Technology",
        "Learn English",
        "Learn Machine Learning",
        "Learn Power Bi",
        "Learn Product Management",
        "Learn Project Management",
        "Learn Web Development",
      ],
      [
        "Popular Career Certificates",
        "Google Advanced Data Analytics Professional Certificate",
        "Google Business Intelligence Professional Certificate",
        "Google Cybersecurity Professional Certificate",
        "Google Data Analytics Professional Certificate",
        "Google Digital Marketing & E-commerce Professional Certificate",
        "IBM AI Engineering Professional Certificate",
        "IBM Data Analyst Professional Certificate",
        "Machine Learning Specialization",
        "Meta Back-End Developer Professional Certificate",
        "Meta Front-End Developer Professional Certificate",
      ],
      [
        "Popular Career Articles",
        "Examples of Strengths and Weaknesses for Job Interviews",
        "High-Income Skills Worth Learning",
        "How to Announce Your New Job on LinkedIn",
        "How to Ask for a Letter of Recommendation",
        "How to Write a Letter of Recommendation",
        "How to Write an Eye-Catching Job Application Email",
        "Popular Cybersecurity Certifications",
        "The 4 Ps of Marketing",
        "What Are Professional Development Goals",
        "What Does a Data Analyst Do",
      ],
    ],
    [
      [
        "Coursera",
        "About",
        "What We Offer",
        "Leadership",
        "Careers",
        "Catalog",
        "Coursera Plus",
        "Professional Certificates",
        "MasterTrack® Certificates",
        "Degrees",
        "For Enterprise",
        "For Government",
        "For Campus",
        "Become a Partner",
        "Coronavirus Response",
        "Free Courses",
        "All Courses",
      ],
      [
        "Community",
        "Learners",
        "Partners",
        "Beta Testers",
        "Translators",
        "Blog",
        "Tech Blog",
        "Teaching Center",
      ],
      [
        "More",
        "Press",
        "Investors",
        "Terms",
        "Privacy",
        "Help",
        "Accessibility",
        "Contact",
        "Articles",
        "Directory",
        "Affiliates",
        "Modern Slavery Statement",
        "Do Not Sell/Share",
      ],
      [
        <img src={Footer1} alt="icon" className="mb-10 " />,
        <img src={Footer2} alt="icon" className="mb-10 " />,
        <img src={Footer3} alt="icon" className="sm:mb-10 mb-0" />,
      ],
    ],
  ];
  const bannerCont = {
    heading: "Transform your workforce today",
    subHeading:
      "Equip employees and citizens with the skills needed to achieve their life and career goals",
    btn1: "Learn more",
    footer: "Upskilling fewer than 125 government employees?",
    footerSpan: "Get Coursera for Teams",
  };
  const achievements = [
    {
      backImg: backgroundDark,
      textCol: "text-white",
      heading: "Global Skills Report 2023: ",
      subHeading:
        "Build a job-relevant curriculum with skill insights drawn from 124M+ learners to prepare your students for the digital economy",
      button: "Get report",
    },
    {
      backImg: backgroundDark,
      textCol: "text-white",
      heading: "WEBINAR: State of Global Skills 2023 with Learning Leaders",
      subHeading: "Hear expert insights on in-demand skill trends ",
      button: "Watch now",
    },
    {
      backImg: backgroundLight,
      textCol: "text-black",
      heading: "Online Training Provider Guide",
      subHeading:
        "Learn how investing in online training can help you close skill gaps and boost employee retention.",
      button: "Get guide",
    },
  ];
  const blueBannerCont = {
    heading:
      "Grow your talent and economy with the world’s leading skills platform",
    subHeading:
      "Deploy training for in-demand skills to your citizen workforce and government employees.",
    features: [
      {
        icon: icon1,
        heading: "World-Class Content",
        detail:
          "Empower your learners with world-class training and credentials from 275+ leading universities and companies.",
      },
      {
        icon: icon2,
        heading: "In-Demand Skills",
        detail: "Offer training in data, technology, and leadership skills.",
      },
      {
        icon: icon3,
        heading: "Hands-on Learning",
        detail:
          "Enable applied learning through real-world assessments and projects.",
      },
      {
        icon: icon4,
        heading: "Actionable Insights",
        detail:
          "Track, measure, and benchmark learner progress to guide training strategies.",
      },
    ],
  };
  const progCont = [
    {
      image: imgOne,
      heading: "CITIZEN WORKFORCE DEVELOPMENT",
      subHeading: "Train your citizens",
      desc: "Enable your workforce to develop job-relevant skills to help reduce unemployment and increase economic competitiveness.",
    },
    {
      image: imgOne,
      heading: "GOVERNMENT EMPLOYEE UPSKILLING",
      subHeading: "Train your government employees",
      desc: "Build the skilled workforce needed to improve service efficiency and drive performance results.",
    },
  ];
  return (
    <>
      <PageRoute />
      <GlobNavbar info={navBar} />
      <GlobHero heroInfo={heroContent} />
      <div className="py-24 flex md:items-start items-center justify-center md:flex-row flex-col md:container m-auto px-2 gap-6">
        <div className="md:w-[25%] mx-auto w-full">
          <h1 className="font-bold sm:text-4xl text-3xl tracking-wide ">
            Choose the right career solutions for your citizens and employees
          </h1>
        </div>
        <div className="flex items-center  justify-center gap-10 sm:flex-row flex-col md:max-w-[50%] max-w-full sm:w-full w-[383px]">
          {progCont.map((prog, progIndex) => (
            <CarSoln content={prog} key={progIndex} />
          ))}
        </div>
      </div>
      <BlueBanner content={blueBannerCont} />
      <BlkBanner content={bannerCont} />
      <div className="flex items-stretch justify-center gap-4 sm:flex-row flex-col container sm:w-[75%] w-[95%] m-auto py-20">
        {achievements.map((achvmnt, index) => (
          <AchievementCard key={index} achievements={achvmnt} />
        ))}
      </div>
      <div className="bg-[#f3f3f3] sm:py-20 py-10">
        <Footer data={footerData} />
      </div>
    </>
  );
};

export default Hero;
