import { useParallax } from '../hooks/useParallax'
import { useTypingEffect } from '../hooks/useTypingEffect'

function Hero() {
    const titleParallax = useParallax(0.1)

    const { displayedText } = useTypingEffect(
        [
            'SPARC Sponsored 2-Day Workshop',
            'Waste Heat Recovery Experts',
            'Thermal Polygeneration Systems',
            'Feb 09-10, 2026 @ NIT Jalandhar'
        ],
        50,
        30,
        2500
    )

    return (
        <section className="hero" id="home">

            <div className="container">
                {/* Three Logos Row */}
                <div className="hero-logos-row">
                    <div className="logo-item">
                        <img
                            src="/assets/images/sparc_coordinator_logo.svg"
                            alt="SPARC National Coordinator"
                            className="hero-logo"
                        />

                    </div>
                    <div className="logo-item">
                        <img
                            src="/assets/images/header_logos.png"
                            alt="NIT Jalandhar"
                            className="hero-logo"
                        />

                    </div>

                    <div className="logo-item">
                        <img
                            src="/assets/images/sparc_logo.png"
                            alt="SPARC"
                            className="hero-logo"
                        />

                    </div>
                </div>

                {/* Divider */}
                <div className="hero-divider"></div>

                {/* Workshop Title */}
                <div className="hero-title-section" ref={titleParallax.ref} style={titleParallax.style}>
                    <div className="hero-tag typing-text">
                        {displayedText}
                        <span className="typing-cursor">|</span>
                    </div>
                    <h1 className="hero-main-title">
                        Waste Heat Recovery-Based Thermal Polygeneration
                        Energy Systems
                    </h1>
                </div>

                {/* Event Details */}
                <div className="hero-details-grid">
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">WHEN</span>
                            <span className="detail-value">February 09-10, 2026</span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">WHERE</span>
                            <span className="detail-value">NIT Jalandhar, Punjab</span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">PARTICIPANTS</span>
                            <span className="detail-value">Limited Seats</span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">REGISTRATION</span>
                            <span className="detail-value">Free Entry</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
