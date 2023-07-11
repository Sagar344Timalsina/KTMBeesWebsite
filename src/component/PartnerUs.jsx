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
    <main className='w-[70%] bg-white mx-auto  py-16 gap-4 sm:flex items-center justify-center'>
      <section className=''>
        <img className='' src={partners.image} alt="HoneyCombImage" />
      </section>
      <section className='sm:w-[50%] w-[100%]'>
        <h3 className='font-sans font-bold text-dark_gray sm:text-3xl mt-16 text-2xl'>{partners.heading}</h3>
        <h1 className='text-yellow font-sans font-bold sm:text-4xl text-3xl'>{partners.subheading}</h1>
        <p className='pt-4 pb-6 tracking-wider sm:text-lg max-w-lg text-dark_gray'>{partners.description}</p>
        <GetInTouch />
      </section>

    </main>
  )
}

export default PartnerUs