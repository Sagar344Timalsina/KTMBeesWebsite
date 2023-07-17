import React from 'react'
import Navbar from './Navbar'
import { Text } from '@mantine/core'
import { BiTimeFive } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { Footer } from './Footer'

const Career = () => {
    const career =
    {
        id: 1, careerTitle: "Senior Next.js developer", date: "April 13, 2023",
        description: "We are seeking an experienced Senior React Developer to join our team. In this role, Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        type: "Full-time",
        location: "Kathmandu"
    }

    return (
        <>
            <Navbar />
            <main className='py-12 px-96 items-center bg-light_yellow'>
                <Text className='text-center font-bold text-xl text-yellow mb-14'>{career.careerTitle}</Text>
                <div className='  flex flex-col '>
                    <Text className='mb-8'>{career.date}</Text>
                    <p className='text-justify items-center font-normal mb-8 tracking-widest leading-7'>{career.description}</p>
                    <Text className='flex items-center gap-1'><BiTimeFive />{career.type}</Text>
                    <Text className='flex items-center gap-1'><GrLocation />{career.location}</Text>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Career
