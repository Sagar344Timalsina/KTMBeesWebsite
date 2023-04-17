import React from 'react'
import Bee from "../assets/images/Bee.png"

const ReadyCreate = () => {
  return (
    <main className='bg-yellow h-48 flex  items-center relative overflow-hidden'>
            <img className='absolute w-[36rem] -left-[12rem] -top-[9rem]' src={Bee} alt="Bee-Image" />
        <section className=' w-[100%]  flex justify-center  '>
            <h1 className='text-5xl  w-[24rem] text-button_gray  z-10'>Ready to create & collaborate</h1>
        </section>
        <section className=' w-[50%] flex justify-start'>
        <button className='bg-button_gray w-[12rem] h-16 rounded-full text-white text-lg font-medium'>
            Get in touch
        </button>
        </section>
    </main>
  )
}

export default ReadyCreate