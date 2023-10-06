import React from "react";

const Footer = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="container m-auto flex items-stretch justify-center flex-col lg:px-40 px-8 space-y-20">
        {props.data.map((data1, data1Index) => (
          <div className="flex md:flex-row flex-col items-stretch justify-center gap-8">
            {data1.map((info, infoIndex) => (
              <div className="flex flex-1 flex-col ">
                <ul className="flex flex-col items-start justify-start space-y-2 ">
                  {info.map((item, itemIndex) => (
                    <li
                      className={
                        itemIndex == 0
                          ? "text-lg font-bold"
                          : "text-sm hover:underline"
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
