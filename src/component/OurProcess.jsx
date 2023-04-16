import React from 'react'
import Bee from "../assets/images/Bee.png"

const OurProcess = () => {
  const BeeHive = [
    { id: 1, text1: "Discover", text2: "Insight into the problem" },
    { id: 2, text1: "Define", text2: "The area to focus upon" },
    { id: 3, text1: "Develop", text2: "Potential Solution" },
    { id: 4, text1: "Deliver", text2: "Solution that work" },
  ]
  return (
    <main className='bg-white w-[100%] h-[55vh]  '>
      <h1 className='text-3xl text-blue2 m-auto text-center font-sans font-[700]  '>Our Process</h1>
    <section className='relative w-[70vw] mx-auto pt-[2rem]'>

      <div>
      <img className="w-[7rem] rotate-[18deg] absolute -left-[2rem]  top-[3rem]" src={Bee} alt="Bee Image" />
      </div>
      <div className='container  flex items-center justify-center  '>
      

        {
          BeeHive.map((comb) => (
            <div key={comb.id} className={` ${comb.id % 2 !== 0 ? 'container__polygon' : 'container__polygon--bottom'} `} >
              <p className={` ${comb.id % 2 !== 0 ? 'polygon__text':'polygon__text--bottom'} font-sans font-[700] text-2xl  text-blue2`}>{comb.text1}</p>
              <p className={` ${comb.id % 2 !== 0 ? 'polygon__text2':'polygon__text2--bottom'} font-sans font-[500] text-xl text-gray`}>{comb.text2}</p>
            </div>
          ))
        }
      </div>
    </section>
    </main>
  )
}

export default OurProcess