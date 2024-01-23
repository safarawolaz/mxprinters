
type heroSmprops = {
    header: string,
    subHeader: string
}
const HeroSm = ({header, subHeader}: heroSmprops ) => {
  return (
    <section className='min-h-[50vh]  lg:px-10 bg-yellow-50 flex flex-col items-center justify-center rounded-3xl'>
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight text-center">
            {header}
        </h1>
        <p className="text-lg font-semibold text-gray-800 mt-4">{subHeader}</p>
    </section>
  )
}

export default HeroSm