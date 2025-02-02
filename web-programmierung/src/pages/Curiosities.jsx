import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";

export default function Curiosities () {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection title={"did you know..."} small={"I did not"}></HeroSection>
            <p>Curiosities</p>
        </>
    )
}