
type heroSmprops = {
    header: string,
    subHeader: string
}
const HeroSm = ({header, subHeader}: heroSmprops ) => {
  return (
    <section className='min-h-[50vh] px-4 lg:px-10 bg-orange-200 flex flex-col items-center justify-center rounded-[48px]'>
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
            {header}
        </h1>
        <p className="text-lg font-semibold text-gray-800 mt-4">{subHeader}</p>
    </section>
  )
}

export default HeroSm