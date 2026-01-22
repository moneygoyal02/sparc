import '../styles/collaboration.css'

function Collaboration() {
    return (
        <section className="collaboration-section">
            <div className="container">
                {/* Organized By Section */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'white',
                        padding: '1.5rem 2.5rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ fontSize: '2rem' }}>🏛️</div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{
                                color: '#1e40af',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                fontWeight: '700',
                                marginBottom: '0.25rem'
                            }}>
                                Organized by
                            </div>
                            <div style={{
                                color: '#374151',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}>
                                Department of Mechanical Engineering, NIT Jalandhar
                            </div>
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
