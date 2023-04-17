import React from 'react'
import { Text, Grid } from '@mantine/core'
import Vector from '../assets/images/Vector.png';
import Pen from '../assets/images/Pen.png';
import Vector3 from '../assets/images/Vector3.png';
import Cart from '../assets/images/Cart.png';
import Polygon4 from "../assets/images/Polygon 4.png"
import Polygon2 from "../assets/images/Polygon 2.png"

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
            <div className='p-12 bg-light_gray w-[40rem] mx-auto'>
                <Text className='h-9 font-sans font-bold text-3xl leading-9 tracking-wider text-dark text-center'>Services</Text>
                <Text className='font-sans font-normal text-lg text-center tracking-wider text-dark_gray order-1 self-stretch'>We're here to enable you in developing, designing, launching, and continously improving and optimizing your systems, brands, ventures, and goods.</Text>
            </div >

            {/* Grid */}
            < div className='w-[60%] mx-auto' >
                <Grid className='mt-6 bg-light_gray flex justify-between items-center gap-1 mb-20'>
                    {services.map((service) => (
                        <Grid.Col span={3} className='flex flex-col items-start p-5 gap-10 isolate  h-[17.5rem] mb-6' key={service.id}>
                            <div className='flex-col items-start gap-3 h-28 order-2 z-2 w-72'>
                                <div className='absolute w-24 h-20  top-30 -rotate-180 ' >
                                    <img src={Polygon4} alt='Polygon' className='absolute left-[20.77%] right-[64.51%] top-[17.74%] bottom-[66.66%]'></img>
                                    <img src={Polygon2} alt='Polygon' className='absolute left-[-24.22%] right-[51.06%] top-[17.95%] bottom-[66.45%]'></img>
                                    <img src={Polygon4} alt='Polygon' className=' absolute left-[-40.93%] right-[44.35%] top-[-30.48%] bottom-[53.92%]'></img>
                                    <img src={service.image} alt='icon' className='absolute left-[8.33%] right-[8.33%] top-[-20%] bottom-[25%] -rotate-180'></img>
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
