import React, { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { useParams } from "react-router";
// import Navbar from "../component/Navbar";
import { getIndividualData } from "../utils/UpdateData";
import Loading from "../component/loading/Loading";
import { Footer } from "../component/Footer";
import Navbar from "../component/Navbar";

const Career = () => {
  const { id } = useParams();
  const { loading, setLoading } = useState(true);

  const [career, setCareer] = useState({});
  const fetchData = async () => {
    const careerDetail = await getIndividualData(id, "career");
    setCareer(careerDetail);
    setLoading(false);
  };

  useEffect(() => {
    let unsubscribe;
    unsubscribe = fetchData().then((r) => r);
    return () => {
      unsubscribe = [];
    };
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <main className="py-24 px-6 md:py-24 md:px-12 lg:px-96 lg:py-24 items-center bg-light_yellow">
          <Text className="text-center font-bold text-xl text-yellow mb-14">
            {career.jobTitle}
          </Text>
          <div className="  flex flex-col ">
            <Text className="mb-8">{career.date}</Text>
            <p className=" text-justify items-center font-normal mb-8 tracking-widest leading-7">
              {career.description}
            </p>
            <Text className="flex items-center gap-1">
              <BiTimeFive />
              {career.jobType}
            </Text>
            <Text className="flex items-center gap-1">
              <GrLocation />
              {career.location}
            </Text>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Career;
