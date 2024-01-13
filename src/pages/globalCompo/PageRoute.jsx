import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageRoute = () => {
  let location = useLocation();
  const isLinkActive = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      <div className="bg-black border-2 border-white  items-center justify-stretch space-x-4 lg:flex hidden px-4">
        <Link
          to="/"
          className={`linkStyle ${
            isLinkActive("/") ? "border-b-4 border-white" : ""
          }`}
        >
          For Individuals
        </Link>
        <Link
          to="/page2"
          className={`linkStyle ${
            isLinkActive("/page2") ? "border-b-4 border-white" : ""
          }`}
        >
          For Businesses
        </Link>
        <Link
          to="/page3"
          className={`linkStyle ${
            isLinkActive("/page3") ? "border-b-4 border-white" : ""
          }`}
        >
          For Universities
        </Link>
        <Link
          to="/page4"
          className={`linkStyle ${
            isLinkActive("/page4") ? "border-b-4 border-white" : ""
          }`}
        >
          For Governments
        </Link>
      </div>
    </>
  );
};

export default PageRoute;
