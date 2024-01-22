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
        title: 'projects',
        url: "/projects"
    },
    {
        id: 4,
        title: 'blogs',
        url: "/blogs"
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
    <header className='sticky top-0 left-0 right-0 z-50'>
        <div className='hidden lg:flex items-center py-2 justify-between px-10 bg-yellow-50'>
            <div className="flex items-center">
                <PhoneIncoming className='w-5 h-5 mr-2'  />
               <p className='text-[##0e0322] font-semibold'> Printing Sales: <span className='text-muted-foreground font-semibold'>(+27)-79-614-3665</span>  Service:<span className='text-muted-foreground font-semibold'> (+27) 83-756-8968</span> </p>
            </div>
            <div className="flex gap-2 items-center">
                <p className='font-semibold'>Follow on</p>
                <a href="#"><FacebookIcon className='h-4 w-4 mr-4' /></a>
                <a href="#"><XIcon className='h-4 w-4 mr-4 ' /></a>
                <a href="#"><InstagramIcon className='h-4 w-4 mr-4' /></a>
            </div>
        </div>
        <nav className='flex items-center py-6 lg:py-0 px-4 lg:px-10 justify-between bg-white shadow-lg sticky top-0 left-0 right-0'>
            <div className="flex gap-4  lg:gap-10 items-center">
                <Link href='/' className="h-[48px] w-60 relative z-10">
                    <Image src="/makhosi-logo.png" fill alt="logo"  />
                </Link>
                <ul className='hidden lg:flex gap-4 xl:gap-8 items-center'>
                    {
                        links.map(link => (
                    <li key={link.id} className={cn(
                        'py-6 px-3 border-b-2 border-bg-transparent hover:border-[#dd0f08] transition-all',
                            {
                            'border-b-2 border-[#dd0f08]  transition-all' : pathname === link.url  ,
                            }
                        )}>
                        <Link href={link.url} className={cn('uppercase font-bold text-base tracking-widest flex items-center text-[#0e0322] gap-1 hover:text-[#dd0f08] transition-all', 
                            {
                            'text-[#dd0f08] font-bold transition-all' : pathname === link.url, 
                            }) }>
                          {link.title}
                        </Link>
                    </li>))
                    }
                </ul>
              
            </div>
            <div className="flex items-center gap-3">
                <Button className='hidden sm:flex text-sm bg-[#dd0f08] text-white font-semibold tracking-widest rounded-full' size='lg'>GET A QUOTE</Button>
                <MobileLink />
            </div>
        </nav>  
    </header>
  )
}

export default Navbar