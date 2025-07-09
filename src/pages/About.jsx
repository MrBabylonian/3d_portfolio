import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Link } from "react-router-dom";
import { skills } from "../constants/skills_index.js";
import { experiences } from "../constants/experiences_index.js";
import universityLogo from "../assets/amsterdam_tech.png";
import CTA from "../components/CTA.jsx";

const About = () => {
    return (
        <section className="relative flex flex-col top-10 w-full max-w-fit mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-1 min-w-[60%] max-h-min m-5 mb-0 p-10 pb-2">
                <h1 className="text-4xl font-bold">
                    Hello, I&#39;m{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-300 to-blue-700 hover:from-blue-500 hover:to-blue-700">
                        Bedirhan
                    </span>
                </h1>
                <p className="mt-5 gap-3 text-slate-500">
                    Software Engineer with a knack for creating elegant
                    solutions in the least amount of time.
                </p>
            </div>

            <div className="flex-1 min-w-[60%] max-h-fit mx-5 p-10 pt-5 pb-1">
                <h3 className="text-2xl font-semibold">My Skills</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 lg:gap-16 flex-0 min-w-[60%] max-h-fit m-10 mt-0 pt-5 pb-0">
                {skills.map((skill, index) => (
                    <Link to={skill.website} key={index} target="_blank">
                        <div
                            className="flex justify-center items-center transform transition-transform duration-300 hover:scale-125"
                            key={index}
                        >
                            <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10 shadow-sm shadow-blue-100 rounded-r-4xl">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name + " logo"}
                                    className="w-20 h-20"
                                />
                                <p className="text-lg font-semibold">
                                    {skill.name}
                                </p>
                                <p className="text-slate-500">{skill.type}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex-1 min-w-[60%] max-h-fit text-center">
                <h3 className="text-2xl font-semibold pb-4">
                    My Experiences
                </h3>
            </div>

            <div className="flex flex-col min-w-[60%] max-h-fit justify-center items-center">
                <h3 className="text-md font-semibold text-slate-500">
                    Bachelor&#39;s degree in Software Engineering from Amsterdam
                    Tech
                </h3>
                <Link
                    to="https://amsterdam.tech/"
                    target="_blank"
                    className="top-20 hover:scale-125 transform transition-transform duration-300 text-slate-500"
                >
                    <img
                        src={universityLogo}
                        className="w-40 h-18 mt-2 pr-1.5 inline-block bg-transparent"
                        alt="Amsterdam Tech Logo"
                    />
                    2021 - 2024
                </Link>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={experience.date}
                            icon={
                                <div className="w-full h-full flex justify-center items-center">
                                    <img
                                        className="w-[60%] h-[60%] object-contain"
                                        src={experience.icon}
                                        alt={experience.company_name + " logo"}
                                    />
                                </div>
                            }
                            iconStyle={{
                                background: experience.iconBg,
                            }}
                            contentStyle={{
                                borderBottom: "8px solid ",
                                borderBottomColor: experience.bottomColor,
                                boxShadow: "none",
                            }}
                        >
                            <div>
                                <h3 className="text-xl font-medium">
                                    {experience.title}
                                </h3>
                                <p
                                    className="text-black font-mono"
                                    style={{ margin: 0 }}
                                >
                                    {experience.company_name}
                                </p>
                            </div>

                            <ul className="mt-3 mr-0 mb-0 ml-5 space-y-2 list-disc">
                                {experience.details.map((detail, index) => (
                                    <li
                                        key={`experience-detail-${index}`}
                                        className="text-black font-normal text-sm"
                                    >
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>

            <hr className="border-slate-200" />
            <CTA />
        </section>
    );
};

export default About;
