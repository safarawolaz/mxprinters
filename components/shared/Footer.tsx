import { ArrowRight, Dot, DribbbleIcon, FacebookIcon, InstagramIcon, LucideCheckCircle2, MailCheckIcon, MailIcon, MapPinIcon, PhoneIncomingIcon, TwitterIcon, XIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <section className='w-full  bg-[#070114]  flex flex-col px-4 lg:px-10 py-10 '>
        <div className="md:flex justify-between items-center w-full  pb-10 border-b border-dashed border-gray-700">
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
                    </div>
                    <div className="hidden sm:flex items-center gap-2 mt-4">
                        <p className='text-base text-muted-foreground'>About</p>
                            <Dot className='text-muted-foreground text-2xl' />
                        <p className='text-base text-muted-foreground'>Contact</p>
                            <Dot className='text-muted-foreground text-2xl' />
                        <p className='text-base text-muted-foreground'>Our Work</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10 grid  sm:grid-cols-4 gap-4 pb-10">
            <div className="">
               
                <h3 className='text-[20px] text-white font-bold tracking-wider'>Get in touch</h3>
                <div className="flex items-center mt-4">
                    <MailCheckIcon className='text-gray-400 w-4 h-4 mr-2' />
                    <div className='text-muted-foreground text-base '>info@makhosi.co.za</div>
                </div>
                <div className="flex items-center mt-2">
                    <PhoneIncomingIcon className='text-gray-400 w-4 h-4 mr-2' />
                    <div className='text-muted-foreground text-base '>(+27)-79-614-3665</div>
                </div>
                <div className="flex items-start mt-2">
                    <MapPinIcon className='text-gray-400 w-5 h-5 mr-2' />
                    <p className='text-muted-foreground text-base'>
                        Office No 2 Voortrekker Street <br /> Beysan Building <br /> Mbombela 1200
                    </p>
                </div>
            </div>
            <div className="">
                <h3 className='text-[20px] text-white font-bold tracking-wider'>Links</h3>
                <ul className='mt-6 flex flex-col gap-3'>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />About Us</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Contact</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Our Work</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Team</li>
                </ul>
            </div>
            <div className="">
               <h3 className='text-[20px] text-white font-bold tracking-wider'>Services</h3>
               <ul className='mt-6 flex flex-col gap-3'>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Promotional Products</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Design Services</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Printing Services</li>
                    <li className='text-base text-muted-foreground flex items-center gap-2'><LucideCheckCircle2 className='text-muted-foreground w-4 h-4' />Branding</li>
                </ul>
            </div>
            <div className="bg-[#e6413b] rounded-3xl p-6 text-center">
                <h3 className='text-base text-white font-bold tracking-widest'>PROMOTION</h3>
                <h3 className='text-2xl text-white font-bold leading-[1.2] mt-4 tracking-wider'>Everything to Market Your Business</h3>
                <Button className='text-sm font-medium tracking-wider rounded-full mt-6' size="sm">Start Today</Button>
            </div>
        </div>
    </section>
  )
}

export default Footer