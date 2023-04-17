import React from 'react'
import '../index.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {Text} from '@mantine/core';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center  mx-[1rem] bg-[transparent]'>
      <section className='logo'>
        <img src="../assests/logo/bees.png" alt="Bees" className='w-44'/>
      </section>
      <section className='hamburger__logo'>
        <GiHamburgerMenu size={20}/>
      </section>
    </nav>
    )
}

export default Navbar