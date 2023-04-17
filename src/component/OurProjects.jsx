import React, { useState } from 'react'
import { Button, Tabs } from '@mantine/core';
import DamiLogo from '../assets/images/dami pasal-logo 1.png';
import laptop from '../assets/images/laptop.png';
import { FaVuejs } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import TopPatch from '../assets/images/topo.png';
import BottomPatch from '../assets/images/bottom.png';

const OurProjects = () => {
  return (
    <div className='bg-light_gray flex flex-col text-center py-[50px]' style={{ overflow: "hidden" }}>
      <section className='title  mt-2 mb-8 w-[45%] m-auto '>
        <h1 className='text-3xl font-sans font-[700] mb-2'> Our Projects</h1>
        <h6 className='text-[#475569]'>Global clients rely on our team of committed developers to deliver high-quality, sector-specific web and mobile solutions.</h6>
      </section>
      <section className='w-[70%] m-auto'>
        <Tabs defaultValue="ecommerce" color='yellow' >
          <Tabs.List className='justify-between font-bold mb-4'>
            <Tabs.Tab value="ecommerce" label="E-commerce" className='focus:text-yellow'>E-commerce</Tabs.Tab>
            <Tabs.Tab value="informative" className='focus:text-yellow'> Informative</Tabs.Tab>
            <Tabs.Tab value="pharmaceutical" className='focus:text-yellow'> Pharmaceutical</Tabs.Tab>
            <Tabs.Tab value="aviation" className='focus:text-yellow'> Aviation</Tabs.Tab>
            <Tabs.Tab value="tourism" className='focus:text-yellow'> Toursim</Tabs.Tab>
            <Tabs.Tab value="mobile" className='focus:text-yellow'> Mobile</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="ecommerce" pt="xs" >
            <div className='flex relative bg-orange justify-between z-10 overflow-hidden' >
              <section className='content ml-10 mt-10 w-[38%]'>
                <img src={DamiLogo} alt="Dami logo" className='mb-4' />
                <hr className='border-white border-2 w-20 mb-10' />
                <article className='reuseable flex flex-col '>
                  <span className='title text-2xl font-bold mb-10 text-left'>B2B E-commerce website dealing in Kitchen appliances</span>
                  <span className='button flex justify-between  w-96 mb-10'>
                    <Button variant='filled' color='light-gray' rightIcon={<FaVuejs />} className='bg-[#cbd5e1] text-[#475569] rounded-3xl'>Vue.js </Button>
                    <Button variant='filled' color='light-gray' rightIcon={<FaAws />} className='bg-[#cbd5e1] text-[#475569] rounded-3xl'>Aws </Button>
                    <Button variant='filled' color='light-gray' rightIcon={<FaFigma />} className='bg-[#cbd5e1] text-[#475569] rounded-3xl'>Figma</Button>
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
              </section>
              <section className='image'>
                <img src={TopPatch} alt='botto' className='absolute left-[50rem]' />
                <img src={BottomPatch} alt='toppo' className='absolute left-[0] bottom-[-2.2rem]' />
                <img src={laptop} alt="Laptop logo" className='relative right-20 top-9' />
              </section>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="informative" pt="xs bg-orange">
            This is Infomative Tab
          </Tabs.Panel>

          <Tabs.Panel value="pharmaceutical" pt="xs">
            Pharmaceutical tab content
          </Tabs.Panel>
          <Tabs.Panel value="aviation" pt="xs">
            Aviation tab content
          </Tabs.Panel>
          <Tabs.Panel value="tourism" pt="xs">
            Tourism tab content
          </Tabs.Panel>
          <Tabs.Panel value="mobile" pt="xs">
            Mobile tab content
          </Tabs.Panel>
        </Tabs>
      </section>
    </div>
  )
}

export default OurProjects