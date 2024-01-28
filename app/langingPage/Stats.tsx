import { Button } from '@/components/ui/button'
import { LucideAlarmClock, LucideBadgePercent, Printer, UserCheck2 } from 'lucide-react'
import React from 'react'

const Stats = () => {
  return (
    <section className='w-full min-h-screen bg-yellow-50  flex flex-col justify-center items-center px-4 lg:px-10 py-10'>
        <div className="mt-8 lg:mt-0 lg:flex gap-20 w-full h-full items-center">
            <div className="w-full lg:min-h-screen bg-[#010144] basis-1/2  rounded-3xl flex flex-col justify-center p-10 shadow-lg">
                <div className="flex items-center gap-4">
                    <LucideBadgePercent className='w-7 h-7 text-orange-700' />
                    <p className='text-lg text-[#e6413b] font-semibold uppercase'>
                        interesting milestones
                    </p>
                </div>
                <h3 className='text-4xl md:text-5xl text-white font-bold leading-[1.4] mt-8'>Our numbers speak for themselves, giving value to our clients allways</h3>
                <p className='text-base text-muted-foreground mt-8'>We allways strive to exceed our clients expectations by providing value for money
                </p>
                <Button className='text-sm bg-[#e6413b]  text-white font-semibold rounded-full inline-block mt-8 w-max tracking-tight' size='lg'>START YOUR PROJECT</Button>
            </div>
            <div className="mt-8 lg:mt-0 basis-1/2 w-full lg:flex gap-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl">
                        <h3 className='text-5xl text-orange-500 font-bold'>8+</h3>
                        <p className='text-base text-muted-foreground mt-8 text-center'>Years in the field of Printing Services</p>
                        <LucideAlarmClock className='w-16 h-16 text-orange-500 mt-8' />
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl">
                        <h3 className='text-5xl text-yellow-500 font-bold'>1.2k</h3>
                        <p className='text-base text-muted-foreground mt-8 text-center'>Items printed by team members</p>
                        <Printer  className='w-16 h-16 text-yellow-500 mt-8' />
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 flex flex-col items-center justify-center p-8 bg-white h-max self-center rounded-3xl">
                        <h3 className='text-5xl text-green-400 font-bold'>1000+</h3>
                        <p className='text-base text-muted-foreground mt-8 text-center'>Active users products created</p>
                        <UserCheck2 className='w-16 h-16 text-green-400 mt-8' />
                    </div>
                
            </div>
        </div>
    </section>
  )
}

export default Stats