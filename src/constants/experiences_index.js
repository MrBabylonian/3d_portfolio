import scaleAiIcon from "../assets/icons/experiences/scale.jpg";
import ibmIcon from "../assets/icons/experiences/ibm.svg";

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "IBM",
    icon: ibmIcon,
    iconBg: "#FFFFFF",
    bottomColor: "#1765d1",
    date: "January 2024 - Present",
    details: [
      "Developed and enhanced the 'TrenItalia' project, a critical railway application serving millions of users across three countries, ensuring high availability and scalability.",
      "Pioneered and developed an autonomous AI Agent using the Google Agent Development Kit. The agent autonomously generates and executes Robot Framework tests for the Trenitalia frontend, automating QA processes across all supported platforms.",
      "Architected and built a universal, code-first authentication library in Rust to standardize security protocols across the organization. This initiative replaced fragmented legacy methods, resulting in the elimination of thousands of lines of redundant code and significantly improving maintainability.",
      "Engaged in the full software development lifecycle, driving best practices in design, coding, and deployment to deliver high-quality, resilient software solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Scale AI",
    icon: scaleAiIcon,
    iconBg: "#FFFFFF",
    bottomColor: "#1765d1",
    date: "March 2020 - January 2024",
    details: [
      "Leveraged Reinforcement Learning from Human Feedback (RLHF) to fine-tune AI models specifically designed for code generation, significantly enhancing automation capabilities for complex development tasks.",
      "Served as a Technical Reviewer and Mentor, conducting rigorous code reviews and validating output quality to ensure high standards in both software delivery and model training data.",
      "Engineered and deployed scalable full-stack applications and microservices using Java (Spring), Python (Django), and TypeScript (React), contributing to robust distributed systems.",
      "Developed modern, responsive user interfaces by integrating front-end frameworks like React with Tailwind CSS, ensuring seamless user experiences.",
    ],
  },
];
