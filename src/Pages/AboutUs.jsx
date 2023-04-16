import React from 'react'
import { Flex, Text, Tabs } from '@mantine/core'
import Navbar from '../component/Navbar'
import { Footer } from '../component/Footer'

const AboutUs = () => {
  const contents = [
    { id: 1, name: "Our Story", describe: "In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via WhatsApp or any other platform and let us assist you in your dream project.Do not hesitate to reach out to us cause this really could be project of your lifetime that is worth working at." },
    { id: 2, name: "Team", describe: "In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via WhatsApp or any other platform and let us assist you in your dream project.Do not hesitate to reach out to us cause this really could be project of your lifetime that is worth working at." },
    { id: 3, name: "Mission & Vision", describe: "In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via WhatsApp or any other platform and let us assist you in your dream project.Do not hesitate to reach out to us cause this really could be project of your lifetime that is worth working at." },

  ]
  const tabValues = [
    { id: 1, name: "Our Story" },
    { id: 2, name: "Team" },
    { id: 3, name: "Mission & Vision" },
  ]
  return (
    <>
      <Navbar />
      <div className='bg-light_gray'>
        <div className='bg-light_gray h-6'></div>
        <Flex className=' flex-col h-40 bg-white justify-center items-center px-1 py-1.8rem gap-[0.5rem] mt-8'>
          <Text className='text-gray font-sans font-bold tracking-wide text-[1.5rem] leading-7 w-[12.625rem] h-[1.75rem] order-0'>About Company</Text>
          <Text className='w-[30.75rem] h-[2.3rem] font-bold text-[2rem] leading-9 text-center tracking-wide text-black font-sans order-1'>Technology that works for you</Text>
          <Text className='w-[11rem] h-[1.3rem] font-sans font-normal text-lg leading-5 text-center tracking-wide text-dark_gray order-2 '>Don't just dream, do</Text>
        </Flex>

        <Tabs defaultValue="Our Story" className='mx-auto h-[26.7rem]'>
          <Tabs.List className='p-[3.2rem] justify-center w-[40%] mx-auto font-bold ' >
            {tabValues.map((tabValue) => (
              <Tabs.Tab key={tabValue.id} value={tabValue.name} color="yellow" className='focus:text-yellow p-[20px] w-auto mr-[45px] h-[23px] font-sans  text-[20px] leading-[23px] tracking-[0.047rem] '>{tabValue.name}</Tabs.Tab>

            ))}
          </Tabs.List>
          {contents.map((content) => (
            <Tabs.Panel key={content.id} value={content.name} pt='xl' className='mb-3 w-[50%] mx-auto' >
              <Text className=' w-auto h-7 font-sans font-bold text-2xl leading-7 text-dark_gray order-0'>{content.name}</Text>
              <Text className=' mt-3 w-[61rem] h-28 font-sans font-normal text-lg leading-7 tracking-[0.047rem] text-dark_gray order-1'>Our combined experience of over 40 years' diligent team is more than happy to help you make your dream come true.
                {content.describe}
              </Text>
            </Tabs.Panel>
          )
          )}
        </Tabs>
      </div >
      <Footer />
    </>

  )
}

export default AboutUs