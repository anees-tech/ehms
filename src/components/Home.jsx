import React from 'react'
import Header from './Header'
import ServicesGrid from './homepageSections/ServicesGrid'
import FAQs from './FAQs'
import TeamExperts from './TeamExperts'
import TraumaFocusedTherapy from './homepageSections/TherapySection'
import Footer from './Footer'

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <ServicesGrid />
      <FAQs />
      <TeamExperts />
      <TraumaFocusedTherapy />
      <Footer />
    </div>
  )
}

export default Home