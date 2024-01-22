import { Button } from '@/components/ui/button'
import { LucideActivity, LucideDiamond, Milestone, UserCircle, UserPlus2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='w-full min-h-screen bg-white  lg:flex justify-center items-center px-4 lg:px-10 py-20 gap-10'>
        <div className="basis-1/2 relative rounded-3xl overflow-hidden">
            <Image src='/printAbout.jpg' width={2000} height={1859} alt='about image' objectFit='cover' /> 
        </div>
        <div className="mt-8 lg:mt-0 basis-1/2 flex flex-col">
            <div className="">
                <div className="flex items-center gap-2">
                    <UserPlus2  className='w-5 h-5 text-[#db3a35]' />
                    <p className='uppercase text-[#db3a35] font-base font-bold'>Who We Are</p>
                </div>
                <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-10 leading-[1.3]'>Leading Printing Agency in Mbombela</h3>
                <p className='text-base text-muted-foreground mt-8 leading-[1.9]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil molestias nobis iusto obcaecati placeat eius magnam eum hic fuga molestiae, libero optio a ab fugit quis reprehenderit suscipit blanditiis voluptate inventore non magni quidem adipisci et! Vero, quibusdam maxime.</p>
                <Button className='text-sm bg-[#db3a35] text-white font-semibold rounded-full inline-block mt-8 w-max tracking-tight' size='lg'>MORE ABOUT US</Button>
                <div className="mt-10">
                    <div className="flex items-center gap-2 mt-4">
                        <Milestone className='text-[#0e0322]' /> 
                        <Button className='text-sm text-[#0e0322] font-bold border rounded-full' variant='ghost'>
                            OUR MISSION AND PROMISE TO YOU
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <LucideActivity className='text-[#0e0322]' /> 
                        <Button className='text-sm text-[#0e0322] font-bold border rounded-full' variant='ghost'>
                            OBLIGATION VISION AND VALUES
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <LucideDiamond className='text-[#0e0322]' /> 
                        <Button className='text-sm text-[#0e0322] font-bold border rounded-full' variant='ghost'>
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