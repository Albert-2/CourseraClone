import React from "react";
import Illinois from "../assets/illinois.png";
import Google from "../assets/google.png";
import IBM from "../assets/IBM.png";
import Imperial from "../assets/imperial.png";
import Penn from "../assets/penn.png";
import Umich from "../assets/umich.png";
import Duke from "../assets/duke.png";
import Stanford from "../assets/stanford.png";
import { Link } from "react-router-dom";

const Advtsng = () => {
  return (
    <div className="text-center bg-[#f3f3f3] py-20 space-y-8">
      <h2 className="font-bold text-2xl tracking-wide">
        We collaborate with{" "}
        <span className="text-blue-700">
          300+ leading universities and companies
        </span>
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <Link to="https://www.iit.edu/" target="_blank">
          <img className="imgStyle" src={Illinois} alt="Colleges" />
        </Link>
        <Link to="https://about.google/intl/ALL_in/" target="_blank">
          <img className="imgStyle" src={Google} alt="Colleges" />
        </Link>
        <Link to="https://www.ibm.com/training/" target="_blank">
          <img className="imgStyle" src={IBM} alt="Colleges" />
        </Link>
        <Link to="https://www.imperial.ac.uk/" target="_blank">
          <img className="imgStyle" src={Imperial} alt="Colleges" />
        </Link>
        <Link to="https://www.upenn.edu/" target="_blank">
          <img className="imgStyle" src={Penn} alt="Colleges" />
        </Link>
        <Link to="https://umich.edu/" target="_blank">
          <img className="imgStyle" src={Umich} alt="Colleges" />
        </Link>
        <Link to="https://duke.edu/" target="_blank">
          <img className="imgStyle" src={Duke} alt="Colleges" />
        </Link>
        <Link to="https://www.stanford.edu/" target="_blank">
          <img className="imgStyle" src={Stanford} alt="Colleges" />
        </Link>
      </div>
    </div>
  );
};

export default Advtsng;
