import useIsMobile from "../hooks/useIsMobile";
import { useState, useRef } from "react";

export default function Menu({ children }) {
    const { isMobile } = useIsMobile();

    const sheetRef = useRef(null);
    const startY = useRef(0);
    const currentY = useRef(0);
    const [position, setPosition] = useState("peek"); // "closed" | "peek" | "full"

    const offsetY = useRef(window.innerHeight * 0.3);

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
    }

    const handleTouchMove = (e) => {
        const deltaY = startY.current - e.touches[0].clientY;
        const newY = offsetY.current + deltaY;
        sheetRef.current.style.height = `${newY}px`;
        currentY.current = deltaY;
    }

    const handleTouchEnd = () => {
        offsetY.current = parseFloat(sheetRef.current.style.height);
    }


    return (
        <div id="menu">
            {isMobile ? (
                <div
                    id="bottomSheetMenu"
                    ref={sheetRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div id="dragHandle"></div>
                    { children }
                </div>
            ) : (
                <div id="sideMenu">
                    { children }
                </div>
            )}
        </div>
    );
}