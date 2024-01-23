import { Button } from '@/components/ui/button'
import { ArrowRight, LucideBookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
    <section className='w-full min-h-screen bg-[#05010f]  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
    <div className="flex items-center gap-2">
      <LucideBookOpen className='w-5 h-5 text-[#e6413b]' />
      <p className='text-base font-bold uppercase text-[#e6413b]'>services</p>
    </div>
    <h3 className='text-4xl text-white font-bold mt-8'>The Complete Printing Solutions</h3>
    <p className='text-base text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
    <div className="mt-10 lg:flex gap-8">
            <div className="flex flex-col items-center justify-center gap-4 p-10 border border-dashed border-gray-400 rounded-3xl">
                    <div className="w-full h-[180px] bg-gray-400 rounded-2xl"></div>
                    <div className="text-[#e6413b] text-base font-bold tracking-wider uppercase">offer</div>
                    <div className="text-white text-[20px] font-bold capitalize">printing services</div>
                    <div className="text-base text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam tempore explicabo.</div>
                    <Link href='printing'>
                        <Button className='text-sm hover:bg-black hover:text-[#e6413b] text-white font-bold tracking-wider uppercase' variant='ghost' size='lg' >
                                <ArrowRight className='text-[#e6413b] hover:text-[#e6413b] w-5 h-5 mr-2' />
                                read more
                        </Button>
                    </Link>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col items-center justify-center gap-4 p-10 border border-dashed border-gray-400 rounded-3xl">
                    <div className="w-full h-[180px] bg-gray-400 rounded-2xl"></div>
                    <div className="text-[#e6413b] text-base font-bold tracking-wider uppercase">offer</div>
                    <div className="text-white text-[20px] font-bold capitalize">design services</div>
                    <div className="text-base text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam tempore explicabo.</div>
                    <Button className='text-sm hover:bg-black hover:text-[#e6413b] text-white font-bold tracking-wider uppercase' variant='ghost' size='lg' >
                        <ArrowRight className='text-[#e6413b] hover:text-[#e6413b] w-5 h-5 mr-2' />
                        read more
                    </Button>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col items-center justify-center gap-4 p-10 border border-dashed border-gray-400 rounded-3xl">
                    <div className="w-full h-[180px] bg-gray-400 rounded-2xl"></div>
                    <div className="text-[#e6413b] text-base font-bold tracking-wider uppercase">offer</div>
                    <div className="text-white text-[20px] font-bold capitalize">promotional products</div>
                    <div className="text-base text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam tempore explicabo.</div>
                    <Button className='text-sm hover:bg-black hover:text-[#e6413b] text-white font-bold tracking-wider uppercase' variant='ghost' size='lg' >
                        <ArrowRight className='text-[#e6413b] hover:text-[#e6413b] w-5 h-5 mr-2' />
                        read more
                    </Button>
            </div>
    </div>
</section>
  )
}

export default Section2