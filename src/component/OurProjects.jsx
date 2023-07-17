import React, { useEffect, useState } from "react";
import { Accordion, Button, Tabs } from "@mantine/core";
import DisplayData from "../utils/DisplayData";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const displayProjects = async () => {
    const listProjects = await DisplayData("projects");
    setProjects(listProjects);
  };
  const [selectedValueAccordian, setSelectedValueAccordian] = useState("Tourism");
  const [selectedValueTab, setSelectedValueTab] = useState("Tourism");
  const filteredValues = projects.filter((project) => project.category == selectedValueAccordian);
  const filteredValuesTab = projects.filter((project) => project.category == selectedValueTab);
  const unique = [...new Map(projects.map((m) => [m.category, m])).values()];

  useEffect(() => {
    displayProjects();
  }, []);
  return (
    <div
      className="bg-light_yellow flex flex-col text-center py-6 sm:px-36"
      style={{ overflow: "hidden" }}
    >
      <section className="title sm:mb-8 sm:w-[45%] mx-auto ">
        <h1 className="sm:text-3xl font-sans font-[700] mb-2"> Our Projects</h1>
        <h6 className="text-[#475569] text-xs sm:text-xl ">
          Global clients rely on our team of committed developers to deliver
          high-quality, sector-specific web and mobile solutions.
        </h6>
      </section>
      <section className="my-5 display__accordian">
        <Accordion radius="md" defaultValue="Tourism" className='w-full ' onChange={(e) => setSelectedValueAccordian(e)}>
          {unique.map((tabValue) => (
            <Accordion.Item value={tabValue.category}>
              <Accordion.Control>{tabValue.category}</Accordion.Control>
              <Accordion.Panel>
                <Carousel maw={320} mx="auto" withIndicators height={350}>
                  {filteredValues.map((filterData) => (
                    <Carousel.Slide>
                      {/* <img src={filterData.largeImage} alt="Projects" className="absolute" /> */}
                      <Link to={filterData.url} target='_blank'><img src={filterData.smallImage} alt="Projects" className="w-full object-contain absolute " /></Link>
                      <div div className="site__button flex justify-between items-center w-40 mb-4 sm:w-80 mt-72 ml-5 " >
                        <Button
                          color="dark"
                          className="z-10 text-xs w-24 h-6 bg-black rounded-xl sm:rounded-full sm:h-16 sm:w-48 text-[12px] sm:text-base relative"
                        >
                          <Link to={filterData.url} target="_blank">
                            Go to site
                          </Link>
                        </Button>
                        <button className="bg-[transparent] font-[600] sm:text-xl text-[10px] text-[#475569] tracking-[0.75px] z-50">
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
      <section className="display__tabs hidden m-auto">
        <Tabs
          defaultValue={selectedValueTab}
          color="yellow"
          onTabChange={(e) => setSelectedValueTab(e)}
          styles={(theme) => ({
            tab: { "&[data-active]": { color: "#F0B62F" } },
          })}
        >
          <Tabs.List className="mt-12 justify-between w-fit mx-auto font-bold sm:p-5">
            {unique.map((tab) => (
              <Tabs.Tab
                value={tab.category}
                className="text-xs -mr-4 flex sm:mr-11 h-6 font-sans p-5 sm:text-xl leading-6"
              >
                {tab.category}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <Tabs.Panel value={selectedValueTab} pt="xs" className="">
            <Carousel mx="auto" withIndicators height={600}>
              {filteredValuesTab.map((filterData) => (
                <Carousel.Slide>
                  <img
                    src={filterData.largeImage}
                    alt="Projects"
                    className="w-full object-contain absolute"
                  />
                  <div className="site__button flex justify-between items-center w-40 mt-96 ml-12 sm:w-80 ">
                    <Button
                      color="dark"
                      className="z-10 text-xs w-24 h-6 bg-black rounded-xl sm:rounded-full sm:h-16 sm:w-48 text-[12px] sm:text-base relative "
                    >
                      <Link to={filterData.url} target="_blank">
                        Go to site
                      </Link>
                    </Button>
                    <button className="bg-[transparent] font-[600] sm:text-xl text-[10px] text-[#475569] tracking-[0.75px] z-50">
                      Read Case Study
                    </button>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Tabs.Panel>
        </Tabs>
      </section>
    </div>
  );
};

export default OurProjects;
