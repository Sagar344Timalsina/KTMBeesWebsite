import React, { useEffect, useState } from 'react'
import GetInTouch from './Buttons/GetInTouch'
import DisplayData from '../utils/DisplayData'


const PartnerUs = () => {
  const [partners, setPartners] = useState([]);
  const display = async () => {
    const list = await DisplayData("partner");
    setPartners(list[0]);

  }
  useEffect(() => {
    display();
  }, []);
  return (
    <main className='sm:grid sm:grid-cols-12 bg-dark_yellow p-10 sm:dynamic_x_padding'>
      <section className='sm:col-span-6 sm:flex justify-center items-center'>
        <img src={partners.image} alt="HoneyCombImage" />
      </section>
      <section className='sm:dynamic_x_padding w-full sm:col-span-6 col-span-12'>
        <h3 className='font-sans font-bold text-dark_gray sm:text-3xl mt-16 text-2xl'>{partners.heading}</h3>
        <h1 className='text-yellow font-sans font-bold sm:text-4xl text-3xl'>{partners.subheading}</h1>
        <p className='tracking-wider sm:text-lg max-w-lg text-dark_gray'>{partners.description}</p>
        <GetInTouch />
      </section>
    </main>
  )
}

export default PartnerUs