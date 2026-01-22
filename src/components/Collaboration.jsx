import '../styles/collaboration.css'

function Collaboration() {
    return (
        <section className="collaboration-section">
            <div className="container">
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
