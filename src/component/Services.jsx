import React from 'react'
import { Text, Grid } from '@mantine/core'
import Vector from '../assets/images/Vector.png';
import Pen from '../assets/images/Pen.png';
import Vector3 from '../assets/images/Vector3.png';
import Cart from '../assets/images/Cart.png';

const Services = () => {
    const services = [
        { id: 1, name: "Mobile App Development", describe: 'Explore the avenue of improvement on the digital frontire', image: Vector },
        { id: 2, name: "Digital Product Design", describe: 'Explore the avenue of improvement on the digital frontire', image: Pen },
        { id: 3, name: "Web Development", describe: 'Explore the avenue of improvement on the digital frontire', image: Vector3 },
        { id: 4, name: "Ecommerce Platform", describe: 'Explore the avenue of improvement on the digital frontire', image: Cart },
        { id: 5, name: "Tech Consultation", describe: 'Explore the avenue of improvement on the digital frontire', image: Pen },
        { id: 6, name: "Agency Partner Program", describe: 'Explore the avenue of improvement on the digital frontire', image: Pen },
    ]
    return (
        <section className='bg-light_gray py-3'>
            {/* service */}
            <div className='p-12 bg-light_gray w-9 mx-auto'>
                <Text className='h-9 font-sans font-bold text-3xl leading-9 tracking-wider text-dark text-center'>Services</Text>
                <Text className='font-sans font-normal text-lg text-center tracking-wider text-dark_gray self-stretch'>We're here to enable you in developing, designing, launching, and continously improving and optimizing your systems, brands, ventures, and goods.</Text>
            </div >

            {/* Grid */}
            < div className='w-[60%] mx-auto' >
                <Grid className='mt-6 bg-light_gray flex justify-between items-center gap-1 mb-20'>
                    {services.map((service) => (
                        <Grid.Col span={3} className='flex flex-col items-start p-5 gap-10 h-[17.5rem] mb-6' key={service.id}>
                            <div className='items-start gap-3 h-28 z-2 w-72'>
                                <div className='service__images absolute w-28 h-20 top-30' >
                                    <img src={service.image} alt='icon' className='absolute left-[4.33%] right-[8.33%] top-[35%] bottom-1/4'></img>
                                </div>
                                <div className='mt-[140px] m-3'>
                                    <Text className='font-sans font-bold text-xl leading-6 tracking-wider text-dark_gray mb-3'>{service.name}</Text>
                                    <Text className=' font-sans font-normal text-lg leading-7 text-dark_gray order-1 self-stretch flex-grow-0'>{service.describe}</Text>
                                </div>
                            </div>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>

        </section >
    )
}

export default Services
