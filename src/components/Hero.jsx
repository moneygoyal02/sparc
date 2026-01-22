import ThreeBackground from './ThreeBackground'
import { useParallax } from '../hooks/useParallax'

function Hero() {
    const titleParallax = useParallax(0.1)

    return (
        <section className="hero" id="home">
            {/* Three.js 3D Background */}
            <ThreeBackground />

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
                    <div className="hero-tag">2-Day International Workshop</div>
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
                            <span className="detail-value">NIT Jalandhar, Punjab, India</span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="detail-content">
                            <span className="detail-label">PARTICIPANTS</span>
                            <span className="detail-value">Maximum 60 (In-person)</span>
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
