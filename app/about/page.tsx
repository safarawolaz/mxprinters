import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Stats from '../langingPage/Stats'
import WhyUs from '../langingPage/WhyUs'
import About from './components/About'

const page = () => {
  return (
    <section className=''>
      <div className="px-4 lg:px-10">
     <HeroSm header='About Us#' subHeader='More About Us'/>
     </div>
     <About />
     <Stats />
     <WhyUs />
    </section>
  )
}

export default page