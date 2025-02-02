import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import "./Home.css"
import Box from "../components/Box.jsx";
import KeySection from "../components/KeySection.jsx";
import Footer from "../ui/Footer.jsx";

export default function Home () {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection title={"A long time ago, in a galaxy far, far away.."} small={"Welcome to the star wars not official page"}></HeroSection>
            <main className="main">
                <h1 className="home-title">What is star wars</h1>
                <Box></Box>
                <KeySection></KeySection>
            </main>
            <Footer></Footer>
        </>
    )
}