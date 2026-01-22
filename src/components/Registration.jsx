function Registration() {
    return (
        <section className="section registration-section" id="registration">
            <div className="container">
                <h2 className="section-title">Registration & Accommodation</h2>
                <div className="registration-box">
                    <h3>Registration Details</h3>
                    <p>Registration is compulsory. No fee for registration, course, and certification.</p>
                    <p><strong>Maximum Participants: 60 (In-person)</strong></p>
                    <p className="deadline">Deadline: February 02, 2026</p>
                    <a
                        href="https://forms.gle/brY5CHACrK6EZXba6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Register Here
                    </a>
                    

                    <h3 style={{ marginTop: '2rem' }}>Accommodation</h3>
                    <p>
                        On-campus accommodation will be provided on payment basis subject to
                        prior request and availability.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Registration
