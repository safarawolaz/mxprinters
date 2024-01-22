import { Button } from '@/components/ui/button'
import { ArrowRight, PawPrintIcon, Plus } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className='w-full min-h-screen bg-yellow-50  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
            <PawPrintIcon className='w-5 h-5 text-[#e6413b]' />
            <p className='text-base font-bold uppercase text-[#e6413b]'>get in touch</p>
        </div>
        <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-8'>Contact Us & Learn More</h3>
        <p className='text-base text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
        <div className="lg:flex w-full mt-10 gap-10">
            <div className="basis-1/2 w-full p-4 sm:p-10 border border-dashed border-gray-300 rounded-3xl flex flex-col justify-center">
                <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300 ">
                    <p className='text-lg font-bold'>How do i get a quote from you?</p>
                    <Plus className='text-muted-foreground' />
                </div>
                <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300 ">
                    <p className='text-lg font-bold'>What type of products & services do you provide?</p>
                    <Plus className='text-muted-foreground' />
                </div>
                <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300 ">
                    <p className='text-lg font-bold'>Is white considered a printing color?</p>
                    <Plus className='text-muted-foreground' />
                </div>
                <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300 ">
                    <p className='text-lg font-bold'>What form of payment do you accept?</p>
                    <Plus className='text-muted-foreground' />
                </div>
                <Button className='text-sm font-bold tracking-wider mt-10 w-max hover:text-[#e6413b]' variant='ghost'><ArrowRight className='mr-2 font-bold w-4 h-4 hover:text-[#e6413b]' /> MORE QUESTIONS & ANSWERS</Button>
            </div>
            <div className="basis-1/2 w-full bg-white p-4 sm:p-10 rounded-3xl">
                <form className="flex flex-col gap-8">
                    <div className="flex gap-8">
                        <div className="basis-1/4 flex items-center justify-between">
                            <div className="text-base font-bold">Your Name</div>
                            <p className="font-bold">:</p>
                        </div>
                        <div className="basis-3/4 flex flex-col gap-8">
                            <input type='text' className='bg-transparent border-b border-dashed border-gray-300 py-2 w-full' placeholder='Your Name' />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="basis-1/4 flex items-center justify-between">
                            <div className="text-base font-bold">E-Mail</div>
                            <p className="font-bold">:</p>
                        </div>
                        <div className="basis-3/4 flex flex-col gap-8">
                            <input type='text' className='bg-transparent border-b border-dashed border-gray-300 py-2 w-full' placeholder='E-Mail' />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="basis-1/4 flex items-center justify-between">
                            <div className="text-base font-bold">Phone Number</div>
                            <p className="font-bold">:</p>
                        </div>
                        <div className="basis-3/4 flex flex-col gap-8">
                            <input type='text' className='bg-transparent border-b border-dashed border-gray-300 py-2 w-full' placeholder='Phone Number' />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="basis-1/4 flex items-center justify-between">
                            <div className="text-base font-bold">Subject</div>
                            <p className="font-bold">:</p>
                        </div>
                        <div className="basis-3/4 flex flex-col gap-8">
                            <input type='text' className='bg-transparent border-b border-dashed border-gray-300 py-2 w-full' placeholder='Subject' />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="basis-1/4 flex items-center justify-between">
                            <div className="text-base font-bold">Message</div>
                            <p className="font-bold">:</p>
                        </div>
                        <div className="basis-3/4 flex flex-col gap-8">
                            <input type='text' className='bg-transparent border-b border-dashed border-gray-300 py-2 w-full' placeholder='Brief Description' />
                        </div>
                    </div>
                    <Button className='bg-[#e6413b] py-7 text-white text-sm font-bold rounded-full tracking-wider' size='lg'>SEND MESSAGE</Button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact