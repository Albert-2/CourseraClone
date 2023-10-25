import React from "react";

const Prgms = (props) => {
  return (
    <div className="flex items-start justify-center flex-col rounded-lg cursor-pointer border-2 sm:hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden sm:min-w-[275px] min-w-full h-[400px] bg-white">
      <img
        src={props.detail.img}
        alt="image"
        className="w-full flex-1"
      />
      <div className="p-2 flex flex-col items-start justify-between space-y-2 w-fit flex-1">
        <div className="flex items-center ">
          {props.detail.logo ? (
            <img src={props.detail.logo} alt="icons" />
          ) : (
            <p className="font-bold">{props.detail.academy}</p>
          )}
          <p className="text-sm ml-2">{props.detail.instit}</p>
        </div>
        {props.detail.courseName ? (
          <h1 className="font-bold text-xl">{props.detail.courseName}</h1>
        ) : (
          <p>{props.detail.courseDet}</p>
        )}
        {props.detail.degreeIcon ? (
          <p className="text-blue-700 text-sm">
            <i
              className="fa-solid fa-graduation-cap mr-2"
              style={{ color: "black" }}
            ></i>
            Earn a degree
          </p>
        ) : (
          <p>
            <span className="font-bold">{props.detail.rating}</span>(
            {props.detail.reviews}k course reviews)
          </p>
        )}
        {props.detail.Degree ? (
          <h1 className="text-sm">{props.detail.Degree}</h1>
        ) : (
          <button className="text-blue-700 underline w-fit">Learn more</button>
        )}
      </div>
    </div>
  );
};

export default Prgms;

// <div className="flex items-start justify-center flex-col rounded-lg cursor-pointer border-2 sm:hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden sm:min-w-[275px] min-w-full h-[400px]">
//               <img src={Demo} alt="image" className="w-full h-[50%] flex-1" />
//               <div className="p-2 flex flex-col space-y-2 w-fit bg-white items-start justify-center text-sm">
//                 <div className="flex items-center ">
//                   {/* {props.detail.logo && (
//                     <img src={props.detail.logo} alt="icons" />
//                   )} */}
//                   <p className="font-bold">Leadership Academy</p>
//                 </div>
//                 {/* {props.detail.courseName ? ( */}
//                 {false ? (
//                   <h1 className="font-bold text-xl">
//                     {props.detail.courseName}
//                   </h1>
//                 ) : (
//                   <p>
//                     Develop employees with the skills to collaborate,
//                     communicate, and lead teams.
//                   </p>
//                 )}
//                 {false ? (
//                   <p className="text-blue-700 ">
//                     <i
//                       className="fa-solid fa-graduation-cap mr-2"
//                       style={{ color: "black" }}
//                     ></i>
//                     Earn a degree
//                   </p>
//                 ) : (
//                   <p>
//                     <span className="font-bold">4.74</span>(692k course reviews)
//                   </p>
//                 )}
//                 {false ? (
//                   <h1 className="">{props.detail.Degree}</h1>
//                 ) : (
//                   <button className="text-blue-700 underline ">
//                     Learn more
//                   </button>
//                 )}
//               </div>
//             </div>
