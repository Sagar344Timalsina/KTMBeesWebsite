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
    <main className='w-[70%] bg-white mx-auto  py-16 gap-4 flex items-center justify-center'>
      <section className=''>
        <img className='' src={partners.image} alt="HoneyCombImage" />
      </section>
      <section className='w-[50%]'>
        <h3 className='font-sans font-bold text-dark_gray text-3xl'>{partners.heading}</h3>
        <h1 className='text-yellow font-sans font-bold text-4xl'>{partners.subheading}</h1>
        <p className='pt-4 pb-6 tracking-wider text-lg max-w-lg text-dark_gray'>{partners.description}</p>
        <GetInTouch />
      </section>

    </main>
  )
}

export default PartnerUs