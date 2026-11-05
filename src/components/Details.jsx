function Details() {
    const topics = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            color: '#ef4444',
            bg: '#fef2f2',
            title: 'Fundamentals & Heat Generation',
            desc: 'Cell architectures, Joule/reaction heat generation, and thermal runaway kinetics.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
            ),
            color: '#2563eb',
            bg: '#eff6ff',
            title: 'Multi-Physics Modelling',
            desc: 'Coupled electrochemical-thermal simulations, 3D CFD thermal mapping, and FEA stress/swelling analysis.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
            ),
            color: '#0891b2',
            bg: '#ecfeff',
            title: 'Thermal Management Systems',
            desc: 'Liquid cold plates, nano-enhanced phase change materials (PCMs), and hybrid cooling systems.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
            ),
            color: '#7c3aed',
            bg: '#f5f3ff',
            title: 'Packaging & Design Optimization',
            desc: 'Cell layout, tab/busbar configuration, mechanical integrity, and multi-objective optimization.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                </svg>
            ),
            color: '#059669',
            bg: '#ecfdf5',
            title: 'Experimental Characterization & Validation',
            desc: 'Real-time thermography, embedded strain/pressure sensing, abuse testing, and model calibration.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            ),
            color: '#d97706',
            bg: '#fffbeb',
            title: 'Smart Monitoring & Emerging Trends',
            desc: 'BMS fault detection algorithms, AI-driven health monitoring, and next-generation battery materials.'
        }
    ]

    return (
        <section className="section details-section" id="details">
            <div className="container">
                <h2 className="section-title">Workshop Details</h2>

                {/* Top Row: Context Info */}
                <div className="details-intro-grid">
                    <div className="detail-card">
                        <div className="card-header-with-icon">
                            <svg
                                className="card-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <h3>Target Audience</h3>
                        </div>
                        <p>
                            Faculty members and researchers in Mechanical,
                            Chemical, Thermal, Energy, and related fields,
                            post-doctorates, Ph.D. scholars, postgraduate
                            students, and industry professionals.
                        </p>
                    </div>
                    <div className="detail-card">
                        <div className="card-header-with-icon">
                            <svg
                                className="card-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3>About SPARC</h3>
                        </div>
                        <p>
                            The Scheme for Promotion of Academic and Research
                            Collaboration (SPARC) is a flagship initiative
                            launched by the Ministry of Education (MoE),
                            Government of India, with IIT Kharagpur functioning
                            as the National Coordinating Institute. SPARC fosters
                            high-impact bilateral research and academic
                            partnerships by connecting top-tier Indian
                            institutions with premier global universities ranked
                            among the world&apos;s top 500.
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Workshop Contents — Icon Cards */}
                <div className="detail-card full-width-card">
                    <div className="card-header-with-icon">
                        <svg
                            className="card-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                        <h3>Workshop Contents</h3>
                    </div>

                    <div className="topics-icon-grid">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className="topic-icon-card"
                                style={{
                                    '--topic-color': topic.color,
                                    '--topic-bg': topic.bg
                                }}
                            >
                                <div className="topic-icon-wrap">
                                    {topic.icon}
                                </div>
                                <h4 className="topic-card-title">{topic.title}</h4>
                                <p className="topic-card-desc">{topic.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
