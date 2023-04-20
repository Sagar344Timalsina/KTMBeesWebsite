import React from 'react'
import { Button, Tabs } from '@mantine/core';
import DamiLogo from '../assets/images/dami pasal-logo 1.png';
import laptop from '../assets/images/laptop.png';
import figma from '../assets/images/figma.png';
import vue from '../assets/images/vue.png';
import aws from '../assets/images/awsLogo.png';
import TopPatch from '../assets/images/topo.png';
import BottomPatch from '../assets/images/bottom.png';

const OurProjects = () => {
  const TabName=[
    {id:1,title:"E-commerce",value:"ecommerce"},
    {id:2,title:"Informative",value:"Informative"},
    {id:3,title:"Pharmaceutical",value:"Pharmaceutical"},
    {id:4,title:"Aviation",value:"Aviation"},
    {id:5,title:"Toursim",value:"Toursim"},
    {id:6,title:"Mobile",value:"Mobile"},
  ]
  return (
    <div className='bg-light_gray flex flex-col text-center py-[50px]' style={{ overflow: "hidden" }}>
      <section className='title  mt-2 mb-8 w-[45%] m-auto '>
        <h1 className='text-3xl font-sans font-[700] mb-2'> Our Projects</h1>
        <h6 className='text-[#475569]'>Global clients rely on our team of committed developers to deliver high-quality, sector-specific web and mobile solutions.</h6>
      </section>
      <section className='w-fit  m-auto'>
        <Tabs defaultValue="ecommerce" color='yellow' styles={(theme) => ({
          tab: {

            '&[data-active]': {
              color: '#F0B62F',
            }
          },
        })} >
          <Tabs.List className='mt-[3.2rem] justify-between w-fit mx-auto font-bold'>
            {
              TabName.map((tab) => (
                <Tabs.Tab key={tab.id} value={tab.value} className='p-[20px] w-auto mr-[45px] h-[23px] font-sans  text-[20px] leading-[23px] tracking-[0.047rem]'>{tab.title}</Tabs.Tab>
              )
              )
            }
          </Tabs.List>

          <Tabs.Panel value="ecommerce" pt="xs" >
            <div className='flex relative bg-orange justify-between z-10 overflow-hidden' >
              <section className='content relative ml-10 mt-10 w-[38%]'>
                <img src={DamiLogo} alt="Dami" className='mb-4' />
                <hr className='border-white border-2 w-20 mb-10' />
                <article className='reuseable flex flex-col '>
                  <span className='title text-2xl font-bold mb-10 text-left'>B2B E-commerce website dealing in Kitchen appliances</span>
                  <span className='button flex justify-between  w-96 mb-10'>
                    <Button variant='filled' color='light-gray' rightIcon={<img src={vue} alt='Vue' />} className='bg-[#cbd5e1] font-normal text-[#475569] w-[7.2rem] rounded-3xl'>Vue.js </Button>
                    <Button variant='filled' color='light-gray' rightIcon={<img src={aws} alt='AWS' className='w-8' />} className='bg-[#cbd5e1] font-normal text-[#475569] w-[7.2rem] rounded-3xl'>Aws </Button>
                    <Button variant='filled' color='light-gray' rightIcon={<img src={figma} alt='Figma' />} className='bg-[#cbd5e1] text-[#475569] font-normal w-[7.2rem] rounded-3xl'>Figma</Button>
                  </span>
                  <div className='site__button flex justify-between items-center'>
                    <Button color='dark' className='z-10 bg-black rounded-full h-16 w-48 text-base'>Go to site</Button>
                    <button className='bg-[transparent] 
              font-[600]
              text-xl
              text-[#475569]
              tracking-[0.75px]'
                    >
                      Read Case Study
                    </button>
                  </div>
                </article>
                <img src={BottomPatch} alt='bottomPatch' className='absolute -left-10 -bottom-5' />
              </section>
              <section className='image relative'>
                <img src={TopPatch} alt='topPatch' className='absolute right-0' />
                <img src={laptop} alt="Laptop" className='relative left-0 bottom-0' />
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
  )
}

export default OurProjects