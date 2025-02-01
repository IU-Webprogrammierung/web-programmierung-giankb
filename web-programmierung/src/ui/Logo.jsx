import './Logo.css'
import {Link, useNavigate} from "react-router-dom";
import {triggerHyperspaceEffect} from "../services/HyperspaceFunction.js";
export default function Logo () {
    const navigate = useNavigate();

    const handleClick = triggerHyperspaceEffect(navigate);

    return (
        <div className="logo-container">
            <Link to={"/"} onClick={(e) => handleClick(e, "/")}>
                <img src="/logo.svg" alt="My Page logo" className="logo"/>
            </Link>
        </div>
    )
}