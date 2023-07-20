import React from "react";
import { Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Companies = (props) => {
  const { company, startup } = props;
  return (
    <div className="bg-light_yellow sm:dynamic_x_padding ">
      <div>
        <Text
          className="flex flex-col items-center gap-2 font-sans font-bold text-xl sm:text-3xl text-black p-12  pb-8"
          id="startup"
        >
          Companies that trusted us
        </Text>
        <div className="grid grid-cols-12 items-start justify-between gap-5 sm:gap-12 md:px-16 mx-auto ">
          {company.map((data) => (
            <div
              key={data.id}
              className="flex col-span-12 py-4 md:py-0 md:col-span-4 sm:col-span-6 justify-center "
            >
              <Link to={data.url} target="_blank">
                <img
                  src={data.image}
                  alt="Partners"
                  className="flex justify-center object-contain"
                  onClick={console.log(data.url)}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-10">
        <Text className="flex flex-col items-center gap-2 font-sans font-bold text-2xl sm:text-3xl text-black pt-28 pb-8 ">
          Startup Partners
        </Text>
        <div className="grid grid-cols-12 items-start justify-between sm:gap-10 px-10 md:px-16 mx-auto ">
          {startup.map((data) => (
            <div
              key={data.id}
              className="flex col-span-12 md:col-span-3 sm:col-span-6 justify-center "
            >
              <Link to={data.url} target="_blank">
                <img
                  src={data.image}
                  alt="Partners"
                  className="flex justify-center my-4  max-w-xs max-h-20 sm:w-40 md:w-60 object-contain"
                  onClick={console.log(data.url)}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
