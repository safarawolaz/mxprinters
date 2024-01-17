import { LucideBookOpen, PawPrintIcon } from 'lucide-react'
import React from 'react'

const WhyUs = () => {
  return (
    <section className='w-full min-h-screen bg-orange-50  flex flex-col justify-center items-center px-4 md:px-10 py-20'>
         <div className="flex items-center gap-2">
            <PawPrintIcon className='w-5 h-5 text-orange-700' />
            <p className='text-base font-bold uppercase text-orange-700'>our attributes</p>
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold mt-8'>Deliver More Than You Expect</h3>
        <p className='text-base text-muted-foreground mt-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
        <div className="mt-10 md:flex gap-8 w-full items-center">
            <div className="basis-1/4  w-full">
                <div className="">
                    <h3 className='text-[20px] font-bold text-center md:text-right'>Professionalism</h3>
                    <p className='text-base text-muted-foreground text-center md:text-right'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-right'>Competitive Prices</h3>
                    <p className='text-base text-muted-foreground text-center md:text-right'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-right'>Professionalism</h3>
                    <p className='text-base text-muted-foreground text-right'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div className="basis-2/4 hidden md:flex justify-center ">
                <div className="h-[350px] w-[350px] bg-gray-500 rounded-full"></div>
            </div>
            <div className="mt-20 md:mt-0 basis-1/4 w-full">
            <div className="">
                    <h3 className='text-[20px] font-bold text-center md:text-left'>Quality Service</h3>
                    <p className='text-base text-muted-foreground text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-left'>Cost Effective</h3>
                    <p className='text-base text-muted-foreground text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-left'>Customization</h3>
                    <p className='text-base text-muted-foreground text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs