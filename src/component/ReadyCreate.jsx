import React from "react";
import Bee from "../assets/images/Bee.png";
import GetInTouch from "../component/Buttons/GetInTouch";

const ReadyCreate = () => {
  return (
    <main className="h-36 bg-yellow sm:h-56 flex  items-center relative overflow-hidden">
      <img
        className="w-52 absolute -left-20 sm:w-[36rem] sm:-left-48 sm:-top-36"
        src={Bee}
        alt="BeeImage"
      />
      <section className=" w-full  flex justify-center ">
        <h1 className="text-base sm:text-5xl font-sans font-bold tracking-tight w-1/2 text-button_gray  z-10">
          Ready to create & collaborate
        </h1>
      </section>
      <section className=" w-2/4 flex justify-start">
        <GetInTouch />
      </section>
    </main>
  );
};

export default ReadyCreate;
