import { ArrowRight, LucideGift, PawPrintIcon, PenBoxIcon, PencilLine, Printer } from 'lucide-react'

const works = [
    {
        icon1: <ArrowRight />,
        icon2: <Printer />,
        heading: "Printing Services",
        desc: "We print Flyers, Posters, Brochures, Business Cards, Calenders etc."
    },
    {
        icon1: <ArrowRight />,
        icon2: <PenBoxIcon />,
        heading: "Graphic Design",
        desc: "We design Logos, Social Media Adverts, Posters, Flyers, Company Profiles etc ."
    },
    {
        icon1: <ArrowRight />,
        icon2: <LucideGift />,
        heading: "Promo Products",
        desc: "We do products such as Coffee Mugs, Pens, Caps, Badges, Paper Bags etc"
    },
    {
        icon1: <ArrowRight />,
        icon2: <LucideGift />,
        heading: "Branding",
        desc: "Car Branding, Sign Boards, T-Shirts, Banners etc"
    },
]

const Services = () => {
  return (
    <section
        className='w-full min-h-screen bg-white  flex flex-col justify-center items-center px-4 lg:px-10 py-20  lg:py-32'>
        <div className="flex items-center gap-2">
            <PawPrintIcon className='w-7 h-7 text-[#1b1b1b]' />
            <p className='text-base font-bold uppercase text-[#1b1b1b]'>what we do</p>
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold mt-4 tracking-wide  text-center text-[#1b1b1b]'>Quality Printing, Branding </h3>
        <h3 className='text-3xl sm:text-4xl font-bold   tracking-wide  text-center text-[#1b1b1b] mt-0'>Design & Promotional Products </h3>
        <p className='text-base text-muted-foreground font-medium mt-4 text-center'>Elevate your brand, captivate your audience, and bring your ideas to life with <br /> our exceptional design & printing services</p>

        <div className="mt-10 sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
            {
                works.map(work =>    
                    <div className="mt-4 sm:mt-0 p-6 bg-neutral-100 rounded-xl basis-1/3}" key={work.heading}>
                        <div className="flex justify-between">
                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                                <div className="w-7 h-7">
                                    {work.icon1}
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full ">
                                <div className="">
                                    {work.icon2}
                                </div>
                            </div>
                        </div>
                        <p className='text-base font-bold text-[#db3a35] mt-4'>OFFER</p>
                        <h3 className='text-2xl text-[#1b1b1b] font-bold mt-4'>{work.heading}</h3>
                        <p className='text-base text-muted-foreground font-medium mt-4'>{work.desc}</p>
                    </div>
                 )
            }
           
            {/* <div className="p-6 sm:p-10 mt-8 sm:mt-0 bg-yellow-50 rounded-lg basis-1/3">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-full">
                        <ArrowRight className='w-7 h-7 text-[#1b1b1b]' />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full ">
                        <PenBoxIcon className='w-12 h-12 text-[#1b1b1b] ' />
                    </div>
                </div>
                <p className='text-base font-semibold text-[#db3a35] mt-4'>OFFER</p>
                <h3 className='text-2xl text-[#0e0322] font-bold mt-4'>Design Services</h3>
                <p className='text-base text-muted-foreground mt-4'>We transform concepts into visually striking designs that perfectly complement your brand identity.</p>
            </div>
            <div className="p-6 sm:p-10 mt-8 sm:mt-0 bg-yellow-50 rounded-lg basis-1/3">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-full">
                        <ArrowRight className='w-7 h-7 text-[#1b1b1b]' />
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full ">
                        <LucideGift className='w-12 h-12 text-[#1b1b1b] ' />
                    </div>
                </div>
                <p className='text-base font-semibold text-[#db3a35] mt-4'>OFFER</p>
                <h3 className='text-2xl text-[#1b1b1b] font-bold mt-4'>Promotional Products</h3>
                <p className='text-base text-muted-foreground mt-4'>Elevate your brand with our extensive range of promotional products. From branded merchandise to promotional giveaways.</p>
            </div>
             */}
        </div>

    </section>
  )
}

export default Services