function Registration() {
    return (
        <section className="section registration-section" id="registration">
            <div className="container">
                <h2 className="section-title">Registration &amp; Accommodation</h2>
                <div className="registration-box">
                    <h3>Registration Details</h3>
                    <p>
                        The maximum number of allowed participants shall be{' '}
                        <strong>60 (in-person only)</strong>. There is no
                        online participation mode.
                    </p>

                    <h4 style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                        Registration Fee — Internal (NIT Jalandhar)
                    </h4>
                    <ul style={{ lineHeight: '1.9', paddingLeft: '1.25rem' }}>
                        <li>UG / PG: <strong>Nil</strong></li>
                        <li>Ph.D. Scholars: <strong>₹ 200</strong></li>
                        <li>Faculty Members: <strong>₹ 500</strong></li>
                    </ul>

                    <h4 style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                        Registration Fee — External (Other Organisations)
                    </h4>
                    <ul style={{ lineHeight: '1.9', paddingLeft: '1.25rem' }}>
                        <li>UG / PG / Ph.D.: <strong>₹ 236</strong></li>
                        <li>Faculty / Industry Personnel: <strong>₹ 590</strong></li>
                    </ul>

                    <p className="deadline" style={{ marginTop: '1.5rem' }}>
                        Registration Deadline:{' '}
                        <strong>December 12, 2026</strong>
                    </p>
                    <a
                        href="https://v1.nitj.ac.in/events_registration/workshop_abtnges2026/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Register Here
                    </a>

                    <h3 style={{ marginTop: '2rem' }}>Accommodation</h3>
                    <p>
                        On-campus accommodation will be provided on a payment
                        basis, subject to prior request in the registration form
                        and availability.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Registration
