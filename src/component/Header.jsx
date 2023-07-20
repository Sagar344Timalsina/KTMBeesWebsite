import React from "react";
import GetInTouch from "./Buttons/GetInTouch";
import topFrame from "../assets/images/topFrame.png";
const Header = (props) => {
  const { display } = props;

  return (
    <>
      <header className="home">
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
              <GetInTouch />
            </section>
          </div>
        ))}
      </header>
    </>
  );
};

export default Header;
