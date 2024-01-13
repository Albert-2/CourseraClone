import React, { useState } from "react";
import MyContext from "../MyCont.jsx";
import HeroImg from "./assets/heroImg.png";
import { Navbar, DegPrgm, Footer, Advtsng, CareerModal } from "./components";
import {
  Adrienne,
  Rachel,
  Daijah,
  Chukwuma,
  Hillary,
  Emma,
  Julio,
} from "./assets/users";
import {
  Prof11,
  Prof12,
  Prof21,
  Prof22,
  Prof31,
  Prof41,
  Prof42,
  Prof51,
  Prof52,
  Prof61,
  Prof71,
  Prof81,
} from "./assets/courseImg";
import { GoogleIcon, IBMIcon, MetaIcon, IntuitIcon } from "./assets/smallIcons";
import {
  Birla,
  BirlaLogo,
  Jain,
  JainLogo,
  Stat,
  StatLogo,
  IIT,
  IITLogo,
  Michigan,
  MichiganLogo,
  Roorkee,
  RoorkeeLogo,
  London,
  LondonLogo,
  Illinois,
  IllinoisLogo,
  Calf,
  CalfLogo,
  Leeds,
  LeedsLogo,
  Darth,
  DarthLogo,
  Illinois2,
  Illinois2Logo,
} from "./assets/institutes";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo6,
  companyLogo7,
  companyLogo8,
  companyLogo9,
} from "./assets/companyLogos";
import Explore1 from "./assets/ExplrCourse1.jpg";
import Explore2 from "./assets/ExplrCourse2.jpg";
import Explore3 from "./assets/ExplrCourse3.jpg";
import Explore4 from "./assets/ExplrCourse4.jpg";
import ThreeImg from "./assets/ThreeImg.png";
import FeedBack1 from "./assets/FeedBack1.png";
import FeedBack2 from "./assets/FeedBack2.png";
import FeedBack3 from "./assets/FeedBack3.png";
import LastImg from "./assets/LastImg.png";
import Footer1 from "../globalCompo/FooterAsst/Footer1.png";
import Footer2 from "../globalCompo/FooterAsst/Footer2.png";
import Footer3 from "../globalCompo/FooterAsst/Footer3.png";
import PageRoute from "../globalCompo/PageRoute.jsx";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const updateCont = (e) => {
    let temp = Number(e.target.attributes.id.value);
    setIndex(temp);
  };
  const content = [
    {
      title: "Project Manager",
      subTitle:
        "Oversee the planning and execution of projects to ensure they’re successful",
      userIcon: Adrienne,
      userName: "Adrienne",
      feedback:
        "Earning my Google Project Management: Professional Certificate is one of the biggest accomplishments I’ve made in my education, and it was a key stepping stone to my new career.",
      courses: [
        {
          image: Prof11,
          icon: GoogleIcon,
          company: "Google",
          name: "Google Project Management",
          skill:
            "Skills you'll gain: Organizational Culture, Career Development, Strategic Thinki...",
        },
        {
          image: Prof12,
          icon: IBMIcon,
          company: "IBM",
          name: "IBM Project Management",
          skill:
            "Skills you'll gain: Project initiation, Communication, Risk Managemen...",
        },
      ],
    },
    {
      title: "Data Analyst",
      subTitle:
        "Collect, organize, and transform data to make informed decisions",
      userIcon: Rachel,
      userName: "Rachel L.",
      feedback:
        "For anyone starting out as a data analyst, this is a great introduction and is very inspiring. The content was well paced and was accessible to people just starting out. I liked the variety of the assignments present in the program. ",
      courses: [
        {
          image: Prof21,
          icon: GoogleIcon,
          company: "Google",
          name: "Google Data Analytics",
          skill:
            "Skills you'll gain: Spreadsheet, Data Cleansing, Data Analysis, Data Visuali...",
        },
        {
          image: Prof22,
          icon: IBMIcon,
          company: "IBM",
          name: "IBM Data Analytics",
          skill:
            "Skills you'll gain: Project initiation, Communication, Risk Managem...",
        },
      ],
    },
    {
      title: "UX Designer",
      subTitle:
        "Make digital and physical products easier and more enjoyable to use",
      userIcon: Daijah,
      userName: "Daijah R.",
      feedback:
        "The program really helped me to mold my idea of what a user experience designer's work should be. Being able to share my work through peer feedback, and really see my product come together as the courses progressed was encouraging, and I could directly see my skills improve and my toolkit expand.",
      courses: [
        {
          image: Prof31,
          icon: GoogleIcon,
          company: "Google",
          name: "Google UX Design",
          skill:
            "Skills you'll gain: User Experience (UX), UX Research, Wireframe, Prototype, User...",
        },
      ],
    },
    {
      title: "IT Support Specialist",
      subTitle:
        "Evaluate and troubleshoot technology issues so equipment runs smoothly",
      userIcon: Hillary,
      userName: "Hillary G.",
      feedback:
        "I believe the certificate showed my then prospective employer proof of my skills and qualification especially coming from a global brand, Google.",
      courses: [
        {
          image: Prof41,
          icon: GoogleIcon,
          company: "Google",
          name: "Google IT Support",
          skill:
            "Skills you'll gain: Debugging, Encryption Algorithms and Techniques, Customer...",
        },
        {
          image: Prof42,
          icon: IBMIcon,
          company: "IBM",
          name: "IBM IT Support",
          skill:
            "Skills you'll gain: Information Technology, Cybersecurity Essentials, IT Service...",
        },
      ],
    },
    {
      title: "Digital Marketer",
      subTitle:
        "Define and develop digital strategies to deliver business growth through online channels",
      userIcon: Chukwuma,
      userName: "Chukwuma E.",
      feedback:
        "After a year of taking courses on Coursera, I can happily say that I have become a confident and aspiring entrepreneur and a better marketing and advertising professional.",
      courses: [
        {
          image: Prof51,
          icon: GoogleIcon,
          company: "Google",
          name: "Google Digital Marketing & E-commerce",
          skill:
            "Skills you'll gain: Marketing, E-Commerce, display advertising, Email Marketing, Search...",
        },
        {
          image: Prof52,
          icon: MetaIcon,
          company: "Meta Social Media Marketing",
          name: "Meta Social Media Marketing",
          skill:
            "Skills you'll gain: Performance Advertising, Digital Marketing, Brand Manageme...",
        },
      ],
    },
    {
      title: "Data Scientist",
      subTitle: "Extract and analyze data to make informed business decisions",
      userIcon: Emma,
      userName: "Emma S.",
      feedback:
        "Being able to complete it and having done that while also becoming a new mother and being able to get the internship made me feel really confident and like I could learn absolutely anything.",
      courses: [
        {
          image: Prof61,
          icon: IBMIcon,
          company: "IBM",
          name: "IBM Data Science",
          skill:
            "Skills you'll gain: Data Science, Methodology, Deep Learning, Machine Learning, Github,...",
        },
      ],
    },
    {
      title: "Front-End Developer",
      subTitle:
        "Design and develop the look, feel, function, and user experience of a website",
      userIcon: Julio,
      userName: "Julio R.",
      feedback:
        "Without a doubt, the web development courses on Coursera were instrumental in helping me build a new career. I’d say that 80% of my current skills were gained on Coursera.",
      courses: [
        {
          image: Prof71,
          icon: MetaIcon,
          company: "Meta",
          name: "Meta Front-End Developer",
          skill:
            "Skills you'll gain: Cascading Style Sheets (CSS), HTML, UI/UX design, React, JavaScri...",
        },
      ],
    },
    {
      title: "Bookeeper",
      subTitle: "Record financial transactions and manage financial records",
      userIcon: Adrienne,
      userName: "Christina",
      feedback:
        "I took this course because my husband and I opened a new business and I wanted to be helpful. This course has helped me understand bookkeeping and also, given me confidence in becoming a bookkeeper. I love how interactive and (although online) Hands on it is. Thank you!",
      courses: [
        {
          image: Prof81,
          icon: IntuitIcon,
          company: "Intuit",
          name: "Intuit Academy Bookkeeping",
          skill:
            "Skills you'll gain: Double-Entry Bookkeeping System, Bookkeeping, Bank Reconciliations,...",
        },
      ],
    },
  ];
  const programs = [
    {
      title: "Degree Programs",
      heading: "Find a top degree that fits your life",
      subHeading:
        "Breakthrough pricing on 100% online degrees from top universities.",
      card: [
        {
          img: Birla,
          logo: BirlaLogo,
          instit: "Birla Institute of Technology & Science, Pilani",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Jain,
          logo: JainLogo,
          instit: "S.P. Jain Institute of Management and Research",
          courseName: "Post Graduate Diploma in Management Online",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Stat,
          logo: StatLogo,
          instit: "Indian Statistical Institute",
          courseName: "Postgraduate Diploma in Applied Statistics",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: IIT,
          logo: IITLogo,
          instit: "Indian Institute of Technology Guwahati",
          courseName: "Bachelor of Science in Data Science & AI",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Michigan,
          logo: MichiganLogo,
          instit: "University of Michigan",
          courseName: "Master of Applied Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Roorkee,
          logo: RoorkeeLogo,
          instit: "IIT Roorkee",
          courseName: "Executive MBA",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: London,
          logo: LondonLogo,
          instit: "University of London",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois,
          logo: IllinoisLogo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Master of Computer Science in Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Calf,
          logo: CalfLogo,
          instit: "University of California, Berkeley",
          courseName: "Master of Advanced Study in Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Leeds,
          logo: LeedsLogo,
          instit: "University of Leeds",
          courseName: "MSc Data Science (Statistics)",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Darth,
          logo: DarthLogo,
          instit: "Dartmouth College",
          courseName: "Master of Engineering in Computer Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois2,
          logo: Illinois2Logo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
      ],
    },
    {
      title: "Degree Programs",
      heading: "Get a head start on a degree today",
      subHeading:
        "Make progress towards a degree by starting with a course, Specialization or Professional Certificate.*",
      card: [
        {
          img: Birla,
          logo: BirlaLogo,
          instit: "Birla Institute of Technology & Science, Pilani",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Jain,
          logo: JainLogo,
          instit: "S.P. Jain Institute of Management and Research",
          courseName: "Post Graduate Diploma in Management Online",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Stat,
          logo: StatLogo,
          instit: "Indian Statistical Institute",
          courseName: "Postgraduate Diploma in Applied Statistics",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: IIT,
          logo: IITLogo,
          instit: "Indian Institute of Technology Guwahati",
          courseName: "Bachelor of Science in Data Science & AI",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Michigan,
          logo: MichiganLogo,
          instit: "University of Michigan",
          courseName: "Master of Applied Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Roorkee,
          logo: RoorkeeLogo,
          instit: "IIT Roorkee",
          courseName: "Executive MBA",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: London,
          logo: LondonLogo,
          instit: "University of London",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois,
          logo: IllinoisLogo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Master of Computer Science in Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Calf,
          logo: CalfLogo,
          instit: "University of California, Berkeley",
          courseName: "Master of Advanced Study in Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Leeds,
          logo: LeedsLogo,
          instit: "University of Leeds",
          courseName: "MSc Data Science (Statistics)",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Darth,
          logo: DarthLogo,
          instit: "Dartmouth College",
          courseName: "Master of Engineering in Computer Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois2,
          logo: Illinois2Logo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
      ],
    },
    {
      title: "Courses and Professional Certificates",
      heading: "New on Coursera",
      subHeading:
        "Breakthrough pricing on 100% online degrees from top universities.",
      card: [
        {
          img: Birla,
          logo: BirlaLogo,
          instit: "Birla Institute of Technology & Science, Pilani",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Jain,
          logo: JainLogo,
          instit: "S.P. Jain Institute of Management and Research",
          courseName: "Post Graduate Diploma in Management Online",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Stat,
          logo: StatLogo,
          instit: "Indian Statistical Institute",
          courseName: "Postgraduate Diploma in Applied Statistics",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: IIT,
          logo: IITLogo,
          instit: "Indian Institute of Technology Guwahati",
          courseName: "Bachelor of Science in Data Science & AI",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Michigan,
          logo: MichiganLogo,
          instit: "University of Michigan",
          courseName: "Master of Applied Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Roorkee,
          logo: RoorkeeLogo,
          instit: "IIT Roorkee",
          courseName: "Executive MBA",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: London,
          logo: LondonLogo,
          instit: "University of London",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois,
          logo: IllinoisLogo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Master of Computer Science in Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Calf,
          logo: CalfLogo,
          instit: "University of California, Berkeley",
          courseName: "Master of Advanced Study in Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Leeds,
          logo: LeedsLogo,
          instit: "University of Leeds",
          courseName: "MSc Data Science (Statistics)",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Darth,
          logo: DarthLogo,
          instit: "Dartmouth College",
          courseName: "Master of Engineering in Computer Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois2,
          logo: Illinois2Logo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
      ],
    },
    {
      title: "100% Free",
      heading: "Get a head start on a degree today",
      subHeading:
        "Make progress towards a degree by starting with a course, Specialization or Professional Certificate.*",
      card: [
        {
          img: Birla,
          logo: BirlaLogo,
          instit: "Birla Institute of Technology & Science, Pilani",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Jain,
          logo: JainLogo,
          instit: "S.P. Jain Institute of Management and Research",
          courseName: "Post Graduate Diploma in Management Online",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Stat,
          logo: StatLogo,
          instit: "Indian Statistical Institute",
          courseName: "Postgraduate Diploma in Applied Statistics",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: IIT,
          logo: IITLogo,
          instit: "Indian Institute of Technology Guwahati",
          courseName: "Bachelor of Science in Data Science & AI",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Michigan,
          logo: MichiganLogo,
          instit: "University of Michigan",
          courseName: "Master of Applied Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Roorkee,
          logo: RoorkeeLogo,
          instit: "IIT Roorkee",
          courseName: "Executive MBA",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: London,
          logo: LondonLogo,
          instit: "University of London",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois,
          logo: IllinoisLogo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Master of Computer Science in Data Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Calf,
          logo: CalfLogo,
          instit: "University of California, Berkeley",
          courseName: "Master of Advanced Study in Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Leeds,
          logo: LeedsLogo,
          instit: "University of Leeds",
          courseName: "MSc Data Science (Statistics)",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Darth,
          logo: DarthLogo,
          instit: "Dartmouth College",
          courseName: "Master of Engineering in Computer Engineering",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
        {
          img: Illinois2,
          logo: Illinois2Logo,
          instit: "University of Illinois at Urbana-Champaign",
          courseName: "Bachelor of Science in Computer Science",
          degreeIcon: true,
          degree: "Earn a degree",
          Degree: "Degree",
        },
      ],
    },
  ];
  const courseList = [
    {
      name: "Data Science",
      courses: 425,
      icon: Explore1,
    },
    {
      name: "Business",
      courses: 1095,
      icon: Explore4,
    },
    {
      name: "Computer Science",
      courses: 668,
      icon: Explore3,
    },
    {
      name: "Health",
      courses: 471,
      icon: Explore1,
    },
    {
      name: "Social Sciences",
      courses: 401,
      icon: Explore2,
    },
    {
      name: "Personal Development",
      courses: 127,
      icon: Explore3,
    },
    {
      name: "Arts and Humanities",
      courses: 338,
      icon: Explore1,
    },
    {
      name: "Physical Science and Engineering",
      courses: 413,
      icon: Explore4,
    },
    {
      name: "Language and Learning",
      courses: 150,
      icon: Explore3,
    },
    {
      name: "Informatioin Technology",
      courses: 145,
      icon: Explore2,
    },
    {
      name: "Maths and Logic",
      courses: 70,
      icon: Explore4,
    },
  ];
  const company = [
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
    companyLogo7,
    companyLogo8,
    companyLogo9,
  ];
  const feedBack = [
    {
      userIcon: FeedBack1,
      userName: "Chitranshee A.",
      userCountry: "India",
      feedBack:
        "“Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”",
    },
    {
      userIcon: FeedBack2,
      userName: "Carlos C.",
      userCountry: "United States",
      feedBack:
        "“Earning my IT certificates helped me demonstrate my knowledge to recruiters and enhanced my standing as an applicant. Now, I love my new job in the tech industry; technology is always evolving, and I continue to learn something every day.”",
    },
    {
      userIcon: FeedBack3,
      userName: "Anisa R.",
      userCountry: "United States",
      feedBack:
        "“The program totally changed my life. I have this career in front of me now that wasn’t even in sight before, and it’s what I want to be doing. That’s really powerful.”",
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
  return (
    <>
      <PageRoute />
      <Navbar />
      <div className="flexStyle container m-auto py-8 px-4">
        <div className="flex-1 flex md:text-left text-center justify-center md:items-start flex-col space-y-10 md:max-w-max max-w-sm">
          <h1 className="font-bold md:text-8xl text-6xl">
            Learn without limits
          </h1>
          <p className="text-lg">
            Start, switch, or advance your career with more than 5,800 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-4">
            <button className="text-white bg-blue-700 font-semibold p-4">
              Join for free
            </button>
            <button className="p-4 border-2 border-blue-700 text-blue-700 font-semibold">
              Try Coursera for Business
            </button>
          </div>
        </div>
        <div className="flex-1 md:block hidden">
          <img
            src={HeroImg}
            alt="image"
            className=" lg:max-w-lg max-w-sm m-auto"
          />
        </div>
      </div>
      <Advtsng />
      <div className="container m-auto flex flex-col gap-6 py-6 px-4 ">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-6">
          <h1 className="font-bold text-4xl tracking-wide inline">
            Launch a new career in as little as 6 months
          </h1>
          <a href="#">View all roles</a>
        </div>
        <ul className="flex items-center justify-between border-b-4 py-4 overflow-scroll gap-4">
          {content.map((course, courseIndex) => (
            <li
              className={`min-w-fit cursor-pointer ${
                index == courseIndex && "text-blue-700"
              }`}
              id={courseIndex}
              key={courseIndex}
              onClick={updateCont}
            >
              {course.title}
            </li>
          ))}
        </ul>
        <CareerModal info={content[index]} />
        {programs.map((prog, progIndex) => (
          <MyContext.Provider value={prog} key={progIndex}>
            <div className="py-6 ">
              <DegPrgm />
            </div>
          </MyContext.Provider>
        ))}
        <h1 className="sm:text-4xl text-2xl font-semibold mb-6 tracking-wider">
          Explore Coursera
        </h1>
        <div className="flex items-start justify-start flex-wrap gap-6">
          {courseList.map((item, itemIndex) => (
            <div
              className="flex items-center border-2 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] sm:hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] sm:min-w-[300px] min-w-full flex-1 gap-4"
              key={itemIndex}
            >
              <img src={item.icon} alt="explore" className="w-20 h-20" />
              <div className="text-sm">
                <h1 className="font-bold">{item.name}</h1>
                <p>{item.courses} courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:py-40 py-20">
        <div className="bg-blue-100 xl:h-[600px] h-fit flexStyle xl:flex-row flex-col gap-6 sm:px-24 px-4 ">
          <img
            src={ThreeImg}
            alt="images"
            className="flex-1 xl:w-[600px] max-w[400px]"
          />
          <div className="text-lg  flex-1 w-full space-y-6 pb-10">
            <h1 className="lg:text-5xl text-3xl">
              Learner outcomes on Coursera
            </h1>
            <p className="tracking-wider sm:text-lg text-sm">
              <span className="font-bold">87% of people learning</span> for
              professional development{" "}
              <span className="font-bold">report career benefits,</span>{" "}
              including outcomes like getting a promotion, becoming better at
              their current job, and finding a new job.{" "}
              <u className="text-blue-700">Coursera Impact Report (2020)</u>
            </p>
            <button className="md:w-auto w-2/3  py-3 px-8 text-white bg-blue-700 font-semibold rounded-md">
              Join for free
            </button>
          </div>
        </div>
      </div>
      <div className="container m-auto py-10 flexStyle flex-col space-y-6 text-center">
        <div className="flex items-center space-y-4 flex-col">
          <h1 className="font-semibold text-4xl ">
            From the Coursera community
          </h1>
          <p className="text-2xl ">
            124+ million people have already joined Coursera
          </p>
        </div>
        <div className="flex gap-6 items-stretch justify-start overflow-scroll  w-full">
          {feedBack.map((fb, indexFb) => (
            <div
              className="flex flex-col items-center justify-start space-y-4   sm:min-w-[300px] min-w-full "
              key={indexFb}
            >
              <img src={fb.userIcon} alt="image" className="w-48" />
              <h1 className="text-blue-900 font-bold text-lg">{fb.userName}</h1>
              <p className="border-b-2 border-blue-900 px-6 py-2">
                {fb.userCountry}
              </p>
              <p className="text-lg text-center  px-10">{fb.feedBack}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f3f3f3] sm:py-20 py-10">
        <div className="container m-auto flex items-stretch justify-center lg:flex-row flex-col gap-6 px-10">
          <div className="flex flex-col items-start justify-center space-y-6  flex-1">
            <h1 className="font-bold text-3xl">
              The ideal solution for your business
            </h1>
            <p className="text-sm">
              Get the world-class learning and development chosen by top
              organizations across the globe. All on Coursera for Business.
            </p>
            <button className="md:w-auto w-full py-3 px-8 text-white bg-blue-700 font-bold rounded-md">
              Discover Coursera for Business
            </button>
            <p className="text-sm">
              Upskill a small team?{" "}
              <u className="text-blue-700">Check out Coursera for Teams</u>
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 text-center flex-1 gap-6 py-6">
            {company.map((logo, logoIndex) => (
              <img
                src={logo}
                alt="logo"
                key={logoIndex}
                className="m-auto py-4"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto flex lg:items-center items-start justify-center lg:flex-row flex-col sm:p-20 p-6 sm:gap-16 gap-6 my-14">
        <img src={LastImg} alt="image" />
        <div className="flex flex-col items-start justify-center space-y-4 lg:w-1/3 w-auto">
          <h1 className="font-bold leading-tight lg:text-5xl text-3xl">
            Take the next step toward your personal and professional goals with
            Coursera.
          </h1>
          <p>
            Join now to receive personalized recommendations from the full
            Coursera catalog.
          </p>
          <button className="sm:w-auto w-full  py-3 px-8 text-white bg-blue-700 font-bold rounded-md">
            Join for free
          </button>
        </div>
      </div>
      <div className="bg-[#f3f3f3] sm:py-20 py-10">
        <Footer data={footerData} />
      </div>
    </>
  );
};

export default Hero;
