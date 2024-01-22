import { ArrowRight, Dot, DribbbleIcon, FacebookIcon, InstagramIcon, LucideCheckCircle2, MailIcon, TwitterIcon, XIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <section className='w-full min-h-screen bg-black  flex flex-col px-4 lg:px-10 py-10 md:py-20'>
        <div className="md:flex justify-between items-center w-full  py-10 border-b border-dashed border-gray-700">
            <div className="">
                <Link href='/' className="h-[48px] w-60 relative z-10">
                    <Image src="/makhosi-logo.png" fill alt="logo"  />
                </Link>
                <p className='text-base text-muted-foreground mt-4'>CopyRight &copy; 2023 <span className='text-red-800'>Makhosi</span>. All rights reserved.</p>
            </div>
            <div className="mt-8 md:mt-0">
                <div className="">
                    <div className="flex items-center gap-4 sm:gap-10">
                        <p className='text-base font-semibold  text-white whitespace-nowrap'>Follow on</p>
                        <FacebookIcon className='w-5 h-5 text-muted-foreground' />
                        <XIcon className='w-5 h-5 text-muted-foreground' />
                        <InstagramIcon className='w-5 h-5 text-muted-foreground' />
                        <DribbbleIcon className='w-5 h-5 text-muted-foreground' />
                        <YoutubeIcon className='w-5 h-5 text-muted-foreground' />
                    </div>
                    <div className="hidden sm:flex items-center gap-2 mt-4">
                        <p className='text-base text-muted-foreground'>About</p>
                            <Dot className='text-muted-foreground text-2xl' />
                        <p className='text-base text-muted-foreground'>Contact</p>
                            <Dot className='text-muted-foreground text-2xl' />
                        <p className='text-base text-muted-foreground'>Pricing & Plan</p>
                            <Dot className='text-muted-foreground text-2xl' />
                        <p className='text-base text-muted-foreground'>Team</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-20">
            <div className="">
                <div className="h-12 w-12 bg-[#e6413b] flex items-center justify-center rounded-full">
                    <MailIcon className='text-white h-8 w-8' />
                </div>
                <h3 className='text-[20px] text-white font-bold tracking-wider mt-4'>Newsletter</h3>
                <p className='text-muted-foreground text-base mt-4'>Subscribe to get our companies news, offers & updates</p>
                <form action="" className='mt-4 flex items-center relative'>
                    <input type="text" className='bg-white py-4 w-full rounded-full' placeholder='E-Mail address' />
                    <div className="bg-black w-12 h-12 flex items-center justify-center rounded-full absolute right-1">
                        <ArrowRight className='w-6 h-6 text-white font-bold' />
                    </div>
                </form>
                <p className='text-base text-white mt-4'>Never spam 7 never share.</p>
            </div>
            <div className="">
                <h3 className='text-[20px] text-white font-bold tracking-wider'>Company</h3>
                <ul className='mt-6 flex flex-col gap-3'>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />About Us</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Contact</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Coming Soon</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Faqs</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Projects</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Team</li>
                </ul>
            </div>
            <div className="">
               <h3 className='text-[20px] text-white font-bold tracking-wider'>Essentials</h3>
               <ul className='mt-6 flex flex-col gap-3'>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Digital Signage</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Marketing Solutions</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Mailing Services</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Promotional Products</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Design Services</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Printing Services</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Garment Printing</li>
                </ul>
            </div>
            <div className="bg-[#e6413b] rounded-3xl p-10">
                <h3 className='text-base text-white font-bold tracking-widest'>PROMOTION</h3>
                <h3 className='text-2xl text-white font-bold leading-[1.5] mt-4 tracking-wider'>Everything to Market Your Business</h3>
                <Button className='text-sm font-bold tracking-wider rounded-full mt-6' size='lg'>START TODAY</Button>
            </div>
        </div>
    </section>
  )
}

export default Footer