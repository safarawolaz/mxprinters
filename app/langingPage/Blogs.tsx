import Btn from '@/components/shared/Btn'
import { Button } from '@/components/ui/button'
import { ArrowBigRight, ArrowRight, LucideAward, LucideBookCheck, Users2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <section className='w-full min-h-screen bg-white  flex flex-col justify-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <Users2Icon className='w-7 h-7 text-[#1b1b1b]' />
            <p className='uppercase text-base text-[#1b1b1b] font-bold'>our team</p>
        </div>
        <div className="mt-2 ">
            <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl font-bold'>Meet Our Team</h3>
        </div>
        <div className="mt-10 sm:grid grid-cols-3 gap-10">
            <div className="">
                <div className="h-[350px] bg-gray-500 rounded-3xl relative overflow-hidden">
                    <Image src='/member1.jpg' fill alt='blog image' objectFit='cover'  />
                </div>
                <div className="">
                    <h3 className='text-[20px] text-[#1b1b1b] font-bold mt-4'>Mr N Nkosi</h3>
                    <p>CEO and Founder</p>
                </div>
                <div className=""></div>
            </div>
            <div className="mt-10 md:mt-0">
                <div className="h-[350px]  bg-gray-500 rounded-3xl relative overflow-hidden">
                    <Image src='/member2.jpg' fill alt='blog image' objectFit='cover' />
                </div>
                <div className="">
                    <h3 className='text-[20px] text-[#1b1b1b] font-bold mt-4'>Mr B Dlamini</h3>
                   <p>Sales and Marketing Manager</p>
                </div>
                <div className=""></div>
            </div>
            <div className="mt-10 md:mt-0">
                <div className="h-[350px]  bg-gray-500 rounded-3xl relative overflow-hidden">
                    <Image src='/member3.jpg' fill alt='blog image' objectFit='cover' />
                </div>
                <div className="">
                    <h3 className='text-[20px] text-[#1b1b1b] font-bold mt-4'>Mr C Shabangu</h3>
                    <p>Operation Manager</p>
                </div>
                <div className=""></div>
            </div>
            
        </div>
    </section>
  )
}

export default Blogs