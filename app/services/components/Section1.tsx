import { Button } from '@/components/ui/button'
import { FactoryIcon, LucideActivity, LucideDiamond, Milestone, UserCheckIcon, UserCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <section className='w-full min-h-screen bg-white lg:flex justify-center items-center px-4 lg:px-10 py-20 gap-10'>
        <div className="basis-1/2 relative rounded-3xl overflow-hidden">
            <Image src='/serviceImg1.jpg' width={2000} height={1830} alt='about image' objectFit='cover' /> 
        </div>
        <div className="basis-1/2 flex flex-col mt-12 md:mt-0">
            <div className="">
                <div className="flex items-center gap-2">
                    <UserCircle  className='w-5 h-5 text-orange-700' />
                    <p className='uppercase text-orange-700 font-base font-bold'>Our Services</p>
                </div>
                <h3 className='text-3xl  sm:text-4xl font-bold mt-4 leading-[1.3]'>For all your Printing Requirements</h3>
                <p className='text-base text-muted-foreground mt-8 md:leading-[1.9]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil molestias nobis iusto obcaecati placeat eius magnam eum hic fuga molestiae, libero optio a ab fugit quis reprehenderit suscipit blanditiis voluptate inventore.</p>
               <div className="mt-8 flex gap-8">
                <div className="flex flex-col gap-6">
                    <FactoryIcon className='w-10 h-10 text-orange-700' />
                    <h3 className='text-[20px] font-bold'>For Industries</h3>
                    <p className='text-base text-muted-foreground leading-[1.3]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati soluta eaque vero nam est esse commodi!</p>
                </div>
                <div className="flex flex-col gap-6">
                    <UserCheckIcon className='w-10 h-10 text-orange-700' />
                    <h3 className='text-[20px] font-bold'>For Individuals</h3>
                    <p className='text-base text-muted-foreground leading-[1.3]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati soluta eaque vero nam est esse commodi!</p>
                </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Section1