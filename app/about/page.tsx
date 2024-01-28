import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Stats from '../langingPage/Stats'
import WhyUs from '../langingPage/WhyUs'
import About from './components/About'

const page = () => {
  return (
    <section className=''>
      <div className="">
     <HeroSm header='About Us.' subHeader='More About Us'/>
     </div>
     <About />
     {/* <Stats /> */}
     <WhyUs />
    </section>
  )
}

export default page