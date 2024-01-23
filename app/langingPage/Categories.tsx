import { Button } from '@/components/ui/button'
import { ArrowRight, LucideBookOpen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <section className='w-full min-h-screen bg-yellow-50  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
          <LucideBookOpen className='w-5 h-5 text-[#db3a35]' />
          <p className='text-base font-bold uppercase text-[#db3a35]'>categories</p>
        </div>
        <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-8'>The Complete Printing Solutions</h3>
        <p className='text-base text-muted-foreground text-center mt-8'>Some of the products we offer</p>
      <div className="mt-12 grid lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#0e0322] font-bold text-center'>Banners</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/categories-1.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-[#db3a35] mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#0e0322] font-bold text-center'>Booklets</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/categories-2.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-[#db3a35] mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#0e0322] font-bold text-center'>Business Cards</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/categories-3.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-[#db3a35] mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#0e0322] font-bold text-center'>Calenders</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/categories-4.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-[#db3a35] mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Button className='text-sm bg-[#dd0f08] text-white font-semibold rounded-full inline-block mt-8 w-max tracking-tight' size='lg' >MORE CATEGORIES</Button>
      </div>
    </section>
  )
}

export default Categories