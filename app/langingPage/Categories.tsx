import { Button } from '@/components/ui/button'
import { ArrowRight, LucideBookOpen } from 'lucide-react'
import React from 'react'

const Categories = () => {
  return (
    <section className='w-full min-h-screen bg-orange-50  flex flex-col justify-center items-center px-4 lg:px-10 py-20'>
        <div className="flex items-center gap-2">
          <LucideBookOpen className='w-5 h-5 text-orange-700' />
          <p className='text-base font-bold uppercase text-orange-700'>categories</p>
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold mt-8'>The Complete Printing Solutions</h3>
        <p className='text-base text-muted-foreground text-center mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
      <div className="mt-12 grid lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        <div className="bg-white p-10 rounded-3xl hover:translate-y-[-16px] transition-all  duration-500 cursor-pointer">
          <h3 className='text-2xl font-bold text-center'>Banners</h3>
          <p className='text-base text-muted-foreground text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full"></div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-orange-600 mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl">
          <h3 className='text-2xl font-bold text-center'>Booklets</h3>
          <p className='text-base text-muted-foreground text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full"></div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-orange-600 mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl">
          <h3 className='text-2xl font-bold text-center'>Business Cards</h3>
          <p className='text-base text-muted-foreground text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full"></div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-orange-600 mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl">
          <h3 className='text-2xl font-bold text-center'>Calenders</h3>
          <p className='text-base text-muted-foreground text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-6  flex justify-center">
            <div className="w-44 h-44 bg-gray-400 rounded-full"></div>
          </div>
          <div className='flex justify-center mt-6'>
            <Button className='text-sm  font-bold rounded-full w-max tracking-widest' size='lg' variant='ghost'><ArrowRight className='w-5 h-5 text-orange-600 mr-2' />
            READ MORE
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Button className='text-sm bg-orange-700 text-white font-semibold rounded-full inline-block mt-8 w-max tracking-tight' size='lg' >MORE CATEGORIES</Button>
      </div>
    </section>
  )
}

export default Categories