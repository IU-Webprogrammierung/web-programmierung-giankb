import './Navigation.css'
import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";

export default function Navigation () {
    return (
        <nav className="navigation">
                <Logo />
                <NavLinks />
        </nav>
    )
}