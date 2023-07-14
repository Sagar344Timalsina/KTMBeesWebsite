import React from "react";
import FeedBackground from "../assets/images/backgroundFeedBack.png";
const Feedback = () => {
  return (
    <main>
      {/* <div className="h-screen">Hello</div> */}
      <div
        className="lg:h-screen h-auto bg-contain"
        style={{ backgroundImage: `url${FeedBackground}` }}
      ></div>
    </main>
  );
};

export default Feedback;
