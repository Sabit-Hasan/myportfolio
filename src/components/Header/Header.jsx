import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import LargeViewMenu from "./LargeViewMenu/LargeViewMenu";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenuButton from "../../utils/MobileMenuButton/MobileMenuButton";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto flex justify-between h-16 items-center px-4">
                {/* Header Logo */}
                <HeaderLogo />

                {/* Large View Menu */}
                <LargeViewMenu />

                {/* Mobile Menu Button */}
                <MobileMenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />

            </div>

            {/* Mobile Menu */}
            <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </>
    );
}
