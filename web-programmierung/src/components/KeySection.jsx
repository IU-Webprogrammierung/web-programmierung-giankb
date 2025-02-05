import "./KeySection.css"
export default function KeySection (){
    return (
        <section className="key-section">
            <h2>main elements</h2>
            <div className="card">
                <h3>The Force</h3>
                <p>A mystical energy field that connects all living things, giving Jedi and Sith incredible
                    abilities.</p>
                <blockquote>"Luminous beings are we, not this crude matter." – Yoda</blockquote>
            </div>
            <div className="card">
                <h3>Jedi & Sith</h3>
                <p>The Jedi are peacekeepers of the galaxy, wielding the Force for good. The Sith, in contrast, embrace
                    the Dark Side to seek power and domination.</p>
            </div>
            <div className="card">
                <h3>Planets</h3>
                <p>Home to diverse landscapes and civilizations, from Tatooine’s scorching deserts to the forest
                    moon of Endor or to Coruscant’s
                    endless cityscape.</p>
            </div>
            <div className="card">
                <h3>Spaceships</h3>
                <p>Legendary starfighters and cruisers, like the Millennium Falcon, X-Wing and Star Destroyers, that shaped
                    galactic battles.</p>
            </div>
        </section>
    )
}