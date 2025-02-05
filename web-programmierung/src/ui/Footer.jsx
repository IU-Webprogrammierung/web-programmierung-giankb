import "./Footer.css"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Star Wars Fan Site. All rights reserved.</p>

                <nav className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/contact">Contact</a>
                    <a href="/impressum">Impressum</a>
                </nav>

                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>

                <div className="impressum">
                    <p>Impressum</p>
                    <p>Owner: Star Wars Fan Site</p>
                    <p>Address: Galaxy Avenue 42, 00100 Coruscant</p>
                    <p>Email: contact@starwarsfansite.com</p>
                    <p>Company Registration Number: 123456789</p>
                </div>
            </div>

        </footer>
    )
}