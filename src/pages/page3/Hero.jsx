import React from "react";
import Logo from "./assets/campLogo.svg";
import GlobNavbar from "../globalCompo/GlobNavbar";
import HomePage from "./assets/HomepageImg.jpg";
import GlobHero from "../globalCompo/GlobHero";
import ClgCollage from "./assets/university-collage.png";
import BusinsCard from "../globalCompo/BusinsCard";
import BusinsCard2 from "../globalCompo/BusinsCard2";
import CareerAcademy from "./assets/career-academy.jpg";
import VidCoverImage from "./assets/video_cover_image.jpg";
import icon1 from "./assets/featureIcons/icon_one.svg";
import icon2 from "./assets/featureIcons/icon_two.svg";
import icon3 from "./assets/featureIcons/icon_three.svg";
import icon4 from "./assets/featureIcons/icon_four.svg";
import Footer from "../page1/components/Footer";
import Footer1 from "../globalCompo/FooterAsst/Footer1.png";
import Footer2 from "../globalCompo/FooterAsst/Footer2.png";
import Footer3 from "../globalCompo/FooterAsst/Footer3.png";
import BlkBanner from "../globalCompo/BlkBanner";
import AchievementCard from "../globalCompo/achievementCard";
import backgroundLight from "../../assets/coursera-bg-light-white.png";
import backgroundDark from "../../assets/coursera-bg-drk-blue.png";
import BlueBanner from "../globalCompo/BlueBanner";

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
      VidCoverImage,
      flxDir: "reverse",
      heading: "PROFESSIONAL CERTIFICATES",
      subHead:
        "Learn why students and employers value Professional Certificates",
      listHead:
        "A survey of 5,000 students and employers in 11 countries finds that the majority value Professional Certificates for driving employment outcomes. Professional Certificates help students demonstrate to employers that they are qualified and job-ready.",
      button: "Get report",
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
    heading: "Help prepare career-ready graduates",
    subHeading:
      "Widen your reach, enhance your curriculum, and empower students and faculty with Coursera for Campus.",
    btn1: "Contact us",
    btn2: "Compare plans",
  };
  const achievements = [
    {
      backImg: backgroundLight,
      textCol: "text-black",
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
      heading: "The Professional Certificates Playbook:",
      subHeading:
        "Learn how universities are using industry micro-credentials to improve student employment outcomes.",
      button: "Read now",
    },
  ];
  const blueBannerCont = {
    heading: "Expand your curriculum and empower your faculty",
    subHeading:
      "Deliver practical, job-relevant learning experiences with professional content and courses from university and industry experts",
    features: [
      {
        icon: icon1,
        heading: "World-Class Content",
        detail:
          "Connect students to a wide range of content from hundreds of industry leaders and universities.",
      },
      {
        icon: icon2,
        heading: "Guided Projects",
        detail:
          "Give students hands-on projects to practice skills and stand out to employers.",
      },
      {
        icon: icon3,
        heading: "Professional Certificates",
        detail:
          "Help your students grow job confidence, apply learning, and hone critical skills in high-growth fields.",
      },
      {
        icon: icon4,
        heading: "LMS Integration",
        detail:
          "Streamline the learning experience by linking Coursera to your learning management system.",
      },
    ],
  };

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
      <BlueBanner content={blueBannerCont} />
      <BlkBanner content={bannerCont} />
      <div className="flex items-stretch justify-center gap-4 sm:flex-row flex-col container sm:w-auto w-[95%] m-auto sm:py-20 py-10">
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
