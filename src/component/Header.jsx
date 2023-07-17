import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DisplayData from "../utils/DisplayData";
import GetInTouch from "./Buttons/GetInTouch";

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
          className="flex h-screen bg-center bg-cover overflow-hidden"
          key={data.id}
        // style={{ backgroundImage: `url(${data.image})` }}
        >
          <section className="content mt-44 mx-auto z-20">
            <span className="title">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                {data.heading}
              </h1>
              <h6 className="mb-10 text-xl sm:text-2xl text-[#475569]">
                {data.subheading}
              </h6>
            </span>
            <GetInTouch />
          </section>
        </div>
      ))}
    </header>
  );
};

export default Header;
