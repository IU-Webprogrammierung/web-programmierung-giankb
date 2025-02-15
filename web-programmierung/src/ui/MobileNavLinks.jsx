import "./MobileNavLinks.css"
import {triggerHyperspaceEffect} from "../services/HyperspaceFunction.js";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function MobileNavLinks(){
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="burger_nav">
            <div className="menu_icon">
                <button
                    className={`burger_button ${menuOpen ? "opened" : ""}`}
                    aria-label="Main Menu"
                    onClick={toggleMenu}
                >
                    <svg width="40" height="40" viewBox="0 0 100 100">
                        <path
                            className="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path
                            className="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                    </svg>
                </button>
            </div>
            <div className={`menu ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li className="nav_item">
                        <Link
                            className="nav_link"
                            to="/saga"
                            onClick={(e) => {
                                triggerHyperspaceEffect(navigate)(e, "/saga");
                                setMenuOpen(false);
                            }}
                        >
                            Saga
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link
                            className="nav_link"
                            to="/animations"
                            onClick={(e) => {
                                triggerHyperspaceEffect(navigate)(e, "/animations");
                                setMenuOpen(false);
                            }}
                        >
                            Animations
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link
                            className="nav_link"
                            to="/curiosities"
                            onClick={(e) => {
                                triggerHyperspaceEffect(navigate)(e, "/curiosities");
                                setMenuOpen(false);
                            }}
                        >
                            Curiosities
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}