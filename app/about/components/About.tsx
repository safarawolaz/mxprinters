import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-full  bg-white  lg:flex justify-center  px-4 lg:px-10 py-10 lg:py-20 gap-10'>
        <div className="basis-1/2 hidden lg:flex h-full relative rounded-3xl overflow-hidden">
            <Image src='/abtImg.jpg' width={1000} height={907} className='w-full h-full object-fit object-center' alt='about image' /> 
        </div>
        <div className="mt-8 lg:mt-0 basis-1/2 h-full flex flex-col">
            <div className="">
            <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl font-bold leading-[1.3]'>
              Background
            </h3>
                <p className='text-base text-muted-foreground font-medium mt-4 leading-[1.3]'>Makhosi Production and Distribution (PTY) LTD is a company which provides Printing Solutions, Graphic Design, Branding and Promotional Material Services in Mpumalanga. The company has been in operation for more than 10 years.
                We provide services to clients in Governmant Departments, NGOs, small firms and individuals. We also wish to extend our services beyond Mpumalanga to other provinces in South Africa. Makhosi Production & Distribution is a fully black owned company with 100% HDI status. When outsourcing we give preference to historically disadvantaged companies. We also endorse Black Economic Empowerment but we also acknowledge the diversity of the South African market. The company also contributes to charity by donating to various charity organisations as part of its social responsibility. </p>
                <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl font-bold mt-4 leading-[1.3]'>Our Vision</h3>
                <p className='text-base text-muted-foreground font-medium mt-4 leading-[1.3]'>To be a dynamic leader in total printing solutions in the printing industry.</p>
                <h3 className='text-3xl text-[#1b1b1b] sm:text-4xl font-bold mt-4 leading-[1.3]'>Our Mission</h3>
                <p className='text-base text-muted-foreground font-medium mt-4 leading-[1.3]'>To develop and provide integrated promotions and implement an effective communication strategy for our customers and to render effective and qualitative services to our clients at all times regardless of social standing, color, race, gender and improve our earnings in a socially responsible manner.</p>
            </div>
        </div>
    </section>
  )
}

export default About