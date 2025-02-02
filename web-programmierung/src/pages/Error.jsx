import './Error.css';
import {Link, useNavigate} from "react-router-dom";
import {triggerHyperspaceEffect} from "../services/HyperspaceFunction.js";
export default function ErrorPage(){
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Page Not found</h1>
            <span className="error-span">Navigate back to</span>
            <img src="/falcon.png" alt="Millennium falcon" height="256" width="256"/>
            <button className="error-button">
                <Link className="error-link-span" to={"/"}  onClick={(e) => triggerHyperspaceEffect(navigate)(e, "/")}>Home
                </Link>
            </button>
</div>
)
}