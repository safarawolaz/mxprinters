import Btn from '@/components/shared/Btn'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='w-full min-h-[100vh] bg-white flex flex-col items-center justify-center bg-hero bg-fixed bg-cover bg-center overflow-hidden pt-[-180px]'>
        <h1 className='text-5xl sm:text-7xl text-white font-bold max-w-3xl  text-center'>Total Printing, Design & Branding Solutions</h1>
        <h1 className='mt-4 text-lg font-medium tracking-wider text-neutral-300 max-w-sm text-center'>
          We offer effective and qualitative Printing, Design and Branding Services at all times.
        </h1>
        <Link href='/services' className='mt-8'>
          <Btn text="learn more" />
        </Link>
    </section>
  )
}

export default Hero