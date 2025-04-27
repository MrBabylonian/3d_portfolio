import {Suspense, useRef, useState, useEffect} from "react";
import emailJS from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.js";

import {Fox} from "../models/Fox.jsx";
import {Alert} from "../components/Alert.jsx";

const Contact = () => {
    // Create a reference to the form element
    const formRef = useRef(null);

    // State to manage form data
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // State to manage loading status
    const [isLoading, setIsLoading] = useState(false);

    // State to manage the current animation of the Fox model
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    // Destructure alert, showAlert, and hideAlert from useAlert hook
    const {alert, showAlert, hideAlert} = useAlert();

    // Initialize EmailJS when component mounts
    useEffect(() => {
        emailJS.init(import.meta.env.VITE_3D_PORTFOLIO_EMAILJS_PUBLIC_KEY);
    }, []);

    // Handle input change event
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle input focus event
    const handleFocus = (e) => {
        setCurrentAnimation("walk");
        e.target.parentElement.classList.add("focused");
    };

    // Handle input blur event
    const handleBlur = (e) => {
        setCurrentAnimation("idle");
        e.target.parentElement.classList.remove("focused");
    };

    // Handle form submission event
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation("hit");

        // Use emailJS.sendForm with the form reference
        emailJS.sendForm(
            import.meta.env.VITE_3D_PORTFOLIO_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_3D_PORTFOLIO_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_3D_PORTFOLIO_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            showAlert({
                show: true,
                text: "Thank you for your message 😃",
                type: "success",
            });

            // Reset animation and hide alert after a delay
            setTimeout(() => {
                setCurrentAnimation("idle");
            }, 2000);

            setTimeout(() => {
                hideAlert();
            }, 4000);

            // Reset form fields
            setForm({name: "", email: "", message: ""});
        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimation("idle");
            console.error("Email error:", error);
            showAlert({
                show: true,
                text: "I didn't receive your message 😢",
                type: "danger",
            });
        });

        // Log form submission
        console.log("Form submitted:", form);
    };

    // Return the JSX structure for the Contact component
    return (
        <section
            className="relative flex flex-col shadow-lg shadow-blue-200 rounded-2xl justify-self-center justify-center items-center min-w-[50%] min-h-[600px] max-h-fit h-screen w-full max-w-[1100px] mx-auto p-4">
            {/* Display alert if it is shown */}
            {alert.show && <Alert {...alert} />}
            <div className="m-5 p-10 w-full h-full flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center">Get in touch</h1>
                <form
                    ref={formRef}
                    className="flex flex-col gap-7 mt-14 w-[98%]"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-4">
                        {/* Name input field */}
                        <label className="flex flex-col text-black font-semibold">
                            Name
                            <input
                                type="text"
                                name="name"
                                className="mt-2 p-3 rounded-lg border border-gray-300 focus:border-blue-500 outline-none transition-colors"
                                placeholder="John"
                                required
                                value={form.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>

                        {/* Email input field */}
                        <label className="flex flex-col text-black font-semibold">
                            Email
                            <input
                                type="email"
                                name="email"
                                className="mt-2 p-3 rounded-lg border border-gray-300 focus:border-blue-500 outline-none transition-colors"
                                placeholder="john@gmail.com"
                                required
                                value={form.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>

                        {/* Message input field */}
                        <label className="flex flex-col text-black font-semibold">
                            Message
                            <textarea
                                name="message"
                                className="mt-2 p-3 rounded-lg border border-gray-300 focus:border-blue-500 outline-none transition-colors min-h-[150px]"
                                placeholder="Let me know how can I help you!"
                                required
                                value={form.message}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="mt-4 text-white font-semibold py-3 px-6 rounded-lg transition-all bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
                            disabled={isLoading}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
            {/* Canvas to render the Fox model */}
            <Canvas
                className="w-full h-full"
                camera={{
                    position: [0, 0, 5],
                    fov: 75,
                    near: 0.1,
                    far: 1000,
                }}
            >
                {/* Lighting for the scene */}
                <directionalLight
                    intensity={2.5}
                    position={[0, 0, 1]}
                />
                <ambientLight
                    intensity={0.5}
                />
                <pointLight position={[5, 10, 0]} intensity={2}/>
                {/* Suspense to handle loading state */}
                <Suspense
                    fallback={<Loader/>}
                >
                    {/* Fox model with current animation */}
                    <Fox
                        currentAnimation={currentAnimation}
                        position={[0.5, 0.35, 0]}
                        rotation={[12.6, -0.8, 0]}
                        scale={[0.7, 0.7, 0.7]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

// Export the Contact component as default
export default Contact;