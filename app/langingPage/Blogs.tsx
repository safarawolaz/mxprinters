import { Button } from '@/components/ui/button'
import { ArrowBigRight, ArrowRight, LucideAward } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <section className='w-full min-h-screen bg-white  flex flex-col justify-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <LucideAward className='w-6 h-6 text-[#e6413b]' />
            <p className='uppercase text-base text-[#e6413b] font-bold'>recent blogs</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
            <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold'>News And Insights</h3>
            <Button className='text-sm bg-[#e6413b] text-white font-semibold rounded-full inline-block mt-8 w-max tracking-tight my-auto' size='lg' >MORE BLOGS</Button>
        </div>
        <div className="mt-10 md:flex gap-4 md:gap-8">
            <div className="">
                <div className="h-[350px] bg-gray-500 rounded-3xl relative overflow-hidden">
                    <Image src='/news-11.jpg' fill alt='blog image' objectFit='cover'  />
                </div>
                <div className="">
                    <h3 className='text-[20px] text-[#0e0322] font-bold mt-4'>How Do You Know If Your Product Has Hail Damage?</h3>
                    <Button className='uppercase text-sm font-semibold tracking-wider flex items-center mt-6' variant='ghost'><ArrowRight className='h-5 w-5 text-[#e6413b] mr-2' /> Continue Reading</Button>
                </div>
                <div className=""></div>
            </div>
            <div className="mt-10 md:mt-0">
                <div className="h-[350px]  bg-gray-500 rounded-3xl relative overflow-hidden">
                    <Image src='/news-12.jpg' fill alt='blog image' objectFit='cover' />
                </div>
                <div className="">
                    <h3 className='text-[20px] text-[#0e0322] font-bold mt-4'>How Do You Know If Your Product Has Hail Damage?</h3>
                    <Button className='uppercase text-sm font-semibold tracking-wider flex items-center mt-6' variant='ghost'><ArrowRight className='h-5 w-5 text-[#e6413b] mr-2' /> Continue Reading</Button>
                </div>
                <div className=""></div>
            </div>
            <div className="mt-10 md:mt-0">
                <div className="h-[350px]  bg-gray-500 rounded-3xl relative overflow-hidden">
                    <Image src='/news-13.jpg' fill alt='blog image' objectFit='cover' />
                </div>
                <div className="">
                    <h3 className='text-[20px] text-[#0e0322] font-bold mt-4'>How Do You Know If Your Product Has Hail Damage?</h3>
                    <Button className='uppercase text-sm font-semibold tracking-wider flex items-center mt-6' variant='ghost'><ArrowRight className='h-5 w-5 text-[#e6413b] mr-2' /> Continue Reading</Button>
                </div>
                <div className=""></div>
            </div>
            
        </div>
    </section>
  )
}

export default Blogs