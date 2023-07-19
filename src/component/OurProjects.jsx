import React, { useEffect, useState } from "react";
import { Accordion, Button, MediaQuery, Tabs } from "@mantine/core";
import DisplayData from "../utils/DisplayData";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const OurProjects = (props) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const { projects } = props;
  const [selectedValueAccordian, setSelectedValueAccordian] =
    useState("Tourism");
  const [selectedValueTab, setSelectedValueTab] = useState("Tourism");
  const filteredValues = projects.filter(
    (project) => project.category == selectedValueAccordian
  );
  const filteredValuesTab = projects.filter(
    (project) => project.category == selectedValueTab
  );
  const unique = [...new Map(projects.map((m) => [m.category, m])).values()];
  return (
    <div
      className="h-auto bg-light_yellow flex flex-col text-center py-6 md:px-11 lg:px-36"

    >
      <section className="title sm:mb-8 sm:w-2/4 mx-auto ">
        <h1 className="sm:text-3xl font-sans font-[700] mb-2"> Our Projects</h1>
        <h6 className="text-[#475569] text-xs sm:text-xl ">
          Global clients rely on our team of committed developers to deliver
          high-quality, sector-specific web and mobile solutions.
        </h6>
      </section>
      <section className="my-5 display__accordian">
        <Accordion
          radius="md"
          defaultValue="Tourism"
          className="w-full "
          onChange={(e) => setSelectedValueAccordian(e)}
        >
          {unique.map((tabValue) => (
            <Accordion.Item value={tabValue.category}>
              <Accordion.Control>{tabValue.category}</Accordion.Control>
              <Accordion.Panel>
                <Carousel maw={320} mx="auto" withIndicators height={350}>
                  {filteredValues.map((filterData) => (
                    <Carousel.Slide>
                      {/* <img src={filterData.largeImage} alt="Projects" className="absolute" /> */}
                      <Link to={filterData.url} target="_blank">
                        <img
                          src={filterData.smallImage}
                          alt="Projects"
                          className="w-full object-contain absolute "
                        />
                      </Link>
                      <div
                        div
                        className="site__button flex gap-3 items-center w-full mb-4 sm:w-80 mt-72 ml-5 "
                      >
                        <Button
                          color="dark"
                          className="z-10 text-xs w-24 h-10 bg-black rounded-full relative"
                        >
                          <Link to={filterData.url} target="_blank">
                            Go to site
                          </Link>
                        </Button>
                        <button className="bg-[transparent] font-semibold text-xs text-[#475569] tracking-[0.75px] z-50">
                          Read Case Study
                        </button>
                      </div>
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
      <section className="display__tabs h-auto hidden">
        <Tabs
          defaultValue={selectedValueTab}
          color="yellow"
          className="h-auto"
          onTabChange={(e) => setSelectedValueTab(e)}
          styles={(theme) => ({
            tab: { "&[data-active]": { color: "#F0B62F" } },
          })}
        >
          <Tabs.List className="mt-12 justify-between lg:w-full md:w-fit sm:mx-auto font-bold sm:p-5">
            {unique.map((tab) => (
              <Tabs.Tab
                value={tab.category}
                className="sm:text-sm lg:text-xl lg:mx-auto lg:-mr-4 flex h-6 font-sans p-3 leading-6"
              >
                {tab.category}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <Tabs.Panel value={selectedValueTab} pt="xs" className="">
            <Carousel mx={50} withIndicators className="h-auto">
              {filteredValuesTab.map((filterData) => (
                <Carousel.Slide>
                  <div className="flex justify-end flex-col">

                    <img
                      src={filterData.largeImage}
                      alt="Projects"
                      className="w-full object-cover "
                    />
                    <div className="absolute mb-8 lg:ml-8 w-96 flex justify-around">
                      <Button
                        color="dark"
                        className="z-10 text-xs w-24 h-6 md:w-28 md:h-10 bg-black rounded-xl sm:rounded-full lg:h-16 lg:w-48 text-[12px] sm:text-base relative "
                      >
                        <Link to={filterData.url} target="_blank">
                          Go to site
                        </Link>
                      </Button>
                      <button className="bg-[transparent] font-semibold sm:text-xl md:text-lg text-[#475569] tracking-[0.75px] z-50">
                        Read Case Study
                      </button>
                    </div>
                  </div>
                  {/* <div className="site__button flex md:gap-3 lg:justify-between items-center w-40 mt-96 ml-12 sm:w-80 md:mt-56 md:ml-7"> */}
                </Carousel.Slide>
              ))}
            </Carousel>
          </Tabs.Panel>
        </Tabs>
      </section>
    </div >
  );
};

export default OurProjects;
