import { useState } from "react";
import { CloseMenuIcon, OpenMenuIcon } from "./icons/Svgs";

const Home = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    return (
        <section className="max-w-[1000px] mx-auto">
            <header id="home" className="">
                <nav className="text-white h-20 font-semibold flex justify-between px-6 items-center">
                    <a href="#home">
                        <img src="/images/logo.svg" alt="" />
                    </a>
                    <div className="hidden sm:inline-block">
                        <ul className="flex gap-6">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {isShowMenu && (
                        <div
                            className={`bg-black/95 fixed top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center text-2xl ${
                                isShowMenu
                                    ? "visible opacity-100"
                                    : "invisible opacity-0"
                            } z-[200] transition-all`}
                        >
                            <button
                                onClick={() => setIsShowMenu(!isShowMenu)}
                                className="absolute top-5 right-5 sm:hidden"
                            >
                                <CloseMenuIcon />
                            </button>
                            <ul className="grid gap-12 sm:block ">
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button
                        onClick={() => setIsShowMenu(!isShowMenu)}
                        className="sm:hidden"
                    >
                        <OpenMenuIcon />
                    </button>
                </nav>
            </header>
            <section className="w-full h-[calc(100vh-80px)] flex  flex-col-reverse justify-center items-center gap-6">
                <h1 className="text-white text-5xl text-center ">
                    Fronted Developer
                </h1>
                <picture className="shadow-lg shadow-blue-300">
                    <img src="/images/image.svg" alt="" />
                </picture>
            </section>
        </section>
    );
};
export default Home;
