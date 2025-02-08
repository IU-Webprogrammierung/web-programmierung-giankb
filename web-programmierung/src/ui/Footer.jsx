import "./Footer.css"

export default function Footer(){
    return (
        <footer className="footer">
            <nav className="footer-content">
                <nav className="footer-links">
                    <a href="https://www.facebook.com/StarWars.it" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </nav>

                <div className="impressum">
                    <p>Impressum</p>
                    <p>Owner: Star Wars Fan Site</p>
                    <p>Address: Galaxy Avenue 42, 00100 Coruscant</p>
                    <p>Email: contact@starwarsfansite.com</p>
                    <p>Company Registration Number: 123456789</p>
                </div>

                <p>© 2025 Star Wars Fan Site. All rights reserved.</p>
            </nav>
        </footer>
    )
}