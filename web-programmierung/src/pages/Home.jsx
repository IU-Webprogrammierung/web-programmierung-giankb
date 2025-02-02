import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../ui/HeroSection.jsx";
import "./Home.css"
import Box from "../components/Box.jsx";
import KeySection from "../components/KeySection.jsx";

export default function Home () {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <main className="main">
                <h1 className="home-title">What is star wars</h1>
                <Box></Box>
                <KeySection></KeySection>
            </main>
        </>
    )
}