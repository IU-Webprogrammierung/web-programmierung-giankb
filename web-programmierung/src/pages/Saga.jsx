import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../ui/Footer.jsx";
import FilmSection from "../components/FilmSection.jsx";
import Carousel from "../components/Caousel.jsx";
import "./Saga.css"
import {spinOff, starWarsFilms} from "../services/CONSTANTS.js";
import ScrollToTop from "../ui/ScrollTop.jsx";

export default function Saga () {

    return (
        <>
            <ScrollToTop />
            <Navigation></Navigation>
            <HeroSection title={"The Saga"} small={"Main films"}></HeroSection>
            <main className="main">
                <h1 className="saga-title">films</h1>
                {starWarsFilms.map((film, index) => (
                    <FilmSection key={index} film={film} />
                ))}
                <section className="carousel-section-container">
                    <h2>Spin-off</h2>
                    <Carousel films={spinOff} />
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}