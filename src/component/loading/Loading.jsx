import LOGO from "../../assets/images/Logo.png";
import React from "react";
import { LoadingOverlay } from "@mantine/core";

const customLoader = (
  <>
    {" "}
    <div className="flex items-center justify-center h-30">
      <img src={LOGO} alt="Loading...." className="imgSpin" />{" "}
    </div>{" "}
  </>
);

const Loading = ({ overlayStatus = true }) => {
  return (
    <>
      {" "}
      <LoadingOverlay
        loader={customLoader}
        visible={overlayStatus}
        overlayBlur={8000}
      />{" "}
    </>
  );
};
export default Loading;
