import { useEffect, useRef } from 'react';

export const useMagnetic = (ref, strength = 0.5) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = element.getBoundingClientRect();

            // Calculate center of the element
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Calculate distance from mouse to center
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Magnetic effect calculation
            // We move the element towards the mouse by a fraction (strength)
            // But we limit the movement to avoid it flying away too far
            const moveX = deltaX * strength;
            const moveY = deltaY * strength;

            // Apply transform
            // We use 'transform' directly for performance
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        const handleMouseLeave = () => {
            // Reset position with a smooth transition
            element.style.transform = 'translate(0px, 0px)';
            // Ensure transition is added for smooth return, then removed
            element.style.transition = 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)';

            setTimeout(() => {
                element.style.transition = ''; // Clean up
            }, 500);
        };

        // Add event listeners
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [ref, strength]);
};
