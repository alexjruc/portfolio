const Header = () => {
    return (
        <header className="h-auto max-w-[1024px] mx-auto">
            <nav className="text-white h-20 font-semibold flex justify-between px-6 items-center">
                <a href="#home">
                    <img src="/images/logo.svg" alt="" />
                </a>
                <ul className="flex gap-8">
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
            </nav>
        </header>
    );
};
export default Header;
