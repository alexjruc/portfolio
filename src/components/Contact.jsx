const Contact = () => {

    return (
        <section id="contact" className="max-w-[1000px] mx-auto grid px-6 gap-10 pb-10">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <form className="w-[280px] sm:w-[400px] mx-auto grid gap-2 sm:gap-4">
                <input
                    type="text"
                    size={20}
                    placeholder="Enter your name"
                    className="bg-transparent border border-white/40 rounded-md outline-none px-2 py-0.5 "
                />
                <input
                    type="email"
                    size={20}
                    placeholder="Enter your email"
                    className="bg-transparent border border-white/40 rounded-md outline-none px-2 py-0.5"
                />
                <textarea
                    className="bg-transparent border border-white/40 outline-none px-2 rounded-lg"
                    cols="16"
                    rows="6"
                    placeholder="Enter your message"
                ></textarea>
                <button
                    type="submit"
                    className="bg-white/40 text-white p-1 rounded-md mt-4 w-1/2 mx-auto"
                >
                    {"Let's talk!!"}
                </button>
            </form>
        </section>
    );
};
export default Contact;
