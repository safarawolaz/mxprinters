import { LucideBookOpen } from 'lucide-react'
import React from 'react'

const SocialProof = () => {
  return (
    <section className='w-full min-h-[50vh] bg-white  flex flex-col justify-center items-center px-10 py-10 sm:py-20'>
        <h3 className='text-3xl sm:text-4xl font-bold mt-8'>Brands That Trust Our Products</h3>
        <p className='text-base text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
        <div className="w-full mt-10 flex flex-col sm:flex-row justify-center items-center sm:justify-around gap-4">
            <div className="h-32 w-32 bg-gray-500  rounded-full"></div>
            <div className="h-32 w-32 bg-gray-500 rounded-full"></div>
            <div className="h-32 w-32 bg-gray-500 rounded-full"></div>
            <div className="h-32 w-32 bg-gray-500 rounded-full"></div>
            <div className="h-32 w-32 bg-gray-500 rounded-full"></div>
        </div>
    </section>
  )
}

export default SocialProof