const Home = () => {
    return (
        <section id="home" className="w-full h-[calc(100vh-80px)] flex  flex-col-reverse justify-center items-center gap-6">
            <h1 className="text-white text-5xl text-center ">Fronted Developer</h1>
            <picture className="shadow-lg shadow-blue-300">
                <img src="/images/image.svg" alt="" />
            </picture>
        </section>
    );
};
export default Home;
