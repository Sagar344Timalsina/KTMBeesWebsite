import React from "react";
import { Text } from "@mantine/core";

const Services = (props) => {
  const { services } = props;
  return (
    <section
      id="services"
      className="smallMobile bg-light_yellow p-10 sm:dynamic_x_padding "
    >
      <div className="">
        <Text className="h-9 font-sans font-bold lg:text-3xl text-2xl leading-9 tracking-wider text-dark text-center">
          Services
        </Text>
        <Text className="font-sans font-normal sm:text-lg text-sm text-center tracking-wider text-dark_gray self-stretch">
          We're here to enable you in developing, designing, launching, and
          continously improving and optimizing your systems, brands, ventures,
          and goods.
        </Text>
      </div>

      <div className="mx-auto lg:w-full overflow-hidden">
        <div className="mt-6 bg-light_yellow mb-20 grid grid-cols-12">
          {services.map((service) => (
            <div
              span={3}
              className=" flex flex-col item-center mx-auto sm:justify-start p-3 gap-10 sm:gap-10 h-[17.5rem] mb-6 col-span-12 md:col-span-4 sm:col-span-6"
              key={service.id}
            >
              <div className=" items-start gap-3 h-28 z-2 w-72">
                <div className="service__images absolute w-28 h-20 top-30 msm:left-[40%]">
                  <img
                    src={service.image}
                    alt="icon"
                    className="lg:w-14 absolute left-[4.33%] right-[8.33%] top-[35%] bottom-[25%]"
                  ></img>
                </div>
                <div className="mt-[140px] m-3 text-center sm:text-start">
                  <Text className="font-sans font-bold text-base leading-6 tracking-wider  text-dark_gray mb-3">
                    {service.headingtitle}
                  </Text>
                  <Text className=" font-sans font-normal text-lg leading-7 text-dark_gray order-1 self-stretch flex-grow-0">
                    {service.text}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
