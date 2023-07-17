import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DisplayData from "../utils/DisplayData";
import topFrame from "../assets/images/topFrame.png";

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
      <img
        alt="Bess"
        src={topFrame}
        className="absolute right-0 top-0 z-0 hidden sm:w-3/5  md:block"
      />
      {display.map((data) => (
        <div
          className="flex h-[60vh] lg:h-screen bg-center bg-cover overflow-hidden "
          key={data?.id}
          // style={{ backgroundImage: `url(${data?.image})` }}
        >
          <section className="content mt-28 md:mt-44 mx-auto z-20">
            <span className="title">
              <h1 className="w-4/5  sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold sm:mb-4 mb-3">
                {data?.heading}
              </h1>
              <h6 className="mb-10 text-lg sm:text xl:text-2xl text-[#475569]">
                {data?.subheading}
              </h6>
            </span>
            <Button
              color="dark"
              className=" bg-black rounded-full h-10 sm:h-16 sm:w-48 text-sm sm:text-base w-32"
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
