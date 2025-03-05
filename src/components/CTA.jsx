import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="flex flex-col justify-center items-center text-center pt-5 pb-10">
            <p className="text-xl font-semibold">
                Have a project in mind? <br className="sm:block hidden" />
                <span className="text-primary">Let's talk.</span>
            </p>
            <Link to="/contact" className="block min-w-fit w-[20%] mt-4">
                <button type="button" className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700">
                    Get in touch
                </button>
            </Link>
        </section>
    );
};

export default CTA;
