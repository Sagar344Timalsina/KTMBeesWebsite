import React from 'react'
import Bee from "../assets/images/Bee.png"
import GetInTouch from "../component/Buttons/GetInTouch"

const ReadyCreate = () => {
  return (
    <main className='bg-yellow h-48 flex  items-center relative overflow-hidden'>
      <img className='absolute w-[36rem] -left-[12rem] -top-[9rem]' src={Bee} alt="Bee-Image" />
      <section className=' w-[100%]  flex justify-center  '>
        <h1 className='text-5xl font-sans font-bold tracking-tight w-1/2 text-button_gray  z-10'>Ready to create & collaborate</h1>
      </section>
      <section className=' w-[50%] flex justify-start'>
        <GetInTouch />
      </section>
    </main>
  )
}

export default ReadyCreate