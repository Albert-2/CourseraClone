import React from "react";
import MainImg from "../page2/assets/HomepageImg.jpg";
import companyLogo1 from "../page1/assets/companyLogos/Comp1.png";
import companyLogo2 from "../page1/assets/companyLogos/Comp2.png";
import companyLogo3 from "../page1/assets/companyLogos/Comp3.png";
import companyLogo4 from "../page1/assets/companyLogos/Comp4.png";
import companyLogo5 from "../page1/assets/companyLogos/Comp5.png";
import companyLogo6 from "../page1/assets/companyLogos/Comp6.png";
import companyLogo7 from "../page1/assets/companyLogos/Comp7.png";
import companyLogo8 from "../page1/assets/companyLogos/Comp8.png";
import companyLogo9 from "../page1/assets/companyLogos/Comp9.png";

const BusinsCard = (props) => {
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
  return (
    <>
      <div className="container m-auto flex sm:flex-row flex-col-reverse items-center justify-center border-2 border-black z-10 py-20 gap-10">
        <div className="flex items-center justify-center flex-wrap text-center flex-1 gap-6 py-6 border-2 border-black">
          {company.map((logo, logoIndex) => (
            <div className="w-3/12">
              <img
                src={logo}
                alt="logo"
                key={logoIndex}
                className="m-auto object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center flex-1 border-2 border-black px-4">
          <h1 className="font-semibold md:text-5xl text-3xl">
            Leaders at 3,800+ companies develop their talent with Coursera
          </h1>
        </div>
      </div>
    </>
  );
};

export default BusinsCard;
