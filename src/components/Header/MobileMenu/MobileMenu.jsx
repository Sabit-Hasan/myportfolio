import { NavLink } from "react-router-dom";

export default function MobileMenu({toggleMenu, menuOpen}) {
    return (
        <>
            <div
                className={`bg-[#0D0D0D] text-white md:hidden flex flex-col items-center py-4 space-y-6 border-b-2 overflow-hidden transition-all duration-700 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <NavLink
                    to="/"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                    }
                >
                    {({ isActive }) => (isActive ? `( Home )` : `{ Home }`)}
                </NavLink>
                <NavLink
                    to="/projects"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                    }
                >
                    {({ isActive }) => (isActive ? `( Projects )` : `{ Projects }`)}
                </NavLink>
                <NavLink
                    to="/about"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                    }
                >
                    {({ isActive }) => (isActive ? `( About )` : `{ About }`)}
                </NavLink>
                <NavLink
                    to="/resume"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                    }
                >
                    {({ isActive }) => (isActive ? `( Resume )` : `{ Resume }`)}
                </NavLink>
                <NavLink
                    to="/contact"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                    }
                >
                    {({ isActive }) => (isActive ? `( Contact )` : `{ Contact }`)}
                </NavLink>
            </div>
        </>
    );
}