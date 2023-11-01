import { projects } from "../utils/constants"
import ProjectCard from "./Portfolio/ProjectCard"


const Portfolio = () => {
    return (
        <section id="portfolio" className="p-6 pb-20 grid gap-10 text-white max-w-[1000px] mx-auto ">
            <h3 className="text-2xl font-semibold">Portfolio</h3>
            <ul className="grid gap-16 place-content-center grid-cols-[repeat(auto-fit,_280px)]">
                {
                    projects.map((project) => <ProjectCard key={project.id} project={project}/>)
                }
            </ul>
        </section>
    )
}
export default Portfolio