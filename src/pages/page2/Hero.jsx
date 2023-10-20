import React from "react";
import GlobNavbar from "../globalCompo/GlobNavbar";
import Logo from "../page2/assets/businLogo.svg";
import GlobHero from "../globalCompo/GlobHero";
import HomePage from "./assets/HomepageImg.jpg";
import BusinsCard from "../globalCompo/BusinsCard";
import BusinsCard2 from "../globalCompo/BusinsCard2";
import Prgms from "../globalCompo/Prgms";
import companyLogo1 from "../page1/assets/companyLogos/Comp1.png";
import companyLogo2 from "../page1/assets/companyLogos/Comp2.png";
import companyLogo3 from "../page1/assets/companyLogos/Comp3.png";
import companyLogo4 from "../page1/assets/companyLogos/Comp4.png";
import companyLogo5 from "../page1/assets/companyLogos/Comp5.png";
import companyLogo6 from "../page1/assets/companyLogos/Comp6.png";
import companyLogo7 from "../page1/assets/companyLogos/Comp7.png";
import companyLogo8 from "../page1/assets/companyLogos/Comp8.png";
import companyLogo9 from "../page1/assets/companyLogos/Comp9.png";
import DemandSkills from "./assets/InDemandSkills.png";
import hiringImg from "./assets/hiring-solutions-hero1.jpg";
import skillDashBoard from "./assets/SkillsDashboard.png";
import ClgCollage from "../page3/assets/university-collage.png";
import compLogo3 from "../page2/assets/PricewaterhouseCoopers_Logo.svg";
import compLogo4 from "../page2/assets/adobe-logo.svg";
import Prgm1 from "./assets/academics/academy_leadership_hero.jpg";
import Prgm2 from "./assets/academics/tech.jpg";
import Prgm3 from "./assets/academics/Data_and_Analytics.jpg";
import Prgm4 from "./assets/academics/marketing.jpg";
import Prgm5 from "./assets/academics/finance.jpg";
import Prgm6 from "./assets/academics/career.jpg";
import Footer from "../page1/components/Footer";
import Footer1 from "../globalCompo/FooterAsst/Footer1.png";
import Footer2 from "../globalCompo/FooterAsst/Footer2.png";
import Footer3 from "../globalCompo/FooterAsst/Footer3.png";
import BlkBanner from "../globalCompo/BlkBanner";

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
  const cardCont = {
    card: 1,
    heading: "Leaders at 3,800+ companies develop their talent with Coursera",
    companies: [
      companyLogo1,
      companyLogo2,
      companyLogo3,
      companyLogo4,
      companyLogo5,
      companyLogo6,
      companyLogo7,
      companyLogo8,
      companyLogo9,
    ],
  };
  const cardContent1 = [
    {
      mainImg: DemandSkills,
      heading: "UPSKILL EMPLOYEES",
      subHead: "Strengthen critical skills across every team",
      listHead:
        "Increase business impact and agility with in-demand tech, data, and leadership skills.",
      list: [
        "Use role-based assessments to identify skills gaps and advancement opportunities",
        "Advance skills in roles that drive rapid transformation for your company",
        "Enhance leadership skills to engage, navigate, and motivate employees amid change",
        "Learn and apply skills faster with hands-on projects and immersive learning",
      ],
      button: "Explore skill-based learning",
      feedback:
        '"What I’ve learned through Coursera allows me to better guide and inform the professional data analysts on my team to solve tough business problems and accelerate the development of our digital capabilities."',
      compLogo: companyLogo2,
      compEmp: "Sabine M.",
      compName: "Research Fellow, Procter & Gamble",
    },
    {
      flxDir: "reverse",
      mainImg: ClgCollage,
      head: "WORLD-CLASS CONTENT",
      subHead: "Learn from the best",
      listHead:
        "Lower training costs with in-demand content and trusted credentials from 300+ top companies and universities",
      list: [
        "Provide expert instruction from 13 of the top 20 business schools in the world",
        "Prepare employees for digital roles with career credentials from industry experts",
        "Drive continuous learning with short videos, lessons, and hands-on projects",
        "Curate your own content experiences or leverage our job-aligned collections",
      ],
      button: "Explore word-class content",
    },
  ];
  const cardContent2 = [
    {
      mainImg: skillDashBoard,
      heading: "SHOW ROI",
      subHead: "Demonstrate the value of learning",
      listHead:
        "Use comprehensive metrics and insights to inform, measure, and assess your talent development strategy impact.",
      list: [
        "Track real-time skill development and learning activity of everyone in your company",
        "Gain industry-specific insights to understand the fast-changing skills landscape",
        "See every employee’s proficiency in 117+ technology, data, and business skills",
        "Evaluate your skills against industry benchmarks using verified performance data",
      ],
      button: "Explore the Skills Dashboard",
      feedback:
        '"With knowledge sharing and continued learning, we can increase productivity and keep delivering excellent client services that support our revenue goals."',
      compLogo: compLogo3,
      compEmp: "Manpreet S.",
      compName: "Chief Digital Officer, PwC India",
    },
    {
      flxDir: "reverse",
      mainImg: hiringImg,
      heading: "RETAIN TALENT",
      subHead: "Develop, retain, and advance your talent",
      listHead:
        "Be the company people want to join, stay at, and find their next move with.",
      list: [
        "Provide high-quality career development, from entry-level to C-suite roles",
        "Use verified skill performance data to identify potential candidates for open roles",
        "Retrain employees whose roles are impacted by emerging technologies",
      ],
      button: "Explore more Coursera advantages",
      feedback:
        '"Training like this allows us to attract, develop, and retain the top talent that helps Adobe maintain its reputation as a technology leader."',
      compLogo: compLogo4,
      compEmp: "Tim C.",
      compName: "Senior Director of Applied Machine Learning, Adobe",
    },
  ];
  const popular = [
    "Business",
    "Computer Science",
    "Data Science",
    "Information Technology",
    "Health",
    "Art and Humanities",
  ];
  const prgmDetail = [
    {
      img: Prgm1,
      academy: "Leadership Academy",
      courseDet:
        "Develop employees with the skills to collaborate,communicate, and lead teams.",
      rating: 4.74,
      reviews: 692,
      button: "Learn more",
    },
    {
      img: Prgm2,
      academy: "Tech Academy",
      courseDet:
        "Streamline technology transformation with training for IT, engineering, and security teams.",
      rating: 6.74,
      reviews: 1020,
      button: "Learn more",
    },
    {
      img: Prgm3,
      academy: "Data and Analytics Academy",
      courseDet:
        "Invest in data, AI, and ML skills to improve decision-making and increase innovation. ",
      rating: 6.73,
      reviews: 933,
      button: "Learn more",
    },
    {
      img: Prgm4,
      academy: "Marketing Academy",
      courseDet:
        "Supercharge your marketing team with hands-on martech and digital marketing training.",
      rating: 4.73,
      reviews: 769,
      button: "Learn more",
    },
    {
      img: Prgm5,
      academy: "Finance Academy",
      courseDet:
        "Improve confidence in forecasting, budgeting, and major business decisions.",
      rating: 4.75,
      reviews: 1086,
      button: "Learn more",
    },
    {
      img: Prgm6,
      academy: "Career Academy",
      courseDet:
        "Attract and retain your frontline workers with career development benefits.",
      rating: 4.58,
      reviews: 671,
      button: "Learn more",
    },
  ];
  const bannerCont = {
    heading: "Let’s talk about making talent your advantage",
    subHeading:
      "Connect with our team to learn how you can prepare your business for rapid change.",
    btn1: "Contact us",
    btn2: "Compare plans",
    footer: "Upskilling fewer than 125 employees?",
    footerSpan: "Get Coursera for Teams",
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
  return (
    <>
      <GlobNavbar info={navBar} />
      <GlobHero heroInfo={heroContent} />
      <BusinsCard content={cardCont} />
      {cardContent1.map((content, index) => (
        <div className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
          <BusinsCard2 content={content} key={index} />
        </div>
      ))}
      <div className="flex items-center justify-center gap-20 py-20 flex-col bg-gray-100">
        <div className="text-center">
          <h1 className="font-bold text-4xl">
            Search our catalog of world-class content
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <input
            type="text"
            placeholder="e.g.Data Science"
            className="w-full p-2 border-2 outline-blue-700"
          />
          <ul className="flex gap-4 flex-wrap">
            {popular.map((course, index) => (
              <li
                className="rounded-3xl border-2 hover:bg-blue-100 text-sm px-4 py-2 cursor-pointer"
                key={index}
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" bg-blue-700">
        <div className="container m-auto space-y-20 py-10 px-4">
          <div className=" flex flex-col items-start justify-center text-white space-y-8">
            <h4 className="font-bold">ACADEMICS</h4>
            <h1 className="font-bold text-5xl">
              Leverage job-aligned curations
            </h1>
            <p className="text-lg">
              Offer your employees curated skill paths that progress through
              beginner, intermediate, and advanced levels.
            </p>
          </div>
          <div className=" flex flex-col items-start justify-center">
            <h3 className="font-bold text-2xl text-white ">
              Browse Coursera Academies
            </h3>
            <div className="flex items-center justify-between sm:py-10 py-4 overflow-scroll gap-16  container m-auto">
              {prgmDetail.map((detail, index) => (
                <Prgms detail={detail} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {cardContent2.map((content, index) => (
        <div className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
          <BusinsCard2 content={content} key={index} />
        </div>
      ))}
      <BlkBanner content={bannerCont} />
      <div className="bg-[#f3f3f3] sm:py-20 py-10">
        <Footer data={footerData} />
      </div>
    </>
  );
};

export default Hero;
