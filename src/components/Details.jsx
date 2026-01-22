function Details() {
    const topics = [
        "Fundamentals of waste heat recovery and thermal polygeneration systems",
        "Sources and characterization of industrial and process waste heat",
        "Energy and exergo-economic analysis of thermal systems",
        "Exergy-based optimization techniques for polygeneration systems",
        "Design and integration of combined power, heating, cooling, and refrigeration systems",
        "Advanced cycles and working fluids for waste heat recovery applications",
        "System performance evaluation, efficiency enhancement, and sustainability assessment",
        "Case studies and real-world applications of waste heat recovery systems",
        "Recent research trends and future directions in next-generation polygeneration systems",
        "Hands-on Training Session on Computational Tools for the Solutions of Waste Heat Recovery Thermal Polygeneration"
    ]

    return (
        <section className="section details-section" id="details">
            <div className="container">
                <h2 className="section-title">Workshop Details</h2>

                {/* Top Row: Context Info */}
                <div className="details-intro-grid">
                    <div className="detail-card">
                        <div className="card-header-with-icon">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h3>Target Audience</h3>
                        </div>
                        <p>
                            Faculty members, researchers in Mechanical/Chemical/Energy Engineering,
                            PhD scholars, PG students, and Industry professionals.
                        </p>
                    </div>
                    <div className="detail-card">
                        <div className="card-header-with-icon">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3>About SPARC</h3>
                        </div>
                        <p>
                            The Scheme for Promotion of Academic and Research Collaboration (SPARC)
                            aims to improve the research ecosystem of India's Higher Educational
                            Institutions by facilitating academic and research collaborations.
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Key Topics (Full Width) */}
                <div className="detail-card full-width-card">
                    <div className="card-header-with-icon">
                        <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h3>Key Topics</h3>
                    </div>
                    <ul className="topics-grid-list">
                        {topics.map((topic, index) => (
                            <li key={index}>
                                <svg className="topic-check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Details
