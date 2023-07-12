import React, { useEffect, useState } from "react";
import { Text, Grid, MediaQuery } from "@mantine/core";
import DisplayData from "../utils/DisplayData";
import { useMediaQuery } from "@mantine/hooks";

const Services = () => {
  const [services, setServices] = useState([]);
  const displayServices = async () => {
    const listServices = await DisplayData("services");
    setServices(listServices);
  };
  const largeScreen = useMediaQuery("(min-width:1024px)");
  const smallScreen = useMediaQuery("(min-width:630px)");
  useEffect(() => {
    displayServices();
  }, []);
  return (
    <section className="bg-light_gray py-3 w-[100%] m-auto">
      <div className="p-12 bg-light_gray mx-auto">
        <Text className="h-9 font-sans font-bold lg:text-3xl text-2xl leading-9 tracking-wider text-dark text-center">
          Services
        </Text>
        <Text className="font-sans font-normal sm:text-lg text-sm text-center tracking-wider text-dark_gray self-stretch">
          We're here to enable you in developing, designing, launching, and
          continously improving and optimizing your systems, brands, ventures,
          and goods.
        </Text>
      </div>

      <div className="mx-auto  lg:w-[100%] overflow-hidden">
        <Grid className="mt-6 bg-light_gray flex justify-around items-center gap-1 mb-20">
          {services.map((service) => (
            <Grid.Col
              span={largeScreen ? 3 : smallScreen ? 4 : 6}
              className="flex flex-col items-end sm:p-3 gap-10 h-[12rem] sm:h-[17.5rem] mb-1 sm:mb-10"
              key={service.id}
            >
              <div className="items-start gap-3 h-28 z-2 sm:w-72 w-44">
                <div className="service__images absolute w-28 h-20 top-30">
                  <img
                    src={service.image}
                    alt="icon"
                    className="w-8 lg:w-14 absolute left-[4.33%] right-[8.33%] top-[35%] bottom-[25%]"
                  ></img>
                </div>
                <div className="sm:mt-[140px] m-3 mt-24">
                  <Text className="service__headingtitle font-sans font-bold text-sm sm:text-lg leading-6 tracking-wider sm:text-left text-dark_gray sm:mb-3">
                    {service.headingtitle}
                  </Text>
                  <Text className="service__text font-sans font-normal text-xs sm:text-lg leading-1 sm:text-left text-dark_gray order-1 self-stretch flex-grow-0">
                    {service.text}
                  </Text>
                </div>
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services;
