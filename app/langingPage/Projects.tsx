import Btn from '@/components/shared/Btn'
import { Button } from '@/components/ui/button'
import { LucideAward, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className='w-full min-h-screen bg-white  flex flex-col justify-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <LucideAward className='w-7 h-7 text-[#1b1b1b]' />
            <p className='uppercase text-base text-[#1b1b1b] font-bold'>Our Work</p>
        </div>
        <div className="mt-2 flex  items-center">
            <div>
                <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl font-bold'>Our Recent Work</h3>
            </div>
            
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 h-[3100px] sm:h-[900px] gap-8 mt-10">
            <div className="col-span-1 row-span-2 bg-gray-400 rounded-3xl relative overflow-hidden">
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-1.jpg' fill alt='project 1 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-400 rounded-3xl relative overflow-hidden">
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-2.jpg' fill alt='project 2 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-2 bg-gray-400 rounded-3xl relative overflow-hidden">
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-3.jpg' fill alt='project 3 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-2 bg-gray-400 rounded-3xl relative overflow-hidden">
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-5.jpg' fill alt='project 4 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-400 rounded-3xl relative overflow-hidden">
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-4.jpg' fill alt='project 5 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-400 rounded-3xl relative overflow-hidden">
             <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-6.jpg' fill alt='project 6 image' objectFit='cover' />
            </div>
        </div>
    </section>
  )
}

export default Projects