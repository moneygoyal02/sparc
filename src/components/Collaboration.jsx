import '../styles/collaboration.css'

function Collaboration() {
    return (
        <section className="collaboration-section">
            <div className="container">
                {/* Organized By Section - Unique Premium Design */}
                <div className="organized-by-wrapper">
                    <div className="organized-by-card">
                        {/* Left Accent Bar */}
                        <div className="organized-accent-bar"></div>

                        {/* Content */}
                        <div className="organized-content">
                            <div className="organized-badge">
                                <span className="badge-text">Organized By</span>
                            </div>

                            <h2 className="organized-dept">
                                Department of Mechanical Engineering
                            </h2>

                            <div className="organized-institution">
                                <span>
                                    Dr B R Ambedkar National Institute of
                                    Technology Jalandhar, Punjab, India - 144008
                                </span>
                            </div>
                        </div>

                        {/* Organizer College Logo */}
                        <div className="organized-logo-box">
                            <img
                                src="/assets/images/header_logos.png"
                                alt="NIT Jalandhar Logo"
                                className="organized-college-logo"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* Right Decorative Element */}
                        <div className="organized-decoration">
                            <div className="decoration-circle"></div>
                            <div className="decoration-circle small"></div>
                        </div>
                    </div>
                </div>

                <h3 className="collaboration-title">In Collaboration with</h3>
                <div className="collaboration-logos">
                    <div className="collab-logo-item">
                        <img
                            src="/assets/images/asu_logo.png"
                            alt="Arizona State University"
                            className="collab-logo"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                            }}
                        />
                        {/* 📌 Placeholder: Add asu_logo.png to /public/assets/images/ */}
                        <div className="collab-logo-placeholder" style={{ display: 'none', padding: '1rem', fontWeight: 700, fontSize: '1.1rem', color: '#8C1D40' }}>
                            Arizona State University, USA
                        </div>
                    </div>
                    <div className="collab-logo-item">
                        <img
                            src="/assets/images/temple_logo.png"
                            alt="Temple University"
                            className="collab-logo"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                            }}
                        />
                        {/* 📌 Placeholder: Add temple_logo.png to /public/assets/images/ */}
                        <div className="collab-logo-placeholder" style={{ display: 'none', padding: '1rem', fontWeight: 700, fontSize: '1.1rem', color: '#9D2235' }}>
                            Temple University, USA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collaboration
