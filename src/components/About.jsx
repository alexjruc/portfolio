import { technologies } from "../utils/constants";
import TecchnologieCard from "./about/TecchnologieCard";

const About = () => {
    return (
        <section id="about" className="p-6 pb-14 grid gap-6 text-white max-w-[1000px] mx-auto">
            <h2 className="text-2xl font-semibold">About</h2>
            <p>
                My expertise bridges the gap between the technical and business
                aspects of projects. With a focus on Full-Stack engineering, I
                actively engage in personal projects using various technologies
                such as MERN, Vite, ReactJS, NodeJS, C#, Python, SQL, HTML, CSS,
                Tailwindcss, SaSS, MySQL, MongoDB, DynamoDB, NoSQL, IAM, RBAC,
                AI, and various AWS services. My GitHub repositories demonstrate
                my passion for continuous growth, endless learning, and
                professional development, showcasing hands-on experiences and
                efficiently building secure, reliable projects with cloud
                technologies.
            </p>
            <div className="grid gap-8">
                <h3 className="text-lg font-semibold">Technologies</h3>
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
