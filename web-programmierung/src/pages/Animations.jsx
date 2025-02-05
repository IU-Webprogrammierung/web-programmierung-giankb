import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../ui/Footer.jsx";
import ScrollToTop from "../ui/ScrollTop.jsx";
import { starWarsSeries} from "../services/CONSTANTS.js";
import FilmSection from "../components/FilmSection.jsx";

export default function Animations () {
    return (
        <>
            <ScrollToTop />
            <Navigation></Navigation>
            <HeroSection title={"The Clone wars"} small={"Great one!"}></HeroSection>
            <main className="main">
                <h1 className="saga-title">animated &nbsp; Series</h1>
                {starWarsSeries.map((film, index) => (
                    <FilmSection key={index} film={film}/>
                ))}
            </main>
            <Footer></Footer>
        </>
    )
}