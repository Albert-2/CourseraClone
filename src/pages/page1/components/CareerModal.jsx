import React from "react";
import ProfCertf from "./ProfCertf";

const CareerModal = (props) => {
  return (
    <div className="gap-6 flex xl:items-start items-center flex-wrap justify-center flex-col sm:py-10 sm:px-16 sm:border-2 sm:rounded-md  w-full">
      <div className=" w-full">
        <h1 className="font-bold text-3xl leading-relaxed">
          {props.info.title}
        </h1>
        <p>{props.info.subTitle}</p>
      </div>
      <div className=" flex items-stretch justify-center 2xl:flex-row flex-col container gap-4 ">
        <div className="flex flex-col items-start justify-start flex-1  gap-6">
          <div className=" w-full flex items-stretch gap-2 flex-col py-4 h-fit">
            <h1 className="font-bold text-xl">Median Salary</h1>
            <div className=" flex items-center gap-4">
              <div className=" bg-gray-200 p-1 rounded-md inline-block w-2/4 sm:text-base text-sm">
                All occupations
              </div>
              <p>$37,960*</p>
            </div>
            <div className=" flex items-center gap-4 ">
              <div className=" bg-blue-700 p-1 rounded-md inline-block w-3/4 text-white sm:text-base text-sm">
                All occupations
              </div>
              <p>$37,960*</p>
            </div>
          </div>
          <div className=" flex flex-col items-stretch gap-2 w-full">
            <p>Job openings: 336,402**</p>
            <p>Projected 10 year growth: +11.1%***</p>
          </div>
          <div className=" 2xl:flex hidden items-center justify-center md:flex-row flex-col md:text-left text-center gap-4 py-6 lg:border-b-0 border-b-2 ">
            <img
              src={props.info.userIcon}
              alt="feedback"
              className="max-w-[85px] rounded-full"
            />
            <div>
              <p className="text-ellipsis">{props.info.feedback}</p>
              <p>– {props.info.userName}</p>
            </div>
          </div>
        </div>
        <div className=" 2xl:w-3/5 w-full items-start flex flex-col gap-2 ">
          <h1 className="font-bold text-xl  w-full">
            Recommended Professional Certificates
          </h1>
          <div className="flexStyle md:flex-row flex-col gap-4">
            {props.info.courses.map((course, courseIndex) => (
              <ProfCertf course={course} key={courseIndex} />
            ))}
          </div>
        </div>
      </div>
      <div className=" 2xl:hidden flexStyle md:flex-row flex-col md:text-left text-center gap-4 py-6 ">
        <img
          src={props.info.userIcon}
          alt="feedback"
          className="max-w-[85px] rounded-full"
        />
        <div>
          <p className="text-ellipsis">{props.info.feedback}</p>
          <p>– {props.info.userName}</p>
        </div>
      </div>
      <div className=" text-sm flex flex-col w-full px-2 pt-10 border-t-2 break-words">
        <p>
          * Employment, Wages, and Projected Change in Employment by Typical
          Entry-level Education : U.S. Bureau of Labor Statistics. Sept. 2022,
          www.bls.gov/emp/tables/education-summary.htm
        </p>
        <p>
          ** Median salary and job opening data are sourced from United States
          Lightcast™ Job Postings Report. Data for job roles relevant to
          featured programs (7/1/2022 - 6/30/2023)
        </p>
        <p>
          *** Growth rate data is sourced from United States Lightcast™ Job
          Postings Report. Data for job roles relevant to featured programs
          (7/1/2022 - 6/30/2023)
        </p>
      </div>
    </div>
  );
};

export default CareerModal;
