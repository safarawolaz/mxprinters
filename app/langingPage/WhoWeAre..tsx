import Btn from '@/components/shared/Btn'
import { Button } from '@/components/ui/button'
import {  LucideDiamond, Milestone, ScanEyeIcon, UserPlus2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section 
    className='w-full min-h-screen bg-white  lg:flex justify-center items-center px-4 lg:px-10 pt-0  gap-10
    pb-20'>
        <div className="basis-1/2 relative rounded-3xl overflow-hidden">
            <Image src='/aboutUsImg.jpg' width={2000} height={1866} alt='about image' objectFit='cover' /> 
        </div>
        <div className="mt-8 lg:mt-0 basis-1/2 flex flex-col">
            <div className="">
                <div className="flex items-center gap-2">
                    <UserPlus2  className='w-7 h-7 text-[#1b1b1b]' />
                    <p className='uppercase text-[#1b1b1b] font-base font-bold'>Who We Are</p>
                </div>
                <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl font-bold mt-10 leading-[1.3]'>Leading Printing Agency in Mbombela</h3>
                <p className='text-base font-medium text-muted-foreground mt-8 leading-[1.9]'>Welcome to Makhosi Production & Distribution (PTY) LTD, where innovation meets print. Elevate your brand with our cutting-edge printing solutions that transform ideas into tangible, vibrant realities. Discover the power of print with us!</p>
                <div className='mt-8'>
                    <Link href='/about'>
                        <Btn text='more about us' />
                    </Link>
                </div>
                <div className="mt-10">
                    <div className="flex items-center gap-2 mt-4">
                        <Milestone className='text-[#1b1b1b]' /> 
                        <Button className='text-sm text-[#1b1b1b] font-bold border rounded-full' variant='ghost'>
                            OUR MISSION AND PROMISE TO YOU
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <ScanEyeIcon className='text-[#1b1b1b]' /> 
                        <Button className='text-sm text-[#1b1b1b] font-bold border rounded-full' variant='ghost'>
                            OBLIGATION VISION AND VALUES
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <LucideDiamond className='text-[#1b1b1b]' /> 
                        <Button className='text-sm text-[#1b1b1b] font-bold border rounded-full' variant='ghost'>
                            GUIDING PRINCIPLES
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre