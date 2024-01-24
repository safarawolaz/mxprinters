import { Button } from '@/components/ui/button'
import { LucideActivity, LucideDiamond, Milestone, UserPlus2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-full min-h-screen bg-white  lg:flex justify-center items-center px-4 lg:px-10 py-20 gap-10'>
        <div className="basis-1/2 relative rounded-3xl overflow-hidden">
            <Image src='/abtImg.jpg' width={2000} height={1814} alt='about image' objectFit='cover' /> 
        </div>
        <div className="mt-8 lg:mt-0 basis-1/2 flex flex-col">
            <div className="">
               
                <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-10 leading-[1.3]'>Our Vision</h3>
                <p className='text-base text-muted-foreground mt-4 leading-[1.9]'>To be a dynamic leader in total printing solutions in the printing industry</p>
                <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-6 leading-[1.3]'>Our Mission</h3>
                <p className='text-base text-muted-foreground mt-4 leading-[1.9]'>To develop and provide integrated promotions and implement an effective communication strategy for our customers and to render effective and qualitative services to our clients at all times regardless of social standing, color, race, gender and improve our earnings in a socially responsible manner</p>
                <h3 className='text-3xl text-[#0e0322] sm:text-4xl font-bold mt-6 leading-[1.3]'>Background</h3>
                <p className='text-base text-muted-foreground mt-4 leading-[1.9]'>Makhosi Production have experts who have extensive experience & knowledge in the industry. <br/>
                The company mainly serves clientele in Government Departments, NGOs, private firms and individuals. Most of our work is around Mpumalanga Province but we intend to extend our reach to neighbouring provinces such as Limpopo, KZN and Gauteng. </p>
            </div>
        </div>
    </section>
  )
}

export default About