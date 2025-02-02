import "./HeroSection.css"

export default function HeroSection({ title, small}){
    return(
        <div className="hero-section">
            <h1 className="hero-title">{title}</h1>
            <small>{small}</small>
        </div>
    )
}