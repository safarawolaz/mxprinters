import { PawPrintIcon } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <section className='w-full min-h-screen bg-[#05010f]  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <PawPrintIcon className='w-5 h-5 text-[#e6413b]' />
            <p className='text-base font-bold uppercase text-[#e6413b]'>feedback</p>
        </div>
        <h3 className='text-3xl sm:text-4xl text-white font-bold mt-8'>Feedback From Our Customers</h3>
        <p className='text-base text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
        <div className="mt-10 md:flex gap-10">
            <div className="p-10 border-dashed border-[1px] border-muted-foreground rounded-3xl">
                <h3 className='text-2xl text-white font-bold tracking-wide '>Pleasure to do business with</h3>
                <p className='text-[20px] text-muted-foreground mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro magnam animi quisquam tempora recusandae quod ab consectetur laborum, corporis sequi itaque rerum temporibus eligendi? Libero laboriosam aliquid ducimus? Illo!</p>
                <div className="mt-4 flex gap-4 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="">
                        <h3 className='text-white text-[20px] font-bold'>Nora Penelope</h3>
                        <p className='text-red-800 font-base mt-2'>Manager - Corporate Affairs</p>
                    </div>
                </div>
            </div>
            <div className="p-10 mt-8 md:mt-0 border-dashed border-[1px] border-muted-foreground rounded-3xl">
                <h3 className='text-2xl text-white font-bold tracking-wide'>Exceeded my expectations</h3>
                <p className='text-[20px] text-muted-foreground mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro magnam animi quisquam tempora recusandae quod ab consectetur laborum, corporis sequi itaque rerum temporibus eligendi? Libero laboriosam aliquid ducimus? Illo!</p>
                <div className="mt-4 flex gap-4 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="">
                        <h3 className='text-white text-[20px] font-bold'>Nora Penelope</h3>
                        <p className='text-red-800 font-base mt-2'>Manager - Corporate Affairs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials