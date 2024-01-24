'use client'
import { Button } from '../ui/button'

import { AlignRight } from 'lucide-react'

import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
}
from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const links = [
    {
        id: 1,
        name: 'about',
        url: '/about'
    },
    {
        id: 2,
        name: 'services',
        url: '/services'
    },
    {
        id: 3,
        name: 'projects',
        url: '/projects'
    },
    {
        id: 4,
        name: 'blogs',
        url: '/blogs'
    },
    {
        id: 5,
        name: 'contact',
        url: '/contact'
    },
]

const MobileLink = () => {
   const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger><AlignRight className='w-7 h-7 lg:hidden' /></SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetDescription>
                    <div className="">
                        <SheetClose asChild>
                        <Link href='/' className="h-[48px] w-60 relative z-10">
                            <Image src="/makhosi-logo.png" fill alt="logo"  />
                        </Link>
                        </SheetClose>
                    </div>
                    <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10 font-semibold">
                        {
                            links.map(link => (
                                <SheetClose asChild key={link.id} >
                                    <Link href={link.url} className={cn('uppercase text-base font-semibold tracking-widest hover:translate-x-2 hover:text-orange-700 transition-all',
                                        {
                                            'text-orange-700 font-bold transition-all' : pathname === link.url
                                        }
                                    )}>
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))
                        }
                    </div>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileLink