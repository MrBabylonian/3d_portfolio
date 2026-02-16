import ibmIcon from "../assets/icons/experiences/ibm.svg";
import scaleAiIcon from "../assets/icons/experiences/scale.jpg";

export const experiences = [
	{
		title: "Lead AI Engineer",
		company_name: "IBM",
		icon: ibmIcon,
		iconBg: "#FFFFFF",
		bottomColor: "#1765d1",
		date: "January 2024 - Present",
		details: [
			"Managed and directed a cross-functional engineering squad of 5 in the end-to-end delivery of the 'Trenitalia' AI ecosystem, ensuring 99.9% high availability for a critical railway infrastructure serving 20M+ annual users across 3 countries.",
			"Spearheaded the development of a multi-agent autonomous QA system using the Google Agent Development Kit; orchestrated the team to automate 95% of regression testing, resulting in a 90% reduction in manual QA overhead and accelerating release cycles by 60%.",
			"Architected and enforced a company-wide universal authentication standard in Rust, leading the migration from legacy fragmented security protocols. This strategic initiative eliminated 15k+ lines of redundant code, reduced security vulnerability surface by 30%, and slashed maintenance costs.",
			"Established engineering excellence standards across the division, implementing automated CI/CD pipelines and RLHF-informed code review processes that improved team velocity by 25% and ensured delivery predictability for multi-million euro contracts.",
		],
	},
	{
		title: "Senior AI Engineer | RLHF Specialist",
		company_name: "Scale AI",
		icon: scaleAiIcon,
		iconBg: "#FFFFFF",
		bottomColor: "#1765d1",
		date: "March 2020 - January 2024",
		details: [
			"Pioneered high-scale RLHF (Reinforcement Learning from Human Feedback) pipelines specifically for LLM code generation, optimizing model accuracy and logic reasoning for complex, multi-language development tasks.",
			"Architected the technical evaluation framework for model training data, leading rigorous quality control and validation protocols that ensured the delivery of high-fidelity datasets for tier-1 AI labs.",
			"Engineered high-throughput distributed microservices using Java (Spring) and Python (Django) to manage and process massive datasets for model fine-tuning, ensuring 99.9% system uptime during peak training cycles.",
			"Developed high-performance internal orchestration dashboards and responsive UIs using React and Tailwind CSS, enabling real-time monitoring of model training progress and data integrity for engineering teams.",
		],
	},
];
