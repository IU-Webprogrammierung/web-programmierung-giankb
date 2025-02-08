import { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const navigationType = useNavigationType();
    const { pathname } = useLocation();

    useEffect(() => {
        if (navigationType !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;