import React from "react";
import Bee from "../assets/images/Bee.png";
import GetInTouch from "../component/Buttons/GetInTouch";

const ReadyCreate = () => {
  return (
    <main className="h-36 bg-light_yellow_1 sm:h-56 flex  items-center relative overflow-hidden">
      <img
        className="w-52 absolute -left-20 sm:-top-16 sm:w-96 lg:w-[36rem] sm:-left-48 lg:-top-36"
        src={Bee}
        alt="BeeImage"
      />
      <section className=" w-full flex justify-around  sm:px-16 items-center">
        <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold  leading-relaxed tracking-wide w-1/3 text-button_gray  z-10 ">
          Ready to create & collaborate
        </h1>
        <GetInTouch />
      </section>
    </main>
  );
};

export default ReadyCreate;
