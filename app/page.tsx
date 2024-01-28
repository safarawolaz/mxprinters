'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Blogs from './langingPage/Blogs'
import Categories from './langingPage/Categories'
import Contact from './langingPage/Contact'
import Hero from './langingPage/Hero'
import Projects from './langingPage/Projects'
import Services from './langingPage/Services'
import SocialProof from './langingPage/SocialProof'
import Stats from './langingPage/Stats'
import Testimonials from './langingPage/Testimonials'
import WhoWeAre from './langingPage/WhoWeAre.'
import WhyUs from './langingPage/WhyUs'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Services />
      {/* <Stats /> */}
      <WhoWeAre />
      <Categories />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Blogs />
      <Contact />
      <SocialProof />
    </div>
  )
}
