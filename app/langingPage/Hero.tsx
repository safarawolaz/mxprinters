import { Button } from '@/components/ui/button'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='w-full min-h-[100vh] bg-white flex flex-col items-center justify-center bg-hero bg-fixed bg-cover bg-center overflow-hidden pt-[-180px]'>
        <h1 className='text-5xl sm:text-8xl text-gray-300 font-bold  text-center'>Leader in Total</h1>
        <h1 className='text-5xl sm:text-8xl text-gray-300 font-bold text-center'>Printing Solutions</h1>
        <p className='mt-4 text-lg text-gray-200 max-w-sm text-center'>
          Offering effective and qualitative printing services at all times.
        </p>
        <Button className='text-sm bg-[#df332b] hover:bg-[#d31006] py-7 px-14  text-white font-semibold tracking-widest rounded-xl mt-8' size='lg'>
          LEARN MORE
        </Button>
    </section>
  )
}

export default Hero