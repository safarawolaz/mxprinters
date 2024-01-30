'use client'
import { cn } from '@/lib/utils'
import { AlignRight, ChevronDown, DribbbleIcon, FacebookIcon, InstagramIcon, PhoneIncoming, TwitterIcon, XIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import MobileLink from './MobileLink'

const links = [
    {
        id: 1,
        title: 'about',
        url: "/about"
    },
    {
        id: 2,
        title: 'services',
        url: "/services"
    },
    {
        id: 3,
        title: 'our work',
        url: "/projects"
    },
    {
        id: 5,
        title: 'contact',
        url: "/contact"
    },
]

const Navbar = () => {
    const pathname = usePathname()
  return (
    <header className='max-w-[1440px] mx-auto sticky top-0 z-40'>
        <div className='hidden lg:flex items-center py-2 justify-between px-10 bg-neutral-100  z-10'>
            <div className="flex items-center">
                <PhoneIncoming className='w-5 h-5 mr-2 text-[#4e4e4e]'  />
               <p className='text-[#1b1b1b] font-semibold'> Printing Sales: <span className='text-[#4e4e4e] font-bold'>(+27)-79-614-3665</span>  Service:<span className='text-[#4e4e4e] font-bold'> (+27) 71-035-8907</span> </p>
            </div>
            <div className="flex gap-2 items-center">
                <p className='font-semibold'>Follow on</p>
                <a href="#"><FacebookIcon className='h-4 w-4 mr-4' /></a>
                <a href="#"><XIcon className='h-4 w-4 mr-4 ' /></a>
                <a href="#"><InstagramIcon className='h-4 w-4 mr-4' /></a>
            </div>
        </div>
        <nav className='flex items-center py-6 lg:py-0 px-4 lg:px-10 justify-between bg-white shadow-lg  z-10'>
            <div className="flex gap-4  lg:gap-10 items-center">
                <Link href='/' className="h-[48px] w-60 relative z-10">
                    <Image src="/makhosi-logo.png" fill alt="logo"  />
                </Link>
                <ul className='hidden lg:flex lg:gap-2 xl:gap-8 items-center'>
                    {
                        links.map(link => (
                    <li key={link.id} className={cn(
                        'py-6 px-3 border-b-2 border-bg-transparent hover:border-[#df332b] transition-all',
                            {
                            'border-b-2 border-[#df332b]  transition-all' : pathname === link.url  ,
                            }
                        )}>
                        <Link href={link.url} className={cn('uppercase font-bold text-base tracking-tight flex items-center text-[#3a3a3a] gap-1 hover:text-[#df332b] transition-all', 
                            {
                            'text-[#df332b] font-bold transition-all' : pathname === link.url, 
                            }) }>
                          {link.title}
                        </Link>
                    </li>))
                    }
                </ul>
              
            </div>
            <div className="flex items-center gap-3">
                <Link href='/contact'>
                    <Button className='hidden sm:flex text-sm bg-[#df332b] hover:bg-[#d31006] text-white font-semibold tracking-widest rounded-xl' size='lg'>GET A QUOTE</Button>
                </Link>
                <MobileLink />
            </div>
        </nav>  
    </header>
  )
}

export default Navbar