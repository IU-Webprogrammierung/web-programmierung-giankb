import {Link, useNavigate} from "react-router-dom";
import './NavLinks.css'
import {triggerHyperspaceEffect} from "../services/HyperspaceFunction.js";

export default function NavLinks(){
    const navigate = useNavigate();

    return (
        <div className="nav_bar">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link className='nav_link' to="/saga"
                          onClick={(e) => triggerHyperspaceEffect(navigate)(e, "/saga")}>Saga</Link>
                </li>
                <li>
                    <Link className='nav_link' to="/animations"
                          onClick={(e) => triggerHyperspaceEffect(navigate)(e, "/animations")}>Animations</Link>
                </li>
                <li>
                    <Link className='nav_link' to="/curiosities"
                          onClick={(e) => triggerHyperspaceEffect(navigate)(e, "/curiosities")}>Curiosities</Link>
                </li>
            </ul>
        </div>
    )
}