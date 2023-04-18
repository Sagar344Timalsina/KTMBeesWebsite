import { Button } from '@mantine/core';
import React from 'react';
import Bees from '../assets/images/bees.png';

const Header = () => (
    <div className='flex  items-center h-[99vh] bg-contain bg-no-repeat ' style={{backgroundImage:`url(${Bees})`}}>
        <section className='content ml-52'>
            <span className='title'>
                <h1 className='text-[4rem] font-bold '>Experience what's next</h1>
                <h6 className='mb-10 text-[1.5rem] text-[#475569]'>It’s all about customer Experience</h6>
            </span>
        <Button color='dark' className=' bg-black rounded-full h-16 w-48 text-base text-[1rem]'>Get in touch</Button>
        </section>
    </div>
)

export default Header