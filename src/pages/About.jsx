import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import universityLogo from "../assets/amsterdam_tech.png";
import CTA from "../components/CTA.jsx";
import { experiences } from "../constants/experiences_index.js";
import { skills } from "../constants/skills_index.js";

const About = () => {
	return (
		<section className="relative flex flex-col top-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
			<div className="mx-2 sm:mx-5 px-4 sm:px-10 pt-4 sm:pt-8 pb-1">
				<h1 className="text-3xl sm:text-4xl font-bold">
					Hello, I&#39;m{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-300 to-blue-700 hover:from-blue-500 hover:to-blue-700">
						Bedirhan
					</span>
				</h1>
				<p className="mt-4 text-slate-500">
					Lead Engineer directing a cross-functional squad of 5 at IBM,
					specialized in the deployment of high-stakes autonomous agents and RAG
					systems. I bridge the gap between cutting-edge AI research (RLHF,
					Fine-tuning) and enterprise-grade production. Proven track record of
					architecting self-healing systems that reduce operational overhead by
					90%. Currently spearheading agentic workflows for critical national
					infrastructure.
				</p>
			</div>

			<div className="mx-2 sm:mx-5 px-4 sm:px-10 pt-3 pb-1">
				<h3 className="text-2xl font-semibold">My Skills</h3>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 lg:gap-12 mx-4 sm:mx-10 pt-3 pb-0">
				{skills.map((skill) => (
					<a
						href={skill.website}
						target="_blank"
						rel="noopener noreferrer"
						key={skill.name}
					>
						<div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-125">
							<div className="flex flex-col items-center justify-center w-28 h-32 sm:w-36 sm:h-40 lg:w-40 lg:h-44 p-3 sm:p-4 lg:p-5 shadow-sm shadow-blue-100 rounded-r-4xl">
								<img
									src={skill.imageUrl}
									alt={skill.name + " logo"}
									className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shrink-0"
								/>
								<p className="text-xs sm:text-sm lg:text-base font-semibold text-center mt-2 leading-tight">
									{skill.name}
								</p>
								<p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 text-center leading-tight">
									{skill.type}
								</p>
							</div>
						</div>
					</a>
				))}
			</div>

			<div className="max-h-fit text-center mt-8 sm:mt-12">
				<h3 className="text-2xl font-semibold pb-4">My Experiences</h3>
			</div>

			<div className="flex flex-col max-h-fit justify-center items-center px-4 text-center">
				<h3 className="text-sm sm:text-md font-semibold text-slate-500">
					Bachelor&#39;s degree in Software Engineering from Amsterdam Tech
				</h3>
				<a
					href="https://amsterdam.tech/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:scale-125 transform transition-transform duration-300 text-slate-500"
				>
					<img
						src={universityLogo}
						className="w-32 sm:w-40 h-auto mt-2 pr-1.5 inline-block bg-transparent"
						alt="Amsterdam Tech Logo"
					/>
					2021 - 2024
				</a>
			</div>

			<div className="px-2 sm:px-6 lg:px-8 flex items-center justify-center">
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
								<h3 className="text-xl font-medium">{experience.title}</h3>
								<p className="text-black font-mono" style={{ margin: 0 }}>
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
