import {NavLink} from "react-router-dom";
import githubLogo from "../assets/github-mark.svg";

export const Navbar = () => {
    const githubLink = "https://github.com/MrBabylonian";
    return (
        <header className="header flex justify-between fixed z-50 px-8 py-4 w-full">
            <NavLink
                to="/"
                className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md self-start"
            >
                <p
                    className="bg-gradient-to-r from-blue-700 to-blue-300 text-transparent bg-clip-text"
                >
                    BG
                </p>
            </NavLink>
            <nav className="flex text-lg gap-3 font-medium mt-1">
                <NavLink
                    to="/about"
                    className={({isActive}) =>
                        `${isActive ? "text-blue-500" : "text-black"} 
                    transition-colors duration-300 hover:text-blue-400 `}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({isActive}) =>
                        `${isActive ? "text-blue-500" : "text-black"} 
                    transition-colors duration-300 hover:text-blue-400`}
                >
                    Contact
                </NavLink>
                <NavLink
                    to={githubLink}
                    target="_blank"
                >
                    <img
                        src={githubLogo}
                        alt="GitHub Logo"
                        className="w-8 h-8 rounded-full m-0 p-0"
                    />
                </NavLink>
            </nav>
        </header>
    );
};
