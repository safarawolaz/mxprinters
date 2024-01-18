import { Button } from '@/components/ui/button'
import { LucideAward, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className='w-full min-h-screen bg-white  flex flex-col justify-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <LucideAward className='w-6 h-6 text-orange-700' />
            <p className='uppercase text-base text-orange-700 font-bold'>projects</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
            <div>
                <h3 className='text-3xl sm:text-4xl font-bold'>Recent Projects</h3>
            </div>
            <div className=''>
                <Button className='text-sm bg-orange-700 text-white font-semibold rounded-full mt-8 w-max tracking-tight my-auto' size='lg' >MORE PROJECTS</Button>
            </div>
        </div>
        <div className="mt-10">
            <ul className='hidden lg:flex items-center justify-between gap-4 text-center'>
                <li className='text-[20px]  font-bold text-orange-700'>All Categories</li>
                <li><StarIcon className='w-4 h-4 text-muted-foreground' /></li>
                <li className='text-[20px] font-bold text-muted-foreground'>Garment Printing</li>
                <li><StarIcon className='w-4 h-4 text-muted-foreground' /></li>
                <li className='text-[20px] font-bold text-muted-foreground'>Litho Printing</li>
                <li><StarIcon className='w-4 h-4 text-muted-foreground' /></li>
                <li className='text-[20px] font-bold text-muted-foreground'>3D Printing</li>
                <li><StarIcon className='w-4 h-4 text-muted-foreground' /></li>
                <li className='text-[20px] font-bold text-muted-foreground'>Large Format Printing</li>
                <li><StarIcon className='w-4 h-4 text-muted-foreground' /></li>
                <li className='text-[20px] font-bold text-muted-foreground'>Digital Printing</li>
            </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 h-[3100px] sm:h-[900px] gap-8 mt-8">
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
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-4.jpg' fill alt='project 4 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-400 rounded-3xl relative overflow-hidden">
                <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-5.jpg' fill alt='project 5 image' objectFit='cover' />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-400 rounded-3xl relative overflow-hidden">
             <Image className='hover:scale-110 transition-all duration-300 cursor-pointer' src='/project-6.jpg' fill alt='project 6 image' objectFit='cover' />
            </div>
        </div>
    </section>
  )
}

export default Projects