import HeroSm from '@/components/shared/HeroSm'
import Projects from '../langingPage/Projects'

const projects = () => {
  return (
    <section>
        <div className="px-4 lg:px-10">
            <HeroSm  header='Our Projects#' subHeader='Some of Our Work'/>
        </div>
        <Projects />
    </section>
  )
}

export default projects