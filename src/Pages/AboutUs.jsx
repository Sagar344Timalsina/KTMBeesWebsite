import React from 'react'
import { Flex, Text, Tabs } from '@mantine/core'
import Navbar from '../component/Navbar'
import { Footer } from '../component/Footer'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#f1f5f9]'>
      <Flex className=' flex-col h-40 bg-white justify-center items-center px-[1px] py-[30px] gap-8'>
        <Text className='text-gray font-sans font-bold tracking-widest text-2xl leading-7 w-[202px] h-[28px] order-0'>About Company</Text>
        <Text className='w-[492px] h-[37px] font-bold text-[32px] leading-9 text-center tracking-widest text-black font-sans order-1'>Technology that works for you</Text>
        <Text className='w-[175px] h-[21px] font-sans font-normal text-lg leading-5 text-center tracking-widest text-dark-gray order-2 '>Don't just dream, do</Text>
      </Flex>
      <Tabs defaultValue="Our Story" className='mx-auto' color="yellow.5">
        <Tabs.List className='mt-[51px] justify-center w-[30%] mx-auto font-bold ' >
          <Tabs.Tab value="Our Story" color="yellow" className='focus:text-yellow p-[20px] w-[99px] mr-[45px] h-[23px] font-sans  text-[20px] leading-[23px] tracking-[0.75px] dark:data-[te-nav-active]:text-info'>Our Story</Tabs.Tab>
          <Tabs.Tab value="Team" color="yellow" className='focus:text-yellow p-[20px] w-[54px] mr-[45px] h-[23px] font-sans text-[20px] leading-[23px] tracking-[0.75px]'>Team</Tabs.Tab>
          <Tabs.Tab value="Mission & Vision" className='focus:text-yellow p-[20px] w-[172px] h-[23px] font-sans text-[20px] leading-[23px] tracking-[0.75px]'>Mission & Vision</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Our Story" pt='xl' className='mb-[10px] w-[60%] mx-auto'>
          <Text className=' w-[117px] h-[28px] font-sans font-bold text-[24px] leading-[28px] text-[#475569] order-0'>Our Story</Text>
          <Text className=' mt-[10px] w-[980px] h-[112px] font-sans font-normal text-[18px] leading-[28px] tracking-widest text-[#475569] order-1 self-stretch'>Our combined experience of over 40 years' diligent team is more than happy to help you make your dream come true.
            In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via
            WhatsApp or any other platform and let us assist you in your dream project. Do not hesitate to reach out to us cause this really could
            be project of your lifetime that is worth working at.
          </Text>
        </Tabs.Panel>

        <Tabs.Panel value="Team" pt="xl">
          Team tab content
        </Tabs.Panel>

        <Tabs.Panel value="Mission & Vision" pt="xl">
          Mission & Vision tab content
        </Tabs.Panel>
      </Tabs>
    </div>
    <Footer/>
    </>

  )
}

export default AboutUs