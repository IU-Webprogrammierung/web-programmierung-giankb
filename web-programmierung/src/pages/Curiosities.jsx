import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../ui/Footer.jsx";
import ScrollToTop from "../ui/ScrollTop.jsx";
import CuriositySection from "../components/CuriositySection.jsx";
import {starWarsCuriosities} from "../services/CONSTANTS.js";

export default function Curiosities () {
    return (
        <>
            <ScrollToTop />
            <Navigation></Navigation>
            <HeroSection title={"did you know..."} small={"I did not"}></HeroSection>
            <main className="main">
                <h1 className="main-title">curiosities</h1>
                {starWarsCuriosities.map((curiosity, index) => (
                    <CuriositySection key={index} curiosity={curiosity} />
                ))}
            </main>
            <Footer></Footer>
        </>
    )
}