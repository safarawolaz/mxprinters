import { Button } from '@/components/ui/button'
import { ArrowBigRight, ArrowRight, LucideAward } from 'lucide-react'
import React from 'react'

const Blogs = () => {
  return (
    <section className='w-full min-h-screen bg-white  flex flex-col justify-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <LucideAward className='w-6 h-6 text-orange-700' />
            <p className='uppercase text-base text-orange-700 font-bold'>recent blogs</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
            <h3 className='text-3xl sm:text-4xl font-bold'>News And Insights</h3>
            <Button className='text-sm bg-orange-700 text-white font-semibold rounded-full inline-block mt-8 w-max tracking-tight my-auto' size='lg' >MORE BLOGS</Button>
        </div>
        <div className="mt-10 md:flex gap-4 md:gap-8">
            <div className="">
                <div className="h-[350px] w-full bg-gray-500 rounded-3xl"></div>
                <div className="">
                    <h3 className='text-[20px] font-bold mt-4'>How Do You Know If Your Product Has Hail Damage?</h3>
                    <Button className='uppercase text-sm font-semibold tracking-wider flex items-center mt-10' variant='ghost'><ArrowRight className='h-5 w-5 text-orange-700 mr-2' /> Continue Reading</Button>
                </div>
                <div className=""></div>
            </div>
            <div className="">
                <div className="h-[350px] w-full bg-gray-500 rounded-3xl"></div>
                <div className="">
                    <h3 className='text-[20px] font-bold mt-4'>How Do You Know If Your Product Has Hail Damage?</h3>
                    <Button className='uppercase text-sm font-semibold tracking-wider flex items-center mt-10' variant='ghost'><ArrowRight className='h-5 w-5 text-orange-700 mr-2' /> Continue Reading</Button>
                </div>
                <div className=""></div>
            </div>
            <div className="">
                <div className="h-[350px] w-full bg-gray-500 rounded-3xl"></div>
                <div className="">
                    <h3 className='text-[20px] font-bold mt-4'>How Do You Know If Your Product Has Hail Damage?</h3>
                    <Button className='uppercase text-sm font-semibold tracking-wider flex items-center mt-10' variant='ghost'><ArrowRight className='h-5 w-5 text-orange-700 mr-2' /> Continue Reading</Button>
                </div>
                <div className=""></div>
            </div>
            
        </div>
    </section>
  )
}

export default Blogs