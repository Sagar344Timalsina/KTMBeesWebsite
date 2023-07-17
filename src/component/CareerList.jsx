import { Text } from '@mantine/core'
import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import { BiTimeFive } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'

const CareerList = () => {
    const list = [
        { id: 1, title: "Senior Next JS Developer", type: "Fulltime", location: "Kathmandu" },
        { id: 2, title: "Senior Next JS Developer", type: "Fulltime", location: "Kathmandu" },
        { id: 2, title: "Senior Next JS Developer", type: "Fulltime", location: "Kathmandu" },
        { id: 2, title: "Senior Next JS Developer", type: "Fulltime", location: "Kathmandu" },
    ]
    return (
        <>
            <Navbar />
            <main >
                <section className='py-16 pb-16 items-center text-center font-bold bg-light_yellow'>
                    <Text className="text-black_label text-2xl">CAREER</Text>
                    <Text className="text-3xl">At KtmBees</Text>
                </section>
                <section className='py-12 pb-16 px-56 bg-light_yellow_1 grid grid-cols-12 gap-5'>
                    {list.map((data) => (
                        <div className='col-span-6 career_box p-4 bg-light_yellow' key={data.id}>
                            <Text className='font-bold text-xl text-yellow mb-14'>{data.title}</Text>
                            <div className='flex flex-col items-end'>
                                <Text className='flex items-center gap-1'><BiTimeFive />{data.type}</Text>
                                <Text className='flex items-center gap-1'><GrLocation />{data.location}</Text>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CareerList
