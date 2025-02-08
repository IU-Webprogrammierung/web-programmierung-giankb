import { useEffect, useRef, useState } from "react";

export default function Starfield() {
    const stars = useRef([]);
    const speed = useRef(0.1);
    const canvasRef = useRef(null);
    const [numberStars, setNumberStars] = useState(getNumberStars());

    window.hyperspaceSpeed = speed;
    window.hyperspaceCanvas = canvasRef;

    function getNumberStars() {
        if (window.innerWidth > 1200) return 4500;
        if (window.innerWidth > 800) return 500;
        return 200;
    }

    useEffect(() => {
        const canvas = document.createElement("canvas");
        canvas.id = "hyperspace-canvas";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = "-1";
        canvas.style.pointerEvents = "none";
        canvas.style.background = "#000207";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        canvasRef.current = canvas;

        function generateStars() {
            stars.current = [];
            for (let i = 0; i < numberStars; i++) {
                stars.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                });
            }
        }

        generateStars();

        function animate() {
            ctx.fillStyle = "#000207";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.current.forEach(star => {
                star.z -= speed.current;

                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                }

                let x = (star.x - canvas.width / 2) * (canvas.width / star.z);
                let y = (star.y - canvas.height / 2) * (canvas.width / star.z);
                let size = Math.max(2 - star.z / 500, 0);

                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x + canvas.width / 2, y + canvas.height / 2, size, 0, 2 * Math.PI);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();

        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setNumberStars(getNumberStars());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            canvas.remove();
            window.removeEventListener("resize", handleResize);
        };
    }, [numberStars]);

    return null;
}
