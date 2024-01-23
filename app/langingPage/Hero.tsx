import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-white rounded-3xl flex flex-col items-center justify-center bg-hero bg-fixed bg-cover bg-center overflow-hidden'>
        <h1 className='text-5xl sm:text-7xl text-white font-bold  text-center'>Leader in total</h1>
        <h1 className='text-5xl sm:text-7xl text-white font-bold text-center'>printing services</h1>
        <p className='mt-10 text-lg text-gray-200 max-w-sm text-center'>
          Rendering effective and qualitative printing services at all times.
        </p>
        <Button className='text-sm bg-[#dd0f08] py-6 px-12  text-white font-semibold tracking-widest rounded-full mt-8' size='lg'>
          LEARN MORE
        </Button>
    </section>
  )
}

export default Hero