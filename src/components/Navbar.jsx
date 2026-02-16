import { NavLink } from "react-router-dom";
import githubLogo from "../assets/github-mark.svg";
import linkednLogo from "../assets/linkedn-mark.svg";

export const Navbar = () => {
	const githubLink = "https://github.com/MrBabylonian";
	const linkednLink = "https://linkedin.com/in/bedirhangilgiler";
	return (
		<header className="header flex justify-between items-center fixed z-50 px-4 sm:px-8 py-3 sm:py-4 w-full">
			<NavLink
				to="/"
				className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shrink-0"
			>
				<p className="bg-gradient-to-r from-blue-700 to-blue-300 text-transparent bg-clip-text">
					BG
				</p>
			</NavLink>
			<nav className="flex items-center text-base sm:text-lg gap-2 sm:gap-3 font-medium">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						`${isActive ? "text-blue-500" : "text-black"} 
                    transition-colors duration-300 hover:text-blue-400 `
					}
				>
					About
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						`${isActive ? "text-blue-500" : "text-black"} 
                    transition-colors duration-300 hover:text-blue-400`
					}
				>
					Contact
				</NavLink>
				<NavLink to={githubLink} target="_blank">
					<img
						src={githubLogo}
						alt="GitHub Logo"
						className="w-7 h-7 sm:w-8 sm:h-8 rounded-full m-0 p-0"
					/>
				</NavLink>
				<NavLink to={linkednLink} target="_blank">
					<img
						src={linkednLogo}
						alt="Linkedn Logo"
						className="w-7 h-7 sm:w-8 sm:h-8 rounded-full m-0 p-0"
					/>
				</NavLink>
			</nav>
		</header>
	);
};
