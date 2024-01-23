import HeroSm from '@/components/shared/HeroSm'
import { Button } from '@/components/ui/button'
import { ArrowRight, Computer, MailCheck, MailCheckIcon, MapPinIcon, MessageCircle, Phone, PhoneIncoming, User2Icon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section>
        <div className="px-4 lg:px-10">
            <HeroSm header='Contact Us#' subHeader='Talk To Us' />
        </div>
        <div className="w-full py-10 px-10 ">
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="shadow-lg w-full py-10 basi-1/3 flex flex-col items-center justify-center">
                  <PhoneIncoming className='text-[#e6413b]  w-10 h-10' />
                  <div className="mt-8 text-center text-base text-muted-foreground">
                    <p>If you need help. Dont look far, </p>
                    <p>call us today.</p>
                  </div>
                  <h3 className='text-[20px] font-bold mt-6'>(+27)-79-614-3665</h3>
                </div>
                <div className="shadow-lg w-full py-10 basi-1/3 flex flex-col items-center justify-center">
                  <MapPinIcon className='text-[#e6413b]  w-10 h-10' />
                  <div className="mt-8 text-center text-base text-muted-foreground">
                    <p>Visit our office</p>
                    <p>9am to 6pm Mon to Saturday</p>
                  </div>
                  <div className="text-[20px] font-bold mt-6 text-center">
                    <h3>Office No GN034A, Simunye Building</h3>
                    <h3>Andrew St, Mbombela.</h3>
                    <h3>1200</h3>
                  </div>
                  <Button className='text-sm uppercase font-bold tracking-wider flex items-center mt-6' variant='ghost'><ArrowRight className='w-5 h-5 text-[#e6413b] mr-2' />view on map</Button>
                </div>
                <div className="shadow-lg w-full py-10 basi-1/3 flex flex-col items-center justify-center">
                  <MailCheckIcon className='text-[#e6413b]  w-10 h-10' />
                  <div className="mt-8 text-center text-base text-muted-foreground">
                    <p>Do you have a project to work?</p>
                    <p>send your details</p>
                  </div>
                  <h3 className='text-[20px] font-bold mt-6 text-center'>info@makhosi.co.za</h3>
                </div>
              </div>
            </div>
            <form className="py-20 my-20 mx-4 lg:mx-10 bg-[#faf1ef] rounded-3xl">
              <div className="grid md:grid-cols-3 gap-8 px-4 lg:px-10">
                  <div className="basis-1/3 flex items-center relative" >
                      <input type='text' className='bg-white py-4 w-full rounded-xl px-4' placeholder='Name*' /> <User2Icon className='text-muted-foreground absolute right-4' />
                  </div>
                  <div className="basis-1/3 flex items-center relative" >
                      <input type='text' className='bg-white py-4 w-full rounded-xl px-4' placeholder='E-mail*' /> <MailCheck className='text-muted-foreground absolute right-4' />
                  </div>
                  <div className="basis-1/3 flex items-center relative" >
                      <input type='text' className='bg-white py-4 w-full rounded-xl px-4' placeholder='Phone*' /> <Phone className='text-muted-foreground absolute right-4' />
                  </div>
              </div>
              <div className="mt-8 flex items-center relative px-4 lg:px-10">
                <input type='text' className='bg-white py-4 w-full rounded-xl px-4' placeholder='Website*' /> <Computer className='text-muted-foreground absolute right-14' />
              </div>
              <div className="px-4 lg:px-10 mt-10 flex items-center relative">
                <textarea className='bg-white w-full rounded-lg p-5' placeholder='Your Message*'  rows={10}></textarea> <MessageCircle className='text-muted-foreground absolute right-14 top-5' />
              </div>
              <div className="flex justify-center">
                <Button className='text-sm uppercase bg-[#e6413b] rounded-full text-white font-semibold tracking-widest mt-14' size='lg'>
                  send your message
                </Button>
              </div>
            </form>
    </section>
  )
}

export default page