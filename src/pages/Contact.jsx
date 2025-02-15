import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const handleChange = () => {};
    const handleFocus = () => {};
    const handleBlur = () => {};
    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in touch</h1>
                <form action="w-full flex flex-col gap-7 mt-14">
                    <label htmlFor="name" className="text-black font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="John"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="email" className="text-black font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        name="name"
                        className="input"
                        placeholder="john@gmail.com"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <label
                        htmlFor="message"
                        className="text-black font-semibold"
                    >
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        className="input"
                        placeholder="Let me know how can I help you!"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </form>
            </div>
        </section>
    );
};
export default Contact;
