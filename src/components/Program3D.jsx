import React, { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

// ─── Schedule Data ───────────────────────────────────────────────────────────
const schedule = {
    day1: [
        { id: 1, time: "10.00 – 10.40 am", title: "Inaugural Session", type: "special", label: "Inaugural", desc: "Official commencement and opening ceremony of the SPARC workshop." },
        { id: 2, time: "10.40 – 11.00 am", title: "Tea Break", type: "break", label: "Break", desc: "Morning refreshments and networking session." },
        { id: 3, time: "11.00 – 11.50 am", session: "Session 1", title: "Decentralized Polygeneration Solutions for Reliable and Sustainable Rural Energy", speaker: "Prof. R Saravanan", details: "Anna University, Chennai", type: "session", label: "Expert Lecture", desc: "Exploration of localized polygeneration designs to meet rural energy demands reliably and sustainably." },
        { id: 4, time: "11.55 am – 12.45 pm", session: "Session 2", title: "Polygeneration Using Waste Heat: An Overview and A Few Case Studies", speaker: "Prof. Sudipta De", details: "Jadavpur University, Kolkata", type: "session", label: "Expert Lecture", desc: "Overview of waste heat recovery options and detailed analysis of practical polygeneration installations." },
        { id: 5, time: "12.45 – 02.00 pm", title: "Lunch Break", type: "break", label: "Break", desc: "Midday networking lunch for delegates and participants." },
        { id: 6, time: "02.00 – 02.50 pm", session: "Session 3", title: "Waste Heat Recovery Applications & Opportunities in Industrial Sectors", speaker: "Mr Abhijeet Chaudhari", details: "Enrecover Pvt. Ltd., Pune", type: "session", label: "Industry Session", desc: "Industrial applications focusing on high-energy-intensity sectors using advanced recovery technologies." },
        { id: 7, time: "02.50 – 03.05 pm", title: "Tea Break", type: "break", label: "Break", desc: "Afternoon tea and networking." },
        { id: 8, time: "03.05 – 03.25 pm", session: "Session 4", title: "Students' Experiences, Feedback & Suggestions on SPARC Scheme", speaker: "Dr Manish Kaushal", details: "IIT Kharagpur", type: "session", label: "Feedback Session", desc: "Interactive feedback session highlighting student outcomes and research takeaways under SPARC." },
        { id: 9, time: "03.30 – 05.00 pm", session: "Session 5", title: "Hands-on Training Session on Computational Tools for Analysis, Design & Optimization", speaker: "Dr T Srinivas & Dr Rajan Kumar", details: "NIT Jalandhar", type: "hands-on", label: "Hands-on Training", desc: "Practical workshop session detailing modeling, design, and exergy optimization computational frameworks." }
    ],
    day2: [
        { id: 1, time: "10.00 – 10.50 am", session: "Session 6", title: "Challenges and Technologies for the Decarbonisation of Industrial Energy Users", speaker: "Prof. Umberto Desideri", details: "University of Pisa, Italy", type: "session", label: "Expert Lecture", desc: "An in-depth look into technological options and challenges for industrial decarbonization." },
        { id: 2, time: "10.50 – 11.05 am", title: "Tea Break", type: "break", label: "Break", desc: "Morning refreshments." },
        { id: 3, time: "11.05 – 11.55 am", session: "Session 7", title: "Industry Lecture on Energy Recovery & Sustainable Systems", speaker: "Mr. Vinay Devasthali", details: "Saveeco Energy India, Pune", type: "session", label: "Industry Session", desc: "Commercial perspective on implementing sustainable energy systems and energy recovery schemes." },
        { id: 4, time: "11.55 am – 01.30 pm", title: "Lunch Break", type: "break", label: "Break", desc: "Networking lunch." },
        { id: 5, time: "01.30 – 02.20 pm", session: "Session 8", title: "Thermoeconomic & Exergoenvironmental Investigation on Power Generation and Cogeneration Systems", speaker: "Prof. N Shankar Ganesh", details: "GIET, Ranipet, Tamil Nadu", type: "session", label: "Expert Lecture", desc: "Study of thermodynamic efficiency combined with economic analysis and environmental footprint calculations." },
        { id: 6, time: "02.30 – 03.15 pm", session: "Session 9", title: "Technological Pathways for Waste Heat Recovery: From Fundamentals to Application", speaker: "Prof. Christos N. Markides", details: "Imperial College London, UK", type: "session", label: "Expert Lecture", desc: "Systematic pathways for translating fundamental exergy science into real-world industrial waste heat recovery solutions." },
        { id: 7, time: "03.15 – 03.30 pm", title: "Tea Break", type: "break", label: "Break", desc: "Brief afternoon recess." },
        { id: 8, time: "03.30 – 04.15 pm", title: "Valedictory Session", type: "special", label: "Valedictory", desc: "Concluding remarks, certification distribution, and closing ceremony." }
    ]
}

// ─── Subtle Constellation Scene ──────────────────────────────────────────────

function ConstellationNetwork() {
    const groupRef = useRef()
    const nodeCount = 30
    const radius = 3.5

    // Generate random stable positions on render (stable inside canvas life)
    const nodePositions = useMemo(() => {
        const pos = []
        for (let i = 0; i < nodeCount; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos((Math.random() * 2) - 1)
            const r = radius * (0.8 + Math.random() * 0.4)
            pos.push([
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                (Math.random() - 0.5) * 2
            ])
        }
        return pos
    }, [])

    // Faint connection lines between close neighbors
    const connections = useMemo(() => {
        const lines = []
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const dx = nodePositions[i][0] - nodePositions[j][0]
                const dy = nodePositions[i][1] - nodePositions[j][1]
                const dz = nodePositions[i][2] - nodePositions[j][2]
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
                
                if (dist < 2.0) {
                    lines.push({
                        start: nodePositions[i],
                        end: nodePositions[j],
                        id: `${i}-${j}`
                    })
                }
            }
        }
        return lines
    }, [nodePositions])

    useFrame(({ clock }) => {
        if (groupRef.current) {
            // Faint, slow, professional rotation - non-distracting
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.02
            groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            {/* Connections */}
            {connections.map((conn) => (
                <Line
                    key={conn.id}
                    points={[conn.start, conn.end]}
                    color="#93c5fd"
                    lineWidth={0.5}
                    transparent
                    opacity={0.12}
                />
            ))}

            {/* Tiny Nodes */}
            {nodePositions.map((pos, idx) => (
                <mesh key={`pt-${idx}`} position={pos}>
                    <sphereGeometry args={[0.04, 8, 8]} />
                    <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
                </mesh>
            ))}
        </group>
    )
}

// Separate component memoized to completely disconnect from state updates
const ProgramBackgroundCanvas = React.memo(() => {
    return (
        <div className="section-3d-bg">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
                <ambientLight intensity={1.5} />
                <ConstellationNetwork />
            </Canvas>
        </div>
    )
})

// ─── Schedule Component ──────────────────────────────────────────────────────

export default function Program3D() {
    const [activeDay, setActiveDay] = useState(1)
    const activeList = schedule[`day${activeDay}`]

    return (
        <section id="program" className="program-dashboard-section">
            
            {/* 3D Background Canvas - Decoupled from tab state */}
            <ProgramBackgroundCanvas />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                
                {/* Header Block */}
                <div className="section-header-block">
                    <span className="section-eyebrow">Technical Schedule</span>
                    <h2 className="section-title-main">Programme Schedule</h2>
                    <p className="section-subtitle">
                        Comprehensive daily breakdown of technical modules, industry lectures, hands-on sessions, and networking breaks.
                    </p>
                </div>

                {/* Day Switcher Tabs */}
                <div className="dashboard-day-tabs">
                    <button
                        className={`day-tab-btn ${activeDay === 1 ? 'active' : ''}`}
                        onClick={() => setActiveDay(1)}
                    >
                        <span className="tab-main-text">Day 1</span>
                        <span className="tab-sub-text">September 3, 2026</span>
                    </button>
                    <button
                        className={`day-tab-btn ${activeDay === 2 ? 'active' : ''}`}
                        onClick={() => setActiveDay(2)}
                    >
                        <span className="tab-main-text">Day 2</span>
                        <span className="tab-sub-text">September 4, 2026</span>
                    </button>
                </div>

                {/* Schedule Card Grid Layout */}
                <div className="schedule-cards-grid">
                    {activeList.map((item) => (
                        <div key={item.id} className={`schedule-grid-card ${item.type}`}>
                            <div className="card-top-header">
                                <span className="card-badge-label">{item.label}</span>
                                <div className="card-time-badge">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span>{item.time}</span>
                                </div>
                            </div>
                            
                            <h3 className="card-title-main">
                                {item.session && <span className="session-prefix">{item.session}: </span>}
                                {item.title}
                            </h3>
                            
                            {item.speaker && (
                                <div className="card-speaker-block">
                                    <div className="speaker-avatar">
                                        {item.speaker.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <div className="speaker-meta">
                                        <div className="speaker-name">{item.speaker}</div>
                                        <div className="speaker-sub">{item.details}</div>
                                    </div>
                                </div>
                            )}
                            
                            <p className="card-description-text">{item.desc}</p>
                            
                            <div className="card-accent-bar"></div>
                        </div>
                    ))}
                </div>

            </div>

            <style>{`
                .program-dashboard-section {
                    background: #f8fafc;
                    padding: 6rem 0;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', sans-serif;
                }

                /* 3D Canvas Background container styling */
                .section-3d-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                    opacity: 0.35; /* Faint backdrop watermark */
                }

                .section-header-block {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 3rem;
                }

                .section-eyebrow {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #2563eb;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    display: block;
                }

                .section-title-main {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.75rem;
                    color: #1e3a8a;
                    margin-bottom: 1rem;
                }

                .section-subtitle {
                    color: #64748b;
                    font-size: 1rem;
                    line-height: 1.6;
                }

                /* Day selector tabs */
                .dashboard-day-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 3.5rem;
                }

                .day-tab-btn {
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 0.85rem 2.5rem;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                    backdrop-filter: blur(8px);
                }

                .day-tab-btn:hover {
                    border-color: #cbd5e1;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
                }

                .day-tab-btn.active {
                    background: #1e40af;
                    border-color: #1e40af;
                    color: #ffffff;
                    box-shadow: 0 10px 20px -5px rgba(30, 64, 175, 0.35);
                }

                .day-tab-btn.active .tab-sub-text {
                    color: rgba(255, 255, 255, 0.8);
                }

                .tab-main-text {
                    font-size: 1.15rem;
                    font-weight: 700;
                }

                .tab-sub-text {
                    font-size: 0.8rem;
                    color: #64748b;
                    margin-top: 0.2rem;
                }

                /* Grid Layout for Schedule Cards */
                .schedule-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                }

                /* Schedule Card Styling */
                .schedule-grid-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(12px);
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
                    overflow: hidden;
                }

                .schedule-grid-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 24px -10px rgba(30, 64, 175, 0.08);
                    border-color: #cbd5e1;
                    background: #ffffff;
                }

                .card-top-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .card-badge-label {
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    padding: 0.25rem 0.65rem;
                    border-radius: 6px;
                }

                /* Distinct Accent Colors */
                .schedule-grid-card.session .card-badge-label { background: #eff6ff; color: #2563eb; }
                .schedule-grid-card.hands-on .card-badge-label { background: #ecfdf5; color: #059669; }
                .schedule-grid-card.break .card-badge-label { background: #fffbeb; color: #d97706; }
                .schedule-grid-card.special .card-badge-label { background: #faf5ff; color: #7c3aed; }

                .card-time-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-family: monospace;
                    font-size: 0.75rem;
                    color: #475569;
                    background: #f1f5f9;
                    padding: 0.2rem 0.55rem;
                    border-radius: 6px;
                    font-weight: 600;
                }

                .card-title-main {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #1e3a8a;
                    line-height: 1.45;
                    margin: 0;
                    flex-grow: 0;
                }

                .session-prefix {
                    color: #2563eb;
                }

                /* Speaker Block */
                .card-speaker-block {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #f8fafc;
                    padding: 0.75rem 1rem;
                    border-radius: 12px;
                    border: 1px solid #f1f5f9;
                }

                .speaker-avatar {
                    width: 36px;
                    height: 36px;
                    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.8rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .speaker-meta {
                    display: flex;
                    flex-direction: column;
                }

                .speaker-name {
                    font-weight: 700;
                    color: #334155;
                    font-size: 0.88rem;
                }

                .speaker-sub {
                    font-size: 0.72rem;
                    color: #64748b;
                    margin-top: 0.05rem;
                    line-height: 1.3;
                }

                .card-description-text {
                    font-size: 0.88rem;
                    color: #475569;
                    line-height: 1.6;
                    margin: 0;
                    flex-grow: 1;
                }

                /* Decorative bottom line indicating category color */
                .card-accent-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                }

                .schedule-grid-card.session .card-accent-bar { background: #2563eb; }
                .schedule-grid-card.hands-on .card-accent-bar { background: #059669; }
                .schedule-grid-card.break .card-accent-bar { background: #d97706; }
                .schedule-grid-card.special .card-accent-bar { background: #7c3aed; }

                /* Responsive design */
                @media (max-width: 768px) {
                    .schedule-cards-grid {
                        grid-template-columns: 1fr;
                    }
                    .section-title-main {
                        font-size: 2.25rem;
                    }
                }
            `}</style>
        </section>
    )
}
