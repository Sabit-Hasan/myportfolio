import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileMenuButton({ toggleMenu, menuOpen }) {
    return (
        <>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white">
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </>
    );
}