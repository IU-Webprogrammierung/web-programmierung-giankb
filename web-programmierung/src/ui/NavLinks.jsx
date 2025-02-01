import {Link, useNavigate} from "react-router-dom";
import './NavLinks.css'
import {triggerHyperspaceEffect} from "../services/HyperspaceFunction.js";

export default function NavLinks(){
    const navigate = useNavigate();
    const handleClick = triggerHyperspaceEffect(navigate);

    return (
        <div className="nav_bar">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link className='nav_link' to="/hobby" onClick={(e) => handleClick(e, "/saga")}>Saga</Link>
                </li>
                <li>
                    <Link className='nav_link' to="/studies" onClick={(e) => handleClick(e, "/animations")}>Animations</Link>
                </li>
                <li>
                    <Link className='nav_link' to="/work" onClick={(e) => handleClick(e, "/curiosities")}>Curiosities</Link>
                </li>
            </ul>
        </div>
        )
}