import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
    const refForm = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_i3atnnx";
        const templateId = "template_2hf1pkc";
        const apiKey = "rFGi2p4O8oCcCf8_r";

        emailjs
            .sendForm(serviceId, templateId, refForm.current, apiKey)
            .then((result) => console.log(result.text))
            .catch( error => console.log(error));
        refForm.current.reset()
    };

    return (
        <section
            id="contact"
            className="max-w-[1000px] mx-auto grid px-6 gap-10 pb-10 pt-24"
        >
            <h3 className="text-2xl font-semibold">Contact</h3>
            <form ref={refForm} onSubmit={handleSubmit} className="w-[280px] sm:w-[400px] mx-auto grid gap-2 sm:gap-4">
                <input
                    name="name"
                    type="text"
                    required
                    size={20}
                    placeholder="Enter your name"
                    className="bg-transparent border border-white/40 rounded-md outline-none px-2 py-0.5 "
                />
                <input
                    name="email"
                    type="email"
                    size={20}
                    required
                    placeholder="Enter your email"
                    className="bg-transparent border border-white/40 rounded-md outline-none px-2 py-0.5"
                />
                <textarea
                    className="bg-transparent border border-white/40 outline-none px-2 rounded-lg"
                    required
                    name="message"
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
