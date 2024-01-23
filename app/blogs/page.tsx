import HeroSm from '@/components/shared/HeroSm'
import { Button } from '@/components/ui/button'
import { ArrowRight, Share, Share2, Star} from 'lucide-react'
import Image from 'next/image'

const blogsItems = [
            {
              imgUrl: '/news-10.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'How Do You Know If Your Product Has Hail Damage'
            },
            {
              imgUrl: '/news-11.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Protecting Goods To Foster local solutions to Global'
            },
            {
              imgUrl: '/news-12.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Equitable Voting Is A Must For A Better Future'
            },
            {
              imgUrl: '/news-13.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Delivering What Consumers Really Value'
            },
            {
              imgUrl: '/news-14.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'A Non Emergency Trusted Product Service'
            },
            {
              imgUrl: '/news-15.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Working For The Service Is Much More'
            },
            {
              imgUrl: '/news-16.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Trusted, International Free Product Company '
            },
            {
              imgUrl: '/news-10.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Five Ways To Say Thank You To Your Customers'
            },
            {
              imgUrl: '/news-11.jpg',
              category: 'digital',
              icon1: '*',
              date: 'August 12 2023',
              icon2: <Share2 />,
              desc: 'Why Does Your Business Need Large Printing'
            },
]

const blogs = (): any => {
  return (
    <section className='bg-50 min-h-screen'>
        <div className="px-4 lg:px-10">
            <HeroSm header='News & Insights#' subHeader='Read Latest News'/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                {
                  blogsItems.map((blogItem, index) => 
                    <div key='index' className='col-span-1 row-span-1 cursor-pointer'>
                        <div className="">
                          <div className="h-[350px] relative">
                            <Image src={blogItem.imgUrl} fill alt='blog image'  />
                            <div className="absolute bottom-4 px-5  flex  justify-between items-center w-full bg-white rounded-full">
                              <div className="flex items-center gap-4">
                                  <p className='bg-red-400 text-white px-6 py-2 ml-[-12px] uppercase tracking-wider font-semibold text-base rounded-full my-2'>       
                                      {blogItem.category}
                                  </p>
                                  <p className="text-3xl text-red-400">
                                    {blogItem.icon1}
                                  </p>
                                  <p className='text-muted-foreground'>{blogItem.date}</p>
                              </div>
                              <div className="w-4 h-4">{blogItem.icon2}</div>
                            </div>
                          </div>
                          <h3 className='text-xl font-semibold mt-6'>{blogItem.desc}</h3>
                          <Button className='text-sm mt-10 tracking-wider font-bold uppercase mb-4' variant='ghost'><ArrowRight className='w-5 h-5 mr-2 text-orange-700' />continue reading</Button>
                        </div>
                   </div>
                   )
                }
            </div>
        </div>
    </section>
  )
}

export default blogs