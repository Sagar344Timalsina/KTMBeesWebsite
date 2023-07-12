import React, { useEffect, useState } from "react";
import { Text, Grid } from "@mantine/core";
import DisplayData from "../utils/DisplayData";
import { Link } from "react-router-dom";

const Companies = () => {
  const [company, setCompany] = useState([]);
  const displayCompany = async () => {
    const listCompanies = await DisplayData("companies");
    setCompany(listCompanies);
  };
  const [startup, setStartup] = useState([]);
  const displayStartup = async () => {
    const listStartup = await DisplayData("startup");
    setStartup(listStartup);
  };
  useEffect(() => {
    displayCompany();
    displayStartup();
  }, []);

  return (
    <div className="bg-light_yellow sm:dynamic_x_padding">
      <div>
        <Text className="flex flex-col items-center gap-2 font-sans font-bold text-2xl sm:text-3xl text-black p-12 ">
          Companies that trusted us
        </Text>
        <div className="grid grid-cols-12 items-start justify-between gap-5 sm:gap-16 md:px-16 mx-auto">
          {company.map((data) => (
            <div
              key={data.id}
              className="flex col-span-12 md:col-span-4 sm:col-span-6 justify-center "
            >
              <Link to={data.url} target="_blank">
                <img
                  src={data.image}
                  alt="Partners"
                  className="flex justify-center max-w-xs max-h-20 sm:w-40 md:w-60"
                  onClick={console.log(data.url)}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Text className="flex flex-col items-center gap-2 font-sans font-bold text-2xl sm:text-3xl text-black p-12 ">
          Startup Partners
        </Text>
        <div className="grid grid-cols-12 items-start justify-between sm:gap-16 px-10 md:px-16 mx-auto ">
          {startup.map((data) => (
            <div
              key={data.id}
              className="flex col-span-12 md:col-span-4 sm:col-span-6 justify-center "
            >
              <Link to={data.url} target="_blank">
                <img
                  src={data.image}
                  alt="Partners"
                  className="flex justify-center my-4  max-w-xs max-h-20 sm:w-40 md:w-60"
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
