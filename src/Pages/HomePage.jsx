import React from 'react'
import PartnerUs from '../component/PartnerUs'
import OurProcess from '../component/OurProcess'
import Services from '../component/Services'
import Companies from '../component/Companies'

const HomePage = () => {
  return (
    <main>
      <Companies />
      <Services />
      <PartnerUs />
      <OurProcess />
    </main>
  )
}

export default HomePage