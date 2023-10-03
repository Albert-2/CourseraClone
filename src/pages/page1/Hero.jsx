import React, { useState } from "react";
import MyContext from "../MyCont.jsx";
import HeroImg from "./assets/heroImg.png";
import Navbar from "./components/Navbar";
import Advtsng from "./components/Advtsng";
import CareerModal from "./components/CareerModal";
import Adrienne from "./assets/users/Adrienne.png";
import Rachel from "./assets/users/Rachel.png";
import Daijah from "./assets/users/Daijah.png";
import Chukwuma from "./assets/users/Chukwuma.png";
import Hillary from "./assets/users/Hillary.png";
import Emma from "./assets/users/Emma.png";
import Julio from "./assets/users/Julio.png";
import Prof11 from "./assets/courseImg/Prof11.png";
import Prof12 from "./assets/courseImg/Prof12.png";
import Prof21 from "./assets/courseImg/Prof21.png";
import Prof22 from "./assets/courseImg/Prof22.png";
import Prof31 from "./assets/courseImg/Prof31.png";
import Prof41 from "./assets/courseImg/Prof41.png";
import Prof42 from "./assets/courseImg/Prof42.png";
import Prof51 from "./assets/courseImg/Prof51.png";
import Prof52 from "./assets/courseImg/Prof52.png";
import Prof61 from "./assets/courseImg/Prof61.png";
import Prof71 from "./assets/courseImg/Prof71.png";
import Prof81 from "./assets/courseImg/Prof81.png";
import GoogleIcon from "./assets/smallGoogle.png";
import IBMIcon from "./assets/smallIBM.png";
import MetaIcon from "./assets/smallMeta.png";
import IntuitIcon from "./assets/smallIntuit.png";
import DegPrgm from "./components/DegPrgm";
import Birla from "./assets/institutes/BirlaInst.png";
import BirlaLogo from "./assets/institutes/smallBirla.png";
import Jain from "./assets/institutes/JainInst.jpg";
import JainLogo from "./assets/institutes/smallJain.png";
import Stat from "./assets/institutes/StatInst.png";
import StatLogo from "./assets/institutes/smallStat.png";
import IIT from "./assets/institutes/IITInst.png";
import IITLogo from "./assets/institutes/smallIIT.png";
import Michigan from "./assets/institutes/MichiganInst.png";
import MichiganLogo from "./assets/institutes/smallMichigan.png";
import Roorkee from "./assets/institutes/RoorkeeInst.png";
import RoorkeeLogo from "./assets/institutes/smallRoorkee.png";
import London from "./assets/institutes/LondonInst.png";
import LondonLogo from "./assets/institutes/smallLondon.png";
import Illinois from "./assets/institutes/IllinoisInst.png";
import IllinoisLogo from "./assets/institutes/smallIllinois.png";
import Calf from "./assets/institutes/CalfInst.png";
import CalfLogo from "./assets/institutes/smallCalf.png";
import Leeds from "./assets/institutes/LeedsInst.png";
import LeedsLogo from "./assets/institutes/smallLeeds.png";
import Darth from "./assets/institutes/DarthInst.png";
import DarthLogo from "./assets/institutes/smallDarth.png";
import Illinois2 from "./assets/institutes/Illinois2Inst.png";
import Illinois2Logo from "./assets/institutes/smallIllinois.png";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const updateCont = (e) => {
    let temp = Number(e.target.attributes.id.value);
    setIndex(temp);
    document.getElementById(temp).classList.toggle("text-blue-700");
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
      title: "Bokkeeper",
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
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center container m-auto py-8 px-4">
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
      <div className="container m-auto flex flex-col gap-6 py-6 px-4">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-6">
          <h1 className="font-bold text-4xl tracking-wide inline">
            Launch a new career in as little as 6 months
          </h1>
          <a href="#">View all roles</a>
        </div>
        <ul className="flex items-center justify-between border-b-4 py-4 overflow-scroll gap-4">
          {content.map((course, courseIndex) => (
            <li
              className="min-w-fit cursor-pointer"
              id={courseIndex}
              key={courseIndex}
              onClick={updateCont}
            >
              {course.title}
            </li>
          ))}
        </ul>
        <CareerModal info={content[index]} />
      </div>
      <div>
        {programs.map((prog, progIndex) => (
          <div className="py-6" key={progIndex}>
            <DegPrgm prog={prog} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
