import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";

export default function Saga () {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection title={"The Saga"} small={"Canon and not"}></HeroSection>
            <p>Saga</p>
        </>
    )
}