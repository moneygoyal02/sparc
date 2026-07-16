import { useEffect, useState } from 'react'

const canUseEnhancedMotion = () => {
    if (typeof window === 'undefined') return false

    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches
    const hasRoomForEffects = window.matchMedia('(min-width: 769px)').matches

    return !prefersReducedMotion && hasRoomForEffects
}

export function useEnhancedMotion() {
    const [enabled, setEnabled] = useState(canUseEnhancedMotion)

    useEffect(() => {
        const reducedMotionQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        )
        const desktopQuery = window.matchMedia('(min-width: 769px)')

        const updatePreference = () => setEnabled(canUseEnhancedMotion())

        reducedMotionQuery.addEventListener('change', updatePreference)
        desktopQuery.addEventListener('change', updatePreference)

        return () => {
            reducedMotionQuery.removeEventListener('change', updatePreference)
            desktopQuery.removeEventListener('change', updatePreference)
        }
    }, [])

    return enabled
}
