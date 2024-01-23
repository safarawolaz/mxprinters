import { LucideBookOpen, PawPrintIcon } from 'lucide-react'
import React from 'react'

const WhyUs = () => {
  return (
    <section className='w-full min-h-screen bg-yellow-50  flex flex-col justify-center items-center px-4 md:px-10 py-20'>
         <div className="flex items-center gap-2">
            <PawPrintIcon className='w-5 h-5 text-[#db3a35]' />
            <p className='text-base font-bold uppercase text-[#db3a35]'>our attributes</p>
        </div>
        <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-8'>Deliver More Than You Expect</h3>
        <p className='text-base text-muted-foreground mt-8 text-center'>Some of the reasons to choose us</p>
        <div className="mt-10 md:flex gap-8 w-full items-center">
            <div className="basis-1/4  w-full">
                <div className="">
                    <h3 className='text-[20px] font-bold text-center md:text-right'>Quality Assurance</h3>
                    <p className='text-base text-muted-foreground text-center md:text-right'>
                    Our commitment to delivering exceptional print quality, creative design, and promotional excellence is unwavering
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-right'>Timely Delivery</h3>
                    <p className='text-base text-muted-foreground text-center md:text-right'>
                    We understand the importance of deadlines. Count on us to deliver your prints, designs, and promotional products on time, every time.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-right'>Innovation</h3>
                    <p className='text-base text-muted-foreground text-center md:text-right'>
                    Embrace the latest in printing, design, and promotional technology. We stay ahead of the curve to bring you cutting-edge solutions.
                    </p>
                </div>
            </div>
            <div className="basis-2/4 hidden md:flex justify-center ">
                <div className="h-[350px] w-[350px] bg-gray-500 rounded-full"></div>
            </div>
            <div className="mt-20 md:mt-0 basis-1/4 w-full">
            <div className="">
                    <h3 className='text-[20px] font-bold text-center md:text-left'>Dedicated Support: </h3>
                    <p className='text-base text-muted-foreground text-center md:text-left'>
                    Our team is here for you at every step. From concept to completion, we provide personalized support to ensure your vision is realized.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-left'>Cost Effective</h3>
                    <p className='text-base text-muted-foreground text-center md:text-left'>
                        Our products are cost effective. We ensure we provide you the best quality without  breaking your bank.
                    </p>
                </div>
                <div className="mt-20">
                    <h3 className='text-[20px] font-bold text-center md:text-left'>Comprehensive Services</h3>
                    <p className='text-base text-muted-foreground text-center md:text-left'>
                    From print to design to promotional products, we offer a one-stop solution for all your needs.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs