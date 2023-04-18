import React from 'react'
import Bee from "../assets/images/Bee.png"

const OurProcess = () => {
  return (
    <main className='bg-white w-[100%]  p-[50px]'>
      <h1 className='text-3xl text-blue2 m-auto text-center font-sans font-[700]  '>Our Process</h1>
      <section className='w-[85%] h-[30rem]  mx-auto relative'>
        <div className='w-[100%] mx-auto pt-[2rem] relative  flex items-center justify-center flex-wrap'>
        <img className="w-[7rem] rotate-[18deg] absolute top-[2rem] -left-4 " src={Bee} alt="Bee Image" />
          <div className="container top-2 left-[3rem]">
            <p className='container__text1'>Discover</p>
            <p className='container__text2'>Insight into the problem</p>
          </div>
          <div className="container top-36 left-[1rem] ">
            <p className='container__text1'>Define</p>
            <p className='container__text2'>The area to focus upon</p>
          </div>
          <div className="container top-2 -left-[1rem]">
            <p className='container__text1'>Develop</p>
            <p className='container__text2'>Potential Solution</p>
          </div>
          <div className="container top-36 -left-[3rem]">
            <p className='container__text1'>Deliver</p>
            <p className='container__text2'>Solution that work</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default OurProcess