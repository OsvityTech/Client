import React from 'react'
import MentorSection from '../../components/Sections/MentorSection'
import OpportunitySection from '../../components/RightOpportunity'
import StayUpdate from '../../components/StayUpdate'
import FooterPage from '../../components/FooterPage'

const Home = () => {
  return (
    <div className='bg-[#FFFFFF]'>
       <OpportunitySection />
      
      <MentorSection/>
      <StayUpdate />
      <FooterPage />
    </div>
  )
}

export default Home
