import './Navigation.css'
import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import MobileNavLinks from "./MobileNavLinks.jsx";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navigation">
            <Logo />
            {isMobile ? <MobileNavLinks /> : <NavLinks />}
        </nav>
    );
}