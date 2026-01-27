import { useState, useEffect } from 'react';

export const useTypingEffect = (
    phrases,
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseDuration = 2000
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        let timer;

        const handleTyping = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                setDisplayedText((prev) => prev.substring(0, prev.length - 1));
            } else {
                setDisplayedText((prev) => currentPhrase.substring(0, prev.length + 1));
            }

            // Check for state transitions AFTER the text update
            if (!isDeleting && displayedText === currentPhrase) {
                setIsDeleting(true);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        };

        const currentPhrase = phrases[phraseIndex];
        let speed = typingSpeed;

        if (isDeleting) {
            speed = deletingSpeed;
        } else if (displayedText === currentPhrase) {
            speed = pauseDuration;
        }

        // Add random variation only if typing
        if (!isDeleting && displayedText !== currentPhrase) {
            speed += Math.random() * 40 - 20;
        }

        // If we just finished deleting (empty string), add a small pause before typing next
        if (isDeleting && displayedText === '') {
            speed = 500;
        }

        timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

    return { displayedText };
};
