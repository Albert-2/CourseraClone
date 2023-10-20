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
  const features = [
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
  ];
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
  return (
    <>
      <GlobNavbar info={navBar} />
      <GlobHero heroInfo={heroContent} />
      <div className=" bg-blue-700 sm:p-20 p-8">
        <div className="container m-auto flex item-center justify-between md:flex-row flex-col md:gap-20 gap-10">
          <div className="flex flex-col item-center justify-start  text-white space-y-6 flex-1">
            <h1 className="font-bold sm:text-4xl text-3xl">
              Expand your curriculum and empower your faculty
            </h1>
            <p className="sm:text-lg text-base">
              Deliver practical, job-relevant learning experiences with
              professional content and courses from university and industry
              experts
            </p>
          </div>
          <div className="flex item-center justify-evenly flex-wrap md:flex-row flex-col  text-white flex-1 gap-10">
            {features.map((feature, index) => (
              <div className=" flex  items-start justify-start flex-col space-y-2 md:w-[40%]">
                {/* <div className=" flex items-start justify-start flex-col space-y-2 w-[300px]"> */}
                <img src={feature.icon} alt="icon" className="" />
                <h1 className="text-xl font-semibold">{feature.heading}</h1>
                <p className="">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div><BlkBanner content={bannerCont} />
      <div className="bg-[#f3f3f3] sm:py-20 py-10">
        <Footer data={footerData} />
      </div>
    </>
  );
};

export default Hero;
