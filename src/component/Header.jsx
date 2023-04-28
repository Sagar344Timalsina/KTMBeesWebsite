import { Button } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import DisplayData from '../utils/DisplayData';

const Header = () => {
    const [display, setDisplay] = useState([]);
    const fetchData = async () => {
        const datas = await DisplayData("herosection");
        setDisplay(datas);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <header>
            {
                display.map((data) => (
                    <div className='flex  items-center h-[95vh]  bg-contain bg-no-repeat' key={data.id} style={{ backgroundImage: `url(${data.image})` }}>
                        <section className='content ml-52 mb-16'>
                            <span className='title'>
                                <h1 className='text-6xl font-bold mb-4'>{data.heading}</h1>
                                <h6 className='mb-10 text-2xl text-[#475569]'>{data.subheading}</h6>
                            </span>
                            <Button color='dark' className=' bg-black rounded-full h-16 w-48 text-base'>Get in touch</Button>
                        </section>
                    </div>
                ))
            }
        </header>
    )
}


export default Header