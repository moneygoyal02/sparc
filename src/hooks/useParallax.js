import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for parallax scrolling effects
 * @param {number} speed - The speed factor of the parallax (e.g., 0.5 for half speed, -0.5 for invalid direction)
 * @returns {Object} - Style object with transform property
 */
export function useParallax(speed = 0.1) {
    const [offset, setOffset] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Check if element is in view
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate relative scroll position
                // center of viewport is 0
                const relativeY = (rect.top + rect.height / 2) - windowHeight / 2;
                setOffset(relativeY * speed);
            }
        };

        // Initial calc
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return {
        ref: elementRef,
        style: { transform: `translateY(${offset}px)` }
    };
}
