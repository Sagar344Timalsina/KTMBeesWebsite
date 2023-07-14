import React from "react";
import { Accordion, Button, Tabs } from "@mantine/core";
import DamiLogo from "../assets/images/dami pasal-logo 1.png";
import laptop from "../assets/images/laptop.png";
import figma from "../assets/images/figma.png";
import vue from "../assets/images/vue.png";
import aws from "../assets/images/awsLogo.png";
import TopPatch from "../assets/images/topo.png";
import BottomPatch from "../assets/images/bottom.png";

const OurProjects = () => {
  const TabName = [
    { id: 1, title: "E-commerce", value: "Ecommerce" },
    { id: 2, title: "Informative", value: "Informative" },
    { id: 3, title: "Pharmaceutical", value: "Pharmaceutical" },
    { id: 4, title: "Aviation", value: "Aviation" },
    { id: 5, title: "Toursim", value: "Toursim" },
    { id: 6, title: "Mobile", value: "Mobile" },
  ];
  return (
    <div
      className="bg-light_yellow flex flex-col text-center py-[50px] sm:dynamic_x_padding"
      style={{ overflow: "hidden" }}
    >
      <section className="title  sm:mt-2 sm:mb-8 sm:w-[45%] m-auto ">
        <h1 className="sm:text-3xl font-sans font-[700] mb-2"> Our Projects</h1>
        <h6 className="text-[#475569] text-xs sm:text-xl ">
          Global clients rely on our team of committed developers to deliver
          high-quality, sector-specific web and mobile solutions.
        </h6>
      </section>
      <section className="w-fit m-auto">
        <Accordion
          radius="md"
          defaultValue="E-commerce"
          className="display__accordian"
        >
          {TabName.map((tabValue) => (
            <Accordion.Item key={tabValue.id} value={tabValue.title}>
              <Accordion.Control>{tabValue.title}</Accordion.Control>
              <Accordion.Panel>
                {tabValue.value}
                <div className="flex relative bg-orange justify-between z-10 overflow-hidden">
                  <section className="content relative mt-4 ml-4 sm:ml-10 sm:mt-10 w-[38%]">
                    <img
                      src={DamiLogo}
                      alt="Dami"
                      className="mb-4 w-16 sm:w-32"
                    />
                    <hr className="w-10 mb-5 border-white border-2 sm:w-20 sm:mb-10" />
                    <article className="reuseable flex flex-col ">
                      <span className="text-xs mb-5 title sm:text-2xl font-bold sm:mb-10 text-left">
                        B2B E-commerce website dealing in Kitchen appliances
                      </span>
                      <span className="button flex justify-between mb-5 w-56 sm:w-96 sm:mb-10">
                        <Button
                          variant="filled"
                          color="light-gray"
                          rightIcon={
                            <img src={vue} alt="Vue" className="w-2 sm:w-7" />
                          }
                          className="w-[4.5rem] h-5 sm:h-10 text-[8px] sm:text-sm bg-[#cbd5e1] font-normal text-[#475569] sm:w-[7.2rem] rounded-3xl"
                        >
                          Vue.js
                        </Button>
                        <Button
                          variant="filled"
                          color="light-gray"
                          rightIcon={
                            <img src={aws} alt="AWS" className="w-2 sm:w-7" />
                          }
                          className="w-[4.5rem] h-5 sm:h-10  text-[8px] sm:text-sm bg-[#cbd5e1] font-normal text-[#475569] sm:w-[7.2rem] rounded-3xl"
                        >
                          Aws{" "}
                        </Button>
                        <Button
                          variant="filled"
                          color="light-gray"
                          rightIcon={
                            <img
                              src={figma}
                              alt="Figma"
                              className="w-2 sm:w-7"
                            />
                          }
                          className="z-50 w-[4.5rem] h-5 sm:h-10  text-[8px] sm:text-sm bg-[#cbd5e1] font-normal text-[#475569] sm:w-[7.2rem] rounded-3xl"
                        >
                          Figma
                        </Button>
                      </span>
                      <div className="site__button flex justify-between items-center w-40 mb-4 sm:w-80">
                        <Button
                          color="dark"
                          className="z-10 text-xs w-24 h-6 bg-black rounded-xl sm:rounded-full sm:h-16 sm:w-48 text-[12px] sm:text-base"
                        >
                          Go to site
                        </Button>
                        <button
                          className="bg-[transparent] 
              font-[600]
              sm:text-xl
              text-[10px]
              text-[#475569]
              tracking-[0.75px]
              z-50"
                        >
                          Read Case Study
                        </button>
                      </div>
                    </article>
                    <img
                      src={BottomPatch}
                      alt="bottomPatch"
                      className="absolute -left-10 -bottom-5"
                    />
                  </section>
                  <section className="image relative">
                    <img
                      src={TopPatch}
                      alt="topPatch"
                      className="absolute right-0"
                    />
                    <img
                      src={laptop}
                      alt="Laptop"
                      className="relative left-0 bottom-0"
                    />
                  </section>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Tabs
          defaultValue="Ecommerce"
          color="yellow"
          styles={(theme) => ({
            tab: {
              "&[data-active]": {
                color: "#F0B62F",
              },
            },
          })}
        >
          <Tabs.List className="mt-12 justify-between w-fit mx-auto font-bold sm:p-5 home__tabs hidden">
            {TabName.map((tab) => (
              <Tabs.Tab
                key={tab.id}
                value={tab.value}
                className="text-xs -mr-4 flex sm:mr-11 h-6 font-sans p-5 sm:text-xl leading-6"
              >
                {tab.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <Tabs.Panel value="Ecommerce" pt="xs">
            <div className="flex relative bg-orange justify-between z-10 overflow-hidden">
              <section className="content relative mt-4 ml-10 sm:mt-10 w-2/4">
                <img src={DamiLogo} alt="Dami" className="mb-4 w-16 sm:w-32" />
                <hr className="w-10 mb-5 border-white border-2 sm:w-20 sm:mb-10" />
                <article className="reuseable flex flex-col ">
                  <span className="text-xs mb-5 title sm:text-2xl font-bold sm:mb-10 text-left">
                    B2B E-commerce website dealing in Kitchen appliances
                  </span>
                  <span className="button flex justify-between mb-5 w-56 sm:w-96 sm:mb-10">
                    <Button
                      variant="filled"
                      color="light-gray"
                      rightIcon={
                        <img src={vue} alt="Vue" className="w-2 sm:w-7" />
                      }
                      className="w-[4.5rem] h-5 sm:h-10 text-[8px] sm:text-sm bg-[#cbd5e1] font-normal text-[#475569] sm:w-[7.2rem] rounded-3xl"
                    >
                      Vue.js
                    </Button>
                    <Button
                      variant="filled"
                      color="light-gray"
                      rightIcon={
                        <img src={aws} alt="AWS" className="w-2 sm:w-7" />
                      }
                      className="w-[4.5rem] h-5 sm:h-10  text-[8px] sm:text-sm bg-[#cbd5e1] font-normal text-[#475569] sm:w-[7.2rem] rounded-3xl"
                    >
                      Aws{" "}
                    </Button>
                    <Button
                      variant="filled"
                      color="light-gray"
                      rightIcon={
                        <img src={figma} alt="Figma" className="w-2 sm:w-7" />
                      }
                      className="z-50 w-[4.5rem] h-5 sm:h-10  text-[8px] sm:text-sm bg-[#cbd5e1] font-normal text-[#475569] sm:w-[7.2rem] rounded-3xl"
                    >
                      Figma
                    </Button>
                  </span>
                  <div className="site__button flex justify-between items-center w-40 mb-4 sm:w-80">
                    <Button
                      color="dark"
                      className="z-10 text-xs w-24 h-6 bg-black rounded-xl sm:rounded-full sm:h-16 sm:w-48 text-[12px] sm:text-base"
                    >
                      Go to site
                    </Button>
                    <button
                      className="bg-[transparent] 
              font-[600]
              sm:text-xl
              text-[10px]
              text-[#475569]
              tracking-[0.75px]
              z-50"
                    >
                      Read Case Study
                    </button>
                  </div>
                </article>
                <img
                  src={BottomPatch}
                  alt="bottomPatch"
                  className="absolute -left-10 -bottom-5"
                />
              </section>
              <section className="image relative">
                <img
                  src={TopPatch}
                  alt="topPatch"
                  className="absolute right-0"
                />
                <img
                  src={laptop}
                  alt="Laptop"
                  className="relative left-0 bottom-0"
                />
              </section>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="Informative" pt="xs bg-orange">
            This is Infomative Tab
          </Tabs.Panel>

          <Tabs.Panel value="Pharmaceutical" pt="xs">
            Pharmaceutical tab content
          </Tabs.Panel>
          <Tabs.Panel value="Aviation" pt="xs">
            Aviation tab content
          </Tabs.Panel>
          <Tabs.Panel value="Toursim" pt="xs">
            Tourism tab content
          </Tabs.Panel>
          <Tabs.Panel value="Mobile" pt="xs">
            Mobile tab content
          </Tabs.Panel>
        </Tabs>
      </section>
    </div>
  );
};

export default OurProjects;
