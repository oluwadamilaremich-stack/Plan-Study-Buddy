import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeSect1 from '../components/HomeSect1'
import HowItWorks from '../components/HowItWorks'
import PowerfulFeatures from '../components/PowerfulFeatures'
import Difference from '../components/Difference'
import StudentsLove from '../components/StudentsLove'


const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeSect1 />
      <HowItWorks />
      <PowerfulFeatures />
      <Difference />
      <StudentsLove /> 
    </div>
  )
}

export default Home
