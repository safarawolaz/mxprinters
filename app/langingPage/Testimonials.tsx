import { PawPrintIcon, UserPlus2 } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <section className='w-full min-h-screen bg-[#070114]  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <UserPlus2 className='w-10 h-10 text-[#e6413b]' />
            <p className='text-base font-bold uppercase text-[#e6413b]'>feedback</p>
        </div>
        <h3 className='text-3xl sm:text-4xl text-white font-bold mt-8'>Feedback From Our Customers</h3>
        <p className='text-lg text-muted-foreground font-medium mt-8'>Here is what some of our customers say about our service</p>
        <div className="mt-10 md:flex gap-10">
            <div className="p-10 border-dashed border-[1px] border-muted-foreground rounded-3xl">
                <h3 className='text-2xl text-white font-bold tracking-wide '>Pleasure to do business with</h3>
                <p className='text-[20px] text-muted-foreground mt-4'>It was a great pleasure doing business with Makhosi Production and Distribution. They provide total quality service and they are always proffessional and friendly at all times. I would recommend them to anyone requiring printing and design services.</p>
                <div className="mt-4 flex gap-4 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="">
                        <h3 className='text-white text-[20px] font-bold'>Dudu Mkonto</h3>
                        <p className='text-red-800 font-base mt-2'>Manager - Lundi Attorneys</p>
                    </div>
                </div>
            </div>
            <div className="p-10 mt-8 md:mt-0 border-dashed border-[1px] border-muted-foreground rounded-3xl">
                <h3 className='text-2xl text-white font-bold tracking-wide'>Exceeded my expectations</h3>
                <p className='text-[20px] text-muted-foreground mt-4'>I never thought Makhosi Production and Distribution to provide us with the quality work they produced.We were pleasantly surprised and greatly satisfied with the work they did for us. They always go above and beyond whatis expected and are always cheerful and friendly.</p>
                <div className="mt-4 flex gap-4 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="">
                        <h3 className='text-white text-[20px] font-bold'>Steve Ramalata</h3>
                        <p className='text-red-800 font-base mt-2'>Sales Manager - Divine Electrics</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials