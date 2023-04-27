import { Button } from '@mantine/core';
import React from 'react';
import Bees from '../assets/images/hero.png';

const Header = () => {
    <div className='flex  items-center h-[95vh]  bg-contain bg-no-repeat' style={{backgroundImage:`url(${Bees})`}}>
        <section className='content ml-52 mb-16'>
            <span className='title'>
                <h1 className='text-6xl font-bold mb-4'>Experience what's next</h1>
                <h6 className='mb-10 text-2xl text-[#475569]'>It’s all about customer Experience</h6>
            </span>
        <Button color='dark' className=' bg-black rounded-full h-16 w-48 text-base'>Get in touch</Button>
        </section>
    </div>
}


export default Header