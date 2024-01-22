import { ArrowRight, LucideGift, PawPrintIcon, PenBoxIcon, PencilLine, Printer } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <section
        className='w-full min-h-screen bg-white  flex flex-col justify-center items-center px-4 lg:px-10 py-20  lg:py-32'>
        <div className="flex items-center gap-2">
            <PawPrintIcon className='w-5 h-5 text-[#db3a35]' />
            <p className='text-base font-bold uppercase text-[#db3a35]'>what we do</p>
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold mt-4 tracking-wide  text-center text-[#0e0322]'>Quality Printing & </h3>
        <h3 className='text-3xl sm:text-4xl font-bold mt-4  tracking-wide  text-center text-[#0e0322] mt-[-0px]'>Promotional Products Company </h3>
        <p className='text-base text-muted-foreground mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dicta?</p>

        <div className="mt-10 sm:flex gap-10">
            <div className="p-6 sm:p-10 bg-[#fff3f3] rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#fadede] rounded-full">
                        <ArrowRight className='w-7 h-7 text-[#db3a35]' />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full ">
                        <Printer className='w-12 h-12 text-[#db3a35] ' />
                    </div>
                </div>
                <p className='text-base font-semibold text-[#db3a35] mt-4'>OFFER</p>
                <h3 className='text-2xl text-[#0e0322] font-bold mt-4'>Printing Services</h3>
                <p className='text-base text-muted-foreground mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, recusandae...</p>
            </div>
            <div className="p-6 sm:p-10 mt-8 sm:mt-0 bg-[#fff3f3] rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#fadede] rounded-full">
                        <ArrowRight className='w-7 h-7 text-[#db3a35]' />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full ">
                        <PenBoxIcon className='w-12 h-12 text-[#db3a35] ' />
                    </div>
                </div>
                <p className='text-base font-semibold text-[#db3a35] mt-4'>OFFER</p>
                <h3 className='text-2xl text-[#0e0322] font-bold mt-4'>Design Services</h3>
                <p className='text-base text-muted-foreground mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, recusandae...</p>
            </div>
            <div className="p-6 sm:p-10 mt-8 sm:mt-0 bg-[#fff3f3] rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#fadede] rounded-full">
                        <ArrowRight className='w-7 h-7 text-[#db3a35]' />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full ">
                        <LucideGift className='w-12 h-12 text-[#db3a35] ' />
                    </div>
                </div>
                <p className='text-base font-semibold text-[#db3a35] mt-4'>OFFER</p>
                <h3 className='text-2xl text-[#0e0322] font-bold mt-4'>Promotional Products</h3>
                <p className='text-base text-muted-foreground mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, recusandae...</p>
            </div>
            
        </div>

    </section>
  )
}

export default Services