import { Link } from "react-router-dom";
import { ArrowIcon, BranchIcon } from "../icons/Svgs";

const ProjectCard = ({ project }) => {
    return (
        <li className="grid gap-6 place-items-center relative">
            <div className="absolute border-b-2 border-r-2 border-l-2 border-white/30 rounded-xl w-[260px] h-[150px] top-20 text-black shadow-xl shadow-black/70"></div>
            <h2>{project.name}</h2>
            <picture className="">
                <img
                    src={project.image}
                    alt="image project"
                    className="w-[260px] h-[154px] mx-auto rounded-xl hover:-translate-y-4 transition-transform cursor-pointer shadow-black shadow-xl relative z-50"
                />
            </picture>
            <div className="pt-6 flex gap-5">
                <button className="border p-2 rounded-md">
                    <Link to={project.url} target="_blank">
                        <ArrowIcon />
                    </Link>
                </button>
                <button className="border p-2 rounded-md">
                    <Link to={project.repository} target="_blank">
                        <BranchIcon />
                    </Link>
                </button>
            </div>
        </li>
    );
};
export default ProjectCard;
