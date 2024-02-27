import { Link } from "react-router-dom";
import { GitHubIcon, LinkedinIcon } from "./icons/Svgs";

const Footer = () => {
    return (
        <section className="grid place-content-center py-12">
            <ul className="flex gap-4 sm:gap-12">
                <li>
                    <Link
                        to={
                            "https://www.linkedin.com/in/alex-uceda-cachay-821578294/"
                        }
                        target="_blank"
                    >
                        <LinkedinIcon />
                    </Link>
                </li>
                <li>
                    <Link to={"https://github.com/alexjruc"} target="_blank">
                        <GitHubIcon />
                    </Link>
                </li>
            </ul>
        </section>
    );
};
export default Footer;
