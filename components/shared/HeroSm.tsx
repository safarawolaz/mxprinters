
type heroSmprops = {
    header: string,
    subHeader: string
}
const HeroSm = ({header, subHeader}: heroSmprops ) => {
  return (
    <section className='min-h-[60vh]   bg-yellow-50 flex flex-col items-center justify-center  bg-heros bg-center bg-fixed pt-10'>
        <h1 className="text-6xl font-bold text-[#e2e2f8] tracking-tight text-center">
            {header}
        </h1>
        <p className="text-lg font-semibold text-gray-200 mt-4">{subHeader}</p>
    </section>
  )
}

export default HeroSm