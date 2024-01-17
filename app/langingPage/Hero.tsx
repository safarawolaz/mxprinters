import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-white rounded-3xl flex flex-col items-center justify-center bg-hero bg-fixed bg-cover bg-center'>
        <h1 className='text-5xl sm:text-7xl text-white font-bold  text-center'>Marketing Materials </h1>
        <h1 className='text-5xl sm:text-7xl text-white font-bold text-center'> For Your Business</h1>
        <p className='mt-10 text-base text-gray-200 max-w-sm text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo?
        </p>
        <Button className='text-sm bg-orange-700 text-white font-semibold tracking-widest rounded-full mt-8' size='lg'>
          LEARN MORE
        </Button>
    </section>
  )
}

export default Hero