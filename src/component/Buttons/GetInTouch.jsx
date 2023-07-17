import React from 'react'
import Contacts from '../../Pages/Contact'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'


const GetInTouch = () => {
  return (
    <Link to="/contact" target='_blank'><button className='bg-button_gray w-[8rem] sm:w-[12rem] h-10 sm:h-16 rounded-full text-white text-sm sm:text-lg  sm:font-medium border border-light_gray'>
      Get in touch
    </button>
    </Link>
  )
}

export default GetInTouch