import React from 'react'
import PartnerUs from '../component/PartnerUs'
import OurProcess from '../component/OurProcess'
import Services from '../component/Services'
import Companies from '../component/Companies'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import { Footer } from '../component/Footer'

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Companies />
      <Services />
      <PartnerUs />
      <OurProcess />
      <Footer />
    </main>
  )
}

export default HomePage