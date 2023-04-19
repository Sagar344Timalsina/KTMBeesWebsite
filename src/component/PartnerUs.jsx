import React from 'react'
import GetInTouch from './Buttons/GetInTouch'
import HoneyComb from "../assets/images/HoneyComb.png"

const PartnerUs = () => {
  return (
    <main className='w-[70%] bg-white mx-auto  py-16 gap-4 flex items-center justify-center'>
      <section className=''>
        <img className='' src={HoneyComb} alt="HoneyCombImage" />
      </section>
      <section className='w-[50%]'>
        <h3 className='font-sans font-bold text-dark_gray text-3xl'>Partner With Us</h3>
        <h1 className='text-yellow font-sans font-bold text-4xl'>Get worry-free MVP</h1>
        <p className='pt-4 pb-6 tracking-wider text-lg max-w-lg text-dark_gray'>Our combined experience of over 40 years’ diligent team is more than happy to help you
          make your dream come true. In addition, based on your idea or your preference we are
          ready to share the risk for your project. Reach out to us via WhatsApp or any other
          platform and let us assist you in your dream project. Do not hesitate to reach out
          to us cause this really could be project of your lifetime that is worth working at.</p>
        <GetInTouch />
      </section>

    </main>
  )
}

export default PartnerUs