import React, { useState } from "react";

const GlobNavbar = (props) => {
  const [hidden, setHidden] = useState(false);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="border-b-2 relative">
        <div className="px-4 container m-auto flex items-center lg:justify-center justify-between gap-10 py-6 sticky top-0  z-20">
          <img src={props.info.logo} alt="icon" className="sm:w-64 w-44 h-6  " />
          <div className=" lg:flex flex-1 items-center justify-start hidden">
            <ul className="flex items-center justify-start  flex-1 gap-6 text-sm">
              {props.info.navLinks.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
            <button className=" rounded-md bg-blue-700 text-sm text-white font-semibold px-4 py-2">
              {props.info.button}
            </button>
          </div>
          <button onClick={handleClick} className=" lg:hidden block">
            {hidden ? (
              <i className="fa-solid fa-multiply fa-2xl cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-bars fa-2xl cursor-pointer"></i>
            )}
          </button>
        </div>
        {hidden && (
          <ul className="flex flex-col items-start justify-center space-y-8 p-4 pb-10 absolute top-full bg-white w-full text-xl">
            {props.info.navLinks.map((link, linkIndex) =>
              linkIndex != props.info.navLinks.length - 1 ? (
                <li key={linkIndex}>{link}</li>
              ) : (
                <button className="bg-blue-700 text-sm text-white rounded-md py-2 px-4">
                  Contact Sales
                </button>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GlobNavbar;
