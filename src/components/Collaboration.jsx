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
                                <div className="institution-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Dr B R Ambedkar National Institute of Technology, Jalandhar</span>
                            </div>
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
                            src="/assets/images/imperial.png"
                            alt="Imperial College London"
                            className="collab-logo"
                        />
                    </div>
                    <div className="collab-logo-item">
                        <img
                            src="/assets/images/pisa.png"
                            alt="University of Pisa"
                            className="collab-logo"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collaboration
