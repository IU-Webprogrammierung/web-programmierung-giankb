import "./Card.css"
import {Link, useNavigate} from "react-router-dom";
import {triggerHyperspaceEffect} from "../services/HyperspaceFunction.js";
export default function Card({imgSrc, buttonContent, link, alt}){
    const navigate = useNavigate();
    return (
        <div className="card-container">
            <div className="card-details">
                <img src={imgSrc} alt={alt} width="2" height="2" className="card-image"/>
            </div>
            <Link className="card-link" to={link}  onClick={(e) => triggerHyperspaceEffect(navigate)(e, link)}><span className="card-button">{buttonContent}</span></Link>
        </div>

    )
}