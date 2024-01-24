import { Button } from '@/components/ui/button'
import { CheckCheck, CheckCircle2, FactoryIcon, UserCheck2, UserCheckIcon, UserCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <section className='w-full min-h-screen bg-white lg:flex justify-center items-center px-4 lg:px-10 py-20 gap-10'>
        <div className="basis-1/2 relative rounded-3xl overflow-hidden">
            <Image src='/serviceImg1.jpg' width={2000} height={1830} alt='about image' objectFit='cover' /> 
        </div>
        <div className="basis-1/2 flex flex-col mt-4 md:mt-0">
            <div className="">
                <div className="flex items-center gap-2">
                    <UserCheck2  className='w-7 h-7 text-[#e6413b]' />
                    <p className='uppercase text-[#e6413b] font-base font-bold'>Our Services</p>
                </div>
                <h3 className='text-3xl  sm:text-4xl font-bold mt-4 leading-[1.3]'>Our Comprehensive Solutions</h3>
                <p className='text-base text-muted-foreground mt-4 md:leading-[1.9]'>We provide a range of services to our valued clients which are listed below.</p>
               <div className="mt-8 flex flex-col gap-2">
                <div className="flex">
                    <CheckCheck className='text-[#e6413b] w-12 h-12 mr-2' />
                    <p className='text-base'>
                        <span className='font-bold mr-2'>🌈 Wide Format Printing:</span>
                        <span className='text-muted-foreground'>
                             Make a bold statement with our wide format printing. From posters to banners, we turn any size project into a visual masterpiece.
                        </span>
                    </p>
                </div>
                <div className="flex">
                    <CheckCheck className='text-[#e6413b] w-12 h-12 mr-2' />
                    <p className='text-base'>
                        <span className='font-bold mr-2'>🎨 Creative Design Services:</span>
                        <span className='text-muted-foreground'>
                            Our design team transforms concepts into visually striking designs that perfectly complement your brand identity.
                        </span>
                    </p>
                </div>
                <div className="flex">
                    <CheckCheck className='text-[#e6413b] w-12 h-12 mr-2' />
                    <p className='text-base'>
                        <span className='font-bold mr-2'>🎁 Promotional Products:</span>
                        <span className='text-muted-foreground'>
                             Elevate your brand with our extensive range of promotional products. From branded merchandise to promotional giveaways, we help you make a lasting impression.
                        </span>
                    </p>
                </div>
                <div className="flex">
                    <CheckCheck className='text-[#e6413b] w-12 h-12 mr-2' />
                    <p className='text-base'>
                        <span className='font-bold mr-2'>🖨️ Digital Printing:</span>
                        <span className='text-muted-foreground'>
                            For quick turnarounds without compromising quality, our digital printing services are tailored to meet your on-demand printing needs.
                        </span>
                    </p>
                </div>
                
               </div>
            </div>
        </div>
    </section>
  )
}

export default Section1