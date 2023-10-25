import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div className="sticky top-0 bg-white py-2">
      <div className="lg:block hidden">
        <div className="flex items-center justify-between py-2 px-6">
          <div className="flex items-center justify-between space-x-3">
            <img src={logo} alt="logo" className="w-[150px]" />
            <button className="text-white bg-blue-700 font-semibold rounded-md py-2 px-4 ">
              Explore
            </button>
            <input
              placeholder="What do you want to learn?"
              className="rounded-md p-2 text-sm flex-1"
            />
          </div>
          <div className="flex items-center justify-between space-x-8">
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
          <button onClick={handleClick}>
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
          <div className="absolute top-full bg-white z-10 w-full">
            <ul className="overflow-scroll h-[80vh]">
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li>For Business</li>
                <li>For Business</li>
                <li>For Business</li>
                <li>For Business</li>
                <li>For Business</li>
              </ul>
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li className="font-bold">Goals</li>
                <li>Take a free course</li>
                <li>Take a free course</li>
                <li>Take a free course</li>
              </ul>
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li className="font-bold">Subjects</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
                <li>Data Science</li>
              </ul>
              <ul className="border-b-2 p-4 flex items-start flex-col justify-center space-y-6">
                <li>Browse all subjects</li>
              </ul>
            </ul>
            <ul className="flex flex-col justify-center p-4 space-y-2">
              <button className="flex-1 p-4 text-white bg-blue-700 font-semibold">
                Join for free
              </button>
              <button className="flex-1 p-4 border-2 border-blue-700 text-blue-700 font-semibold">
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
