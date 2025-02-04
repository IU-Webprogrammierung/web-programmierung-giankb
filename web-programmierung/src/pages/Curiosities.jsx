import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../ui/Footer.jsx";
import ScrollToTop from "../ui/ScrollTop.jsx";

export default function Curiosities () {
    return (
        <>
            <ScrollToTop />
            <Navigation></Navigation>
            <HeroSection title={"did you know..."} small={"I did not"}></HeroSection>
            <p>Curiosities</p>
            <Footer></Footer>
        </>
    )
}