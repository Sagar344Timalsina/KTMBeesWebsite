import React from 'react'
import '../index.css';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 px-4 bg-white z-20 sticky top-0'>
      <section className='logo'>
        <img src="../assests/logo/bees.png" alt="Bees" className='w-44' />
      </section>
      <section className='hamburger__logo'>
        <GiHamburgerMenu size={20} />
      </section>
    </nav>
  )
}

export default Navbar