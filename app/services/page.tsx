import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Categories from '../langingPage/Categories'
import SocialProof from '../langingPage/SocialProof'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

const page = () => {
  return (
    <section>
        <div className="">
            <HeroSm header='Our Services#' subHeader='All Services Offered' />
        </div>
        <Section1 />
        <Section2 />
        <Categories />
        <SocialProof />
    </section>
  )
}

export default page