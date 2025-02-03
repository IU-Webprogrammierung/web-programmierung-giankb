import Navigation from "../ui/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import "./Home.css"
import Box from "../components/Box.jsx";
import KeySection from "../components/KeySection.jsx";
import Footer from "../ui/Footer.jsx";
import Card from "../components/Card.jsx";

export default function Home () {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection title={"A long time ago, in a galaxy far, far away.."} small={"Welcome to the star wars not official page"}></HeroSection>
            <main className="main">
                <h1 className="home-title">What is star wars</h1>
                <Box></Box>
                <KeySection></KeySection>
                <section className="card-component-container" >
                    <h1>The content</h1>
                    <div className="card-section-container">
                        <Card imgSrc="/saga.webp" buttonContent="Saga" link="/saga"></Card>
                        <Card imgSrc="/animation.webp" buttonContent="Animations" link="/animations" ></Card>
                        <Card imgSrc="/curiosities.webp" buttonContent="Curiosities" link="/curiosities"></Card>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}