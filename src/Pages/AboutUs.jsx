import React, { useEffect, useState } from 'react'
import { Text, Tabs } from '@mantine/core'
import Navbar from '../component/Navbar'
import { Footer } from '../component/Footer'
import DisplayData from '../utils/DisplayData'

const AboutUs = () => {
  const [display,setDisplay]=useState([]);
  const fetchData= async() =>{
      const data=await DisplayData("about");
      setDisplay(data);
    }
    useEffect(()=>{
      fetchData();
    },)
  return (
    <>
      <main className='bg-light_gray'>
        <section>
          <Navbar />
          <div className='flex flex-col h-40  mt-10 mx-auto bg-white justify-center items-center px-1 py-1.8rem gap-[0.5rem]'>
            <Text className='text-gray font-sans font-bold tracking-wide text-[1.5rem] leading-7 w-[12.625rem] h-[1.75rem]'>About Company</Text>
            <Text className='w-[30.75rem] h-[2.3rem] font-bold text-[2rem] leading-9 text-center tracking-wide text-black font-sans'>Technology that works for you</Text>
            <Text className='w-[11rem] h-[1.3rem] font-sans font-normal text-lg leading-5 text-center tracking-wide text-dark_gray'>Don't just dream, do</Text>
          </div>
        </section>
        <section>
          <Tabs defaultValue="Our Story" className='mx-auto h-[26.7rem]' styles={(theme) => ({
            tab: {

              '&[data-active]': {
                color: '#F0B62F',
              }
            },
          })}>
            <Tabs.List className='mt-[3.2rem] justify-center w-fit mx-auto font-bold ' >
              {display.map((tabValue) => (
                <Tabs.Tab key={tabValue.id} value={tabValue.title} color="yellow" className=' p-[20px] w-auto mr-[45px] h-[23px] font-sans  text-[20px] leading-[23px] tracking-[0.047rem] '>{tabValue.title}</Tabs.Tab>
              ))}
            </Tabs.List>
            {display.map((content) => (
              <Tabs.Panel key={content.id} value={content.title} pt='xl' className='mb-3 w-[60%] mx-auto' >
                <Text className=' w-auto h-7 font-sans font-bold text-2xl leading-7 text-dark_gray'>{content.name}</Text>
                <Text className=' mt-3 w-[61rem] h-28 font-sans font-normal text-lg leading-7 text-justify tracking-[0.047rem] text-dark_gray'>Our combined experience of over 40 years' diligent team is more than happy to help you make your dream come true.
                  {content.description}
                </Text>
              </Tabs.Panel>
            )
            )}
          </Tabs>
        </section>
      </main>
      <Footer />
    </>

  )
}

export default AboutUs