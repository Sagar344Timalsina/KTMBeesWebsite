import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DisplayData from "../utils/DisplayData";

const Header = () => {
  const [display, setDisplay] = useState([]);
  const fetchData = async () => {
    const datas = await DisplayData("herosection");
    setDisplay(datas);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <header>
      {display.map((data) => (
        <div
          className="h-[10rem] sm:mb-4 flex  items-center sm:h-[55rem]  bg-contain bg-no-repeat"
          key={data.id}
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <section className="content my-auto sm:ml-80 ml-20">
            <span className="title">
              <h1 className="text-[14px] mb-1 sm:text-6xl font-bold sm:mb-4">
                {data.heading}
              </h1>
              <h6 className="mb-2 text-[9px] sm:mb-10 sm:text-2xl text-[#475569]">
                {data.subheading}
              </h6>
            </span>
            <Button
              color="dark"
              className="h-6 bg-black rounded-xl sm:rounded-full sm:h-16 sm:w-48 text-[12px] sm:text-base "
            >
              Get in touch
            </Button>
          </section>
        </div>
      ))}
    </header>
  );
};

export default Header;
