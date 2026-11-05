import { useParallax } from '../hooks/useParallax'
import { useTypingEffect } from '../hooks/useTypingEffect'

function Hero() {
    const titleParallax = useParallax(0.1)

    const { displayedText } = useTypingEffect(
        [
            'SPARC Sponsored 2-Day Workshop',
            'Advanced Battery Technologies',
            'Modelling, Design & Thermal Management',
            'December 18-19, 2026 at NIT Jalandhar'
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
                            decoding="async"
                        />
                    </div>
                    <div className="logo-item">
                        <img
                            src="/assets/images/header_logos.png"
                            alt="NIT Jalandhar"
                            className="hero-logo"
                            decoding="async"
                        />
                    </div>

                    <div className="logo-item">
                        <img
                            src="/assets/images/sparc_logo.png"
                            alt="SPARC"
                            className="hero-logo"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="hero-divider"></div>

                {/* Workshop Title */}
                <div
                    className="hero-title-section"
                    ref={titleParallax.ref}
                    style={titleParallax.style}
                >
                    <div className="hero-tag typing-text">
                        {displayedText}
                        <span className="typing-cursor">|</span>
                    </div>
                    <h1 className="hero-main-title">
                        Advanced Battery Technologies for Next-Generation Energy
                        Storage: Modelling, Design, and Thermal Management
                    </h1>
                </div>

                {/* Event Details */}
                <div className="hero-details-grid">
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">WHEN</span>
                            <span className="detail-value">
                                December 18–19, 2026
                            </span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">WHERE</span>
                            <span className="detail-value">
                                NIT Jalandhar, Punjab
                            </span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">PARTICIPANTS</span>
                            <span className="detail-value">60 Seats (In-Person)</span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">DEADLINE</span>
                            <span className="detail-value">December 12, 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
