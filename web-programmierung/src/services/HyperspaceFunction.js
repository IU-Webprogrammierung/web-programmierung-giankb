export const triggerHyperspaceEffect = (navigate) => (e, path) => {
    e.preventDefault();

    if (!window.hyperspaceSpeed || !window.hyperspaceCanvas) return;

    window.hyperspaceCanvas.current.style.zIndex = "99";

    window.hyperspaceSpeed.current = 35;

    setTimeout(() => {
        navigate(path);
        window.hyperspaceSpeed.current = 0.1;
        setTimeout(() => {
            window.hyperspaceCanvas.current.style.zIndex = "-1";
        }, 100);
    }, 800);
};
