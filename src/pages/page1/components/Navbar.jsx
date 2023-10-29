import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="sticky top-0 bg-white py-2 text-sm">
      <div className="lg:block hidden">
        <div className="flex items-center justify-between py-2 px-6">
          <div className="flex items-center justify-between space-x-3">
            <img src={logo} alt="logo" className="w-[150px] cursor-pointer" />
            <button className="text-white bg-blue-700 font-semibold rounded-md py-2 px-4 ">
              Explore
            </button>
            <form
              action="/"
              method="post"
              className=" rounded-md flex items-stretch justify-center overflow-hidden"
            >
              <input
                placeholder="What do you want to learn?"
                className=" p-2 text-sm flex-1 outline-none border-none"
              />
              <button type="submit" className="p-3 bg-blue-700">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(-293.000000, -23.000000)"
                  >
                    <g fill="#E1E1E1">
                      <g transform="translate(293.000000, 22.000000)">
                        <path d="M11.355485,11.4503883 L16.0066609,16.1015642 L15.1015642,17.0066609 L10.4503883,12.355485 C9.34711116,13.2583262 7.93681293,13.8 6.4,13.8 C2.8653776,13.8 0,10.9346224 0,7.4 C0,3.8653776 2.8653776,1 6.4,1 C9.9346224,1 12.8,3.8653776 12.8,7.4 C12.8,8.93681293 12.2583262,10.3471112 11.355485,11.4503883 Z M6.4,12.52 C9.22769792,12.52 11.52,10.2276979 11.52,7.4 C11.52,4.57230208 9.22769792,2.28 6.4,2.28 C3.57230208,2.28 1.28,4.57230208 1.28,7.4 C1.28,10.2276979 3.57230208,12.52 6.4,12.52 Z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </form>
          </div>
          <div className="flex items-center justify-between space-x-6">
            <p>Online Degrees</p>
            <p>Find Your New Career</p>
            <p className="text-blue-700">Log In</p>
            <button className="text-white bg-blue-700 rounded-md py-2 px-4 font-semibold">
              Join for Free
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden block relative">
        <div className="flex items-center justify-between py-6 px-4 z-10">
          <button onClick={() => setHidden(!hidden)}>
            {hidden ? (
              <i className="fa-solid fa-multiply fa-2xl cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-bars fa-2xl cursor-pointer"></i>
            )}
          </button>
          <img src={logo} alt="logo" className="max-w-[150px]" />
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </div>
        {hidden && (
          <div className="absolute top-full bg-white z-10 w-full flex items-stretch justify-center flex-col">
            <ul className="overflow-scroll h-[75vh]  ">
              <ul className="border-b-2 p-4 flex  items-start flex-col justify-center space-y-6">
                <li>
                  <Link to="/">For Individuals</Link>
                </li>
                <li>
                  <Link to="/page2">For Business</Link>
                </li>
                <li>
                  <Link to="/page3">For Universities</Link>
                </li>
                <li>
                  <Link to="/page4">For Goverments</Link>
                </li>
              </ul>
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li className="font-bold ">Goals</li>
                <li>Take a free course</li>
                <li>Earn a Degree</li>
                <li>Earn a Certificate</li>
              </ul>
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li className="font-bold">Subjects</li>
                <li>Data Science</li>
                <li>Business</li>
                <li>Computer Science</li>
                <li>Information Technology</li>
                <li>Language Learning</li>
                <li>Health</li>
                <li>Personal Development</li>
                <li>Physical Science and Engineering</li>
                <li>Social Sciences</li>
                <li>Arts and Humanities</li>
                <li>Math and Logic</li>
              </ul>
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li>Browse all subjects</li>
              </ul>
            </ul>
            <ul className="flex flex-col justify-center px-4  sm:space-y-4 space-y-2 flex-1">
              <button className="flex-1 sm:p-4 p-3 text-white bg-blue-700 font-semibold">
                Join for free
              </button>
              <button className="flex-1 sm:p-4 p-3 border-2 border-blue-700 text-blue-700 font-semibold">
                Log In
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
