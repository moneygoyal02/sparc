import { useRef, useState, useEffect } from 'react';

export default function ScrollReveal({ children, style, threshold = 0.1, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            style={{
                ...style,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(30px) translateZ(0)',
                transition: `opacity 0.8s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
}
