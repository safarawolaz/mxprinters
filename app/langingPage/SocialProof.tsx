import { LucideBookOpen } from 'lucide-react'
import React from 'react'

const SocialProof = () => {
  return (
    <section className='w-full min-h-[50vh] bg-white  flex flex-col justify-center items-center px-10 py-20'>
       
        <h3 className='text-3xl sm:text-4xl font-bold mt-8'>Brands That Trust Our Products</h3>
        <p className='text-base text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia?</p>
        <div className="w-full mt-10 flex gap-4">
            <div className="h-20 bg-gray-500 w-full rounded-3xl"></div>
            <div className="h-20 bg-gray-500 w-full rounded-3xl"></div>
            <div className="h-20 bg-gray-500 w-full rounded-3xl"></div>
            <div className="h-20 bg-gray-500 w-full rounded-3xl"></div>
            <div className="h-20 bg-gray-500 w-full rounded-3xl"></div>
        </div>
    </section>
  )
}

export default SocialProof