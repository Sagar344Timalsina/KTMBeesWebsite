import { Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import { BiTimeFive } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { BsCalendarDate } from 'react-icons/bs'
import DisplayData from '../utils/DisplayData'
import { Link } from 'react-router-dom'

const CareerList = () => {
    const [careerList, setCareerList] = useState([]);

    const displayCareerList = async () => {
        const listCareer = await DisplayData("career");
        setCareerList(listCareer);
        console.log(listCareer, "List of Career");
    }

    useEffect(() => {
        displayCareerList();
    }, []);

    return (
        <>
            <Navbar />
            <main className=''>
                <section className='py-16 pb-16 items-center text-center font-bold bg-light_yellow'>
                    <Text className="text-black_label text-2xl">CAREER</Text>
                    <Text className="text-3xl">At KtmBees</Text>
                </section>
                <section className='py-12 px-10 md:py-12 pb-16 md:px-24 lg:py-12 lg:px-56 bg-light_yellow_1 grid grid-cols-12 gap-5'>
                    {careerList.map((data) => (
                        <Link to={`/career/${data.id}`} className='col-span-12 md:col-span-6 career_box p-4 bg-light_yellow cursor-pointer' key={data.id}>
                            <Text className='font-bold text-xl text-yellow mb-14'>{data.jobTitle}</Text>
                            <div className='flex flex-col items-end'>
                                <Text className='flex items-center gap-1'><BiTimeFive />{data.jobType}</Text>
                                <Text className='flex items-center gap-1'><GrLocation />{data.location}</Text>
                                <Text className='flex items-center gap-1'><BsCalendarDate />{data.date}</Text>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CareerList
