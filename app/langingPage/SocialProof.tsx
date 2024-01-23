import { LucideBookOpen } from 'lucide-react'
import React from 'react'

const SocialProof = () => {
  return (
    <section className='w-full min-h-[50vh] bg-white  flex flex-col justify-center items-center  px-10 py-10 sm:py-20'>
        <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-8 '>Brands That Trust Our Products</h3>
        <p className='text-base text-muted-foreground mt-8'>Here are some of the companies who value our services</p>
        <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 ">
            <div className="h-32 w-32 bg-gray-500  rounded-full">
            </div>
            <div className="h-32 w-32 bg-gray-500 rounded-full">
            </div>
            <div className="h-32 w-32 bg-gray-500 rounded-full">
            </div>
            <div className="h-32 w-32 bg-gray-500 rounded-full">
            </div>
        </div>
    </section>
  )
}

export default SocialProof