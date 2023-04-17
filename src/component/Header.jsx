import { Button } from '@mantine/core';
import React from 'react';
import Bees from '../assets/images/Bee.png';

const Header = () => (
    <div className='flex items-center h-[100vh]'>
        <img src={Bees} alt="Bee logo" className='absolute w-24 rotate-[-155deg]  top-[8rem] left-[36rem]' />
        <img src={Bees} alt="Bee logo" className='absolute w-16 rotate-[60deg] bottom-[8rem] left-[10rem]' />
        <img src={Bees} alt="Bee logo" className='absolute w-20 rotate-[-30deg] left-[35rem] bottom-[17rem]' />
        <img src={Bees} alt="Bee logo" className='absolute w-96 right-[11rem]' />
        <section className='content ml-52'>
            <span className='title'>
                <h1 className='text-[4rem] font-bold '>Experience what's next</h1>
                <h6 className='mb-20 text-[1.5rem] text-[#475569]'>It’s all about customer Experience</h6>
            </span>
        <Button color='dark' className=' bg-black rounded-full h-16 w-48 text-base text-[1rem]'>Get in touch</Button>
        </section>
    </div>
)

export default Header