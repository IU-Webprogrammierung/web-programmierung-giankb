import React, {useEffect, useState} from "react";
import "./Carousel.css";

export default function Carousel ({ films }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(getSlidesCount());

    useEffect(() => {
        const handleResize = () => {
            setVisibleSlides(getSlidesCount());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getSlidesCount() {
        if (window.innerWidth > 1200) return 3;
        if (window.innerWidth > 1000) return 2;
        return 1;
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % films.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? films.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={prevSlide}>
                <span>❮</span>
            </button>
            <div className="carousel">
                {films
                    .slice(currentIndex, currentIndex + visibleSlides)
                    .concat(films.slice(0, Math.max(0, currentIndex + visibleSlides - films.length)))
                    .map((film, index) => (
                        <div key={index} className="carousel-item">
                            <h3>{film.title}</h3>
                            <div className="carousel-img-container">
                                <img src={film.imgUrl} alt={film.title} className="carousel-img"/>
                            </div>
                        </div>
                    ))}
            </div>
            <button className="carousel-button" onClick={nextSlide}>
                <span>❯</span>
            </button>
        </div>
    );
}
