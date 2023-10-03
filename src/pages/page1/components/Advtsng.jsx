import React from "react";
import Illinois from "../assets/illinois.png";
import Google from "../assets/google.png";
import IBM from "../assets/IBM.png";
import Imperial from "../assets/imperial.png";
import Penn from "../assets/penn.png";
import Umich from "../assets/umich.png";
import Duke from "../assets/duke.png";
import Stanford from "../assets/stanford.png";

const Advtsng = () => {
  return (
    <div className="text-center bg-[#f3f3f3] py-20 space-y-8">
      <h2 className="font-bold text-xl">
        We collaborate with{" "}
        <span className="text-blue-700">
          300+ leading universities and companies
        </span>
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Illinois}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Google}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={IBM}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Imperial}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Penn}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Umich}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Duke}
            alt="Colleges"
          />
        </a>
        <a href="#">
          <img
            className=" sm:max-w-[100px] max-w-[75px]"
            src={Stanford}
            alt="Colleges"
          />
        </a>
      </div>
    </div>
  );
};

export default Advtsng;
