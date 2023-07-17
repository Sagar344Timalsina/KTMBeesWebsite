import React, { useEffect, useState } from "react";
import { Text, Tabs, Accordion } from "@mantine/core";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import DisplayData from "../utils/DisplayData";

const AboutUs = () => {
  const [display, setDisplay] = useState([]);
  const [displayTeams, setDisplayTeams] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Mission & Vision");
  const [selectedAccordian, setSelectedAccordian] = useState("Mission & Vision");

  const fetchData = async () => {
    const data = await DisplayData("about");
    const teamsData = await DisplayData("teams");
    setDisplay(data);
    setDisplayTeams(teamsData);
    console.log(displayTeams, "Our Teams");
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar className="bg-light_yellow" />
      <main className='bg-light_yellow pt-15'>
        <section>
          <div className="flex flex-col h-auto mb-10 mt-10 mx-auto bg-white justify-center items-center px-1 pt-9 pb-9 py-1.8rem gap-[0.5rem]">
            <Text className="text-gray text-center font-sans font-bold tracking-wide text-sm sm:text-lg leading-7 w-[12.625rem] h-[1.75rem]">
              About Company
            </Text>
            <Text className="w-auto  font-bold text-lg sm:text-3xl text-center tracking-wide text-black font-sans">
              Technology that works for you
            </Text>
            <Text className="w-[11rem] h-[1.3rem] font-sans font-normal text-sm sm:text-lg  text-center tracking-wide text-dark_gray">
              Don't just dream, do
            </Text>
          </div>
        </section>
        <section>
          <Accordion radius="md" defaultValue="Mission & Vision" className='display__accordian' onChange={setSelectedAccordian}>
            {display.map((tabValue) => (
              <Accordion.Item key={tabValue.id} value={tabValue.title}>
                <Accordion.Control>{tabValue.title}</Accordion.Control>
                <Accordion.Panel>{tabValue.description}</Accordion.Panel>
              </Accordion.Item>
            ))}
            <Accordion.Item value='Team'>
              <Accordion.Control>Team</Accordion.Control>
              {selectedAccordian === "Team" && displayTeams.map((data) => (
                <Accordion.Panel className='flex flex-col justify-center items-center'>
                  <img src={data.image} alt="teams" className='h-60 ' />
                  <Text className='text-center font-bold text-xl text-yellow'>{data.name}</Text>
                  <Text className='text-center font-bold text-sm '>{data.post}</Text>
                </Accordion.Panel>
              ))}
            </Accordion.Item>


          </Accordion>
          <Tabs defaultValue="Mission & Vision" onTabChange={setSelectedItem} className='mx-auto h-auto display__tabs hidden flex flex-col' styles={(theme) => ({
            tab: {

              '&[data-active]': {
                color: '#F0B62F',
                backgroundColor: "#FFFBEC",
              }
            },
          })}>
            <Tabs.List className='mt-[3.2rem] justify-center w-fit mx-auto font-bold' >
              {display.map((tabValue) => (
                <Tabs.Tab
                  key={tabValue.id}
                  value={tabValue.title}
                  color="yellow"
                  className=" p-4 w-auto mr-[0.5rem] sm:mr-[2.8rem] h-auto font-sans text-xs sm:text-lg leading-[23px] tracking-[0.047rem] hover:bg-light_yellow "
                >
                  {tabValue.title}
                </Tabs.Tab>
              ))}
              <Tabs.Tab value="Team" color="yellow" className=' p-4 w-auto mr-[0.5rem] sm:mr-[2.8rem] h-auto font-sans text-xs sm:text-lg leading-[23px] tracking-[0.047rem] '>Team</Tabs.Tab>
            </Tabs.List>
            {display.map((content) => (
              <Tabs.Panel defaultValue="Mission & Vision" key={content.id} value={content.title} pt='xl' className=' w-[60%] mx-auto' >
                <Text className=' mt-3 w-auto h-auto  font-sans font-normal text-sm sm:text-lg leading-7 text-justify  text-dark_gray sm:tracking-[0.047rem]'>
                  {content.description}
                </Text>
              </Tabs.Panel>
            )
            )}
            <Tabs.Panel value={selectedItem} pt='xl' className=' w-[60%] mx-auto grid grid-cols-12' >
              {selectedItem === "Team" && displayTeams.map((data) => (
                <div className='md:col-span-6 lg:col-span-4 sm:col-span-6 p-6'>
                  <div>
                    <img src={data.image} alt="teams" />
                    <Text className='text-center font-bold text-xl text-yellow'>{data.name}</Text>
                    <Text className='text-center font-bold text-sm '>{data.post}</Text>
                  </div>
                </div>
              ))}
            </Tabs.Panel>
          </Tabs>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
