import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../ui/Footer.jsx";
import ScrollToTop from "../ui/ScrollTop.jsx";

export default function Animations () {
    return (
        <>
            <ScrollToTop />
            <Navigation></Navigation>
            <HeroSection title={"The Clone wars"} small={"Great one!"}></HeroSection>
            <p>Animations</p>
            <Footer></Footer>
        </>
    )
}