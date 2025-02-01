// hyperspace.js
export const triggerHyperspaceEffect = (navigate) => (e, path) => {
    e.preventDefault();

    const canvas = document.createElement("canvas");
    canvas.id = "hyperspace-canvas";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 15000;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
        });
    }

    function animate() {
        ctx.fillStyle = "#000207";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let allStarsGone = true;

        stars.forEach(star => {
            star.z -= 15;

            if (star.z > 0) {
                allStarsGone = false;
            } else {
                star.z = 0;
            }

            let x = (star.x - canvas.width / 2) * (canvas.width / star.z);
            let y = (star.y - canvas.height / 2) * (canvas.width / star.z);
            let size = Math.max(2 - star.z / 500, 0);

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x + canvas.width / 2, y + canvas.height / 2, size, 0, 2 * Math.PI);
            ctx.fill();
        });

        if (!allStarsGone) {
            requestAnimationFrame(animate);
        }
    }
    animate();
    setTimeout(() => {
        navigate(path);
        canvas.remove();
    }, 800);
};
