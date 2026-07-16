function Registration() {
    return (
        <section className="section registration-section" id="registration">
            <div className="container">
                <h2 className="section-title">Registration & Accommodation</h2>
                <div className="registration-box">
                    <h3>Registration Details</h3>
                    <p>
                        Participation is in person only. There is no
                        registration fee, but registration is compulsory for all
                        participants.
                    </p>
                    <p>
                        <strong>Limited Seats Available</strong> - register
                        early to reserve your participation.
                    </p>
                    <p className="deadline">
                        Registration Deadline: August 31, 2026
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdhcWSTLteBP1vlI5iPPoFS5qo0NCispDsVfMlIDPRsVsvxBg/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Register Here
                    </a>

                    <h3 style={{ marginTop: '2rem' }}>Accommodation</h3>
                    <p>
                        On-campus accommodation will be provided on payment
                        basis subject to prior request and availability.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Registration
