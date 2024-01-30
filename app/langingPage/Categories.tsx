import Btn from '@/components/shared/Btn'
import { Button } from '@/components/ui/button'
import { ArrowRight, LucideBookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <section className='w-full min-h-screen bg-neutral-100  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
          <LucideBookOpen className='w-7 h-7 text-[#1b1b1b]' />
          <p className='text-base font-bold uppercase text-[#1b1b1b]'>our products</p>
        </div>
        <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl text-center font-bold mt-8'>Some Products <br /> &  Services We Offer</h3>
        <p className='text-base font-medium text-muted-foreground text-center mt-8'>Here are some of the products and services we offer...</p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Car Branding</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/cat1.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Booklets</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/categories-2.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Business Cards</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/cat3.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Calenders</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/categories-4.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>


        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Signage</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/cat5.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>T-Shirts</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/cat6.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Banners</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/cat7.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl text-[#1b1b1b] font-bold text-center'>Posters</h3>
          <p className='text-base text-muted-foreground text-center mt-6'></p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full relative overflow-hidden">
              <Image src='/cat8.jpg' fill alt='blog image' objectFit='cover' />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link href='/projects'>
              <Btn text='more products' />
          </Link>
      </div>
    </section>
  )
}

export default Categories