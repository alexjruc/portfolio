import { technologies } from "../utils/constants";
import TecchnologieCard from "./about/TecchnologieCard";

const About = () => {
    return (
        <section id="about" className="p-6 pb-14 grid gap-6 text-white max-w-[1000px] mx-auto">
            <h2 className="text-2xl font-semibold p-4">About</h2>
            <p className="text-justify px-10 "> 
                Hello, my name is Alex, passionate and dedicated junior fronted developer with solid foundations in the fundamentals and technologies of web development, excited to learn more every day and create new projects that are attractive and functional, currently with an educational background at ACADEMLO, a Mexican bootcamp, intensively where you learn with a lot of practice, as you can see in my projects!
            </p>
            <div className="grid gap-8 p-8 pb-10">
                <h3 className="text-lg font-semibold pb-10">Technologies</h3>
                <ul className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,_120px)]">
                    {technologies.map((technologie) => (
                        <TecchnologieCard
                            key={technologie.id}
                            technologie={technologie}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default About;
