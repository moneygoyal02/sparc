import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Schedule Data ───────────────────────────────────────────────────────────
const schedule = {
    day1: [
        {
            id: 1,
            time: '10.00 – 10.40 am',
            title: 'Inaugural Session',
            type: 'special',
            label: 'Inaugural',
            desc: 'Official commencement and opening ceremony of the SPARC workshop.'
        },
        {
            id: 2,
            time: '10.40 – 11.00 am',
            title: 'Tea Break',
            type: 'break',
            label: 'Break',
            desc: 'Morning refreshments and networking session.'
        },
        {
            id: 3,
            time: '11.00 – 11.50 am',
            session: 'Session 1',
            title: 'Decentralized Polygeneration Solutions for Reliable and Sustainable Rural Energy',
            speaker: 'Prof. R Saravanan',
            details: 'Anna University, Chennai',
            type: 'session',
            label: 'Expert Lecture',
            desc: 'Exploration of localized polygeneration designs to meet rural energy demands reliably and sustainably.'
        },
        {
            id: 4,
            time: '11.55 am – 12.45 pm',
            session: 'Session 2',
            title: 'Polygeneration Using Waste Heat: An Overview and A Few Case Studies',
            speaker: 'Prof. Sudipta De',
            details: 'Jadavpur University, Kolkata',
            type: 'session',
            label: 'Expert Lecture',
            desc: 'Overview of waste heat recovery options and detailed analysis of practical polygeneration installations.'
        },
        {
            id: 5,
            time: '12.45 – 02.00 pm',
            title: 'Lunch Break',
            type: 'break',
            label: 'Break',
            desc: 'Midday networking lunch for delegates and participants.'
        },
        {
            id: 6,
            time: '02.00 – 02.50 pm',
            session: 'Session 3',
            title: 'Waste Heat Recovery Applications & Opportunities in Industrial Sectors',
            speaker: 'Mr. Abhijeet Chaudhari',
            details: 'Enrecover Pvt. Ltd., Pune',
            type: 'session',
            label: 'Industry Session',
            desc: 'Industrial applications focusing on high-energy-intensity sectors using advanced recovery technologies.'
        },
        {
            id: 7,
            time: '02.50 – 03.05 pm',
            title: 'Tea Break',
            type: 'break',
            label: 'Break',
            desc: 'Afternoon tea and networking.'
        },
        {
            id: 8,
            time: '03.05 – 03.25 pm',
            session: 'Session 4',
            title: "Students' Experiences, Feedback & Suggestions on SPARC Scheme",
            speaker: 'Dr Manish Kaushal',
            details: 'IIT Kharagpur',
            type: 'session',
            label: 'Feedback Session',
            desc: 'Interactive feedback session highlighting student outcomes and research takeaways under SPARC.'
        },
        {
            id: 9,
            time: '03.30 – 05.00 pm',
            session: 'Session 5',
            title: 'Hands-on Training Session on Computational Tools for Analysis, Design & Optimization',
            speaker: 'Dr. T. Srinivas & Dr. Rajan Kumar',
            details: 'NIT Jalandhar',
            type: 'hands-on',
            label: 'Hands-on Training',
            desc: 'Practical workshop session detailing modeling, design, and exergy optimization computational frameworks.'
        }
    ],
    day2: [
        {
            id: 1,
            time: '10.00 – 10.50 am',
            session: 'Session 6',
            title: 'Challenges and Technologies for the Decarbonisation of Industrial Energy Users',
            speaker: 'Prof. Umberto Desideri',
            details: 'University of Pisa, Italy',
            type: 'session',
            label: 'Expert Lecture',
            desc: 'An in-depth look into technological options and challenges for industrial decarbonization.'
        },
        {
            id: 2,
            time: '10.50 – 11.05 am',
            title: 'Tea Break',
            type: 'break',
            label: 'Break',
            desc: 'Morning refreshments.'
        },
        {
            id: 3,
            time: '11.05 – 11.55 am',
            session: 'Session 7',
            title: 'Industry Lecture on Energy Recovery & Sustainable Systems',
            speaker: 'Mr. Vinay Devasthali',
            details: 'Saveeco Energy India, Pune',
            type: 'session',
            label: 'Industry Session',
            desc: 'Commercial perspective on implementing sustainable energy systems and energy recovery schemes.'
        },
        {
            id: 4,
            time: '11.55 am – 01.30 pm',
            title: 'Lunch Break',
            type: 'break',
            label: 'Break',
            desc: 'Networking lunch.'
        },
        {
            id: 5,
            time: '01.30 – 02.20 pm',
            session: 'Session 8',
            title: 'Thermoeconomic & Exergoenvironmental Investigation on Power Generation and Cogeneration Systems',
            speaker: 'Prof. N Shankar Ganesh',
            details: 'GIET, Ranipet, Tamil Nadu',
            type: 'session',
            label: 'Expert Lecture',
            desc: 'Study of thermodynamic efficiency combined with economic analysis and environmental footprint calculations.'
        },
        {
            id: 6,
            time: '02.30 – 03.15 pm',
            session: 'Session 9',
            title: 'Technological Pathways for Waste Heat Recovery: From Fundamentals to Application',
            speaker: 'Prof. Christos N. Markides',
            details: 'Imperial College London, UK',
            type: 'session',
            label: 'Expert Lecture',
            desc: 'Systematic pathways for translating fundamental exergy science into real-world industrial waste heat recovery solutions.'
        },
        {
            id: 7,
            time: '03.15 – 03.30 pm',
            title: 'Tea Break',
            type: 'break',
            label: 'Break',
            desc: 'Brief afternoon recess.'
        },
        {
            id: 8,
            time: '03.30 – 04.15 pm',
            title: 'Valedictory Session',
            type: 'special',
            label: 'Valedictory',
            desc: 'Concluding remarks, certification distribution, and closing ceremony.'
        }
    ]
}

export default function Program3D({ enableEffects = true }) {
    const [activeDay, setActiveDay] = useState(1)
    const activeList = schedule[`day${activeDay}`]
    const canvasContainerRef = useRef(null)

    // Vanilla Three.js constellation network - 100% independent of React re-renders
    useEffect(() => {
        if (!enableEffects) return
        if (!canvasContainerRef.current) return

        const container = canvasContainerRef.current
        const width = container.clientWidth || window.innerWidth
        const height = container.clientHeight || 600

        // Scene Setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
        camera.position.z = 8

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        container.appendChild(renderer.domElement)

        // Mouse Parallax movement tracking
        const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
        const handleMouseMove = (e) => {
            mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1
            mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1
        }
        window.addEventListener('mousemove', handleMouseMove)

        // Create elegant round particle texture
        const createCircleTexture = () => {
            const size = 64
            const canvas = document.createElement('canvas')
            canvas.width = size
            canvas.height = size
            const ctx = canvas.getContext('2d')

            const grad = ctx.createRadialGradient(
                size / 2,
                size / 2,
                0,
                size / 2,
                size / 2,
                size / 2
            )
            grad.addColorStop(0, 'rgba(59, 130, 246, 1)')
            grad.addColorStop(0.2, 'rgba(59, 130, 246, 0.8)')
            grad.addColorStop(0.5, 'rgba(96, 165, 250, 0.2)')
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

            ctx.fillStyle = grad
            ctx.fillRect(0, 0, size, size)

            return new THREE.CanvasTexture(canvas)
        }
        const particleTexture = createCircleTexture()

        // Create Constellation Network
        const group = new THREE.Group()
        scene.add(group)

        const count = 45
        const radius = 5
        const positions = []
        const velocities = []

        // Generate points
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(Math.random() * 2 - 1)
            const r = radius * (0.5 + Math.random() * 0.7)

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = (Math.random() - 0.5) * 3

            positions.push(x, y, z)
            velocities.push(
                (Math.random() - 0.5) * 0.003,
                (Math.random() - 0.5) * 0.003,
                (Math.random() - 0.5) * 0.003
            )
        }

        // Particle Geometry and Material
        const particleGeo = new THREE.BufferGeometry()
        particleGeo.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        )

        const particleMat = new THREE.PointsMaterial({
            size: 0.28,
            map: particleTexture,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        })
        const points = new THREE.Points(particleGeo, particleMat)
        group.add(points)

        // Faint Line Connections Geometry
        const maxConnections = 120
        const lineGeo = new THREE.BufferGeometry()
        const linePos = new Float32Array(maxConnections * 2 * 3)
        lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))

        const lineMat = new THREE.LineBasicMaterial({
            color: 0x93c5fd,
            transparent: true,
            opacity: 0.16,
            depthWrite: false
        })
        const lines = new THREE.LineSegments(lineGeo, lineMat)
        group.add(lines)

        // Animation Loop
        let animationFrameId
        const clock = new THREE.Clock()

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            const time = clock.getElapsedTime()

            // Update particle positions
            const posAttr = points.geometry.attributes.position
            const arr = posAttr.array

            for (let i = 0; i < count; i++) {
                const i3 = i * 3
                // Apply velocities
                arr[i3] += velocities[i3]
                arr[i3 + 1] += velocities[i3 + 1]
                arr[i3 + 2] += velocities[i3 + 2]

                // Bounce particles back inside bounding sphere
                const dist = Math.sqrt(
                    arr[i3] ** 2 + arr[i3 + 1] ** 2 + arr[i3 + 2] ** 2
                )
                if (dist > radius * 1.2) {
                    velocities[i3] *= -1
                    velocities[i3 + 1] *= -1
                    velocities[i3 + 2] *= -1
                }
            }
            posAttr.needsUpdate = true

            // Update line connections
            let lineIdx = 0
            const lArr = lines.geometry.attributes.position.array

            for (let i = 0; i < count; i++) {
                for (let j = i + 1; j < count; j++) {
                    const i3 = i * 3
                    const j3 = j * 3

                    const dx = arr[i3] - arr[j3]
                    const dy = arr[i3 + 1] - arr[j3 + 1]
                    const dz = arr[i3 + 2] - arr[j3 + 2]
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

                    if (dist < 1.8 && lineIdx < maxConnections) {
                        const lOffset = lineIdx * 6
                        lArr[lOffset] = arr[i3]
                        lArr[lOffset + 1] = arr[i3 + 1]
                        lArr[lOffset + 2] = arr[i3 + 2]

                        lArr[lOffset + 3] = arr[j3]
                        lArr[lOffset + 4] = arr[j3 + 1]
                        lArr[lOffset + 5] = arr[j3 + 2]
                        lineIdx++
                    }
                }
            }
            // Clear remaining line coordinates to avoid drawing lines back to origin
            for (let i = lineIdx; i < maxConnections; i++) {
                const lOffset = i * 6
                lArr[lOffset] = 0
                lArr[lOffset + 1] = 0
                lArr[lOffset + 2] = 0
                lArr[lOffset + 3] = 0
                lArr[lOffset + 4] = 0
                lArr[lOffset + 5] = 0
            }
            lines.geometry.attributes.position.needsUpdate = true

            // Smooth parallax interaction
            mouse.x += (mouse.targetX - mouse.x) * 0.05
            mouse.y += (mouse.targetY - mouse.y) * 0.05

            group.rotation.y = time * 0.015 + mouse.x * 0.12
            group.rotation.x = Math.sin(time * 0.01) * 0.05 - mouse.y * 0.12

            renderer.render(scene, camera)
        }
        animate()

        // Handle Resize
        const handleResize = () => {
            const w = container.clientWidth || window.innerWidth
            const h = container.clientHeight || 600
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
            container.removeChild(renderer.domElement)
            particleTexture.dispose()
            particleGeo.dispose()
            particleMat.dispose()
            lineGeo.dispose()
            lineMat.dispose()
            renderer.dispose()
        }
    }, [enableEffects])

    return (
        <section id="program" className="program-dashboard-section">
            {/* Native Canvas Container - 100% decoupled from React render loops */}
            {enableEffects && (
                <div className="section-3d-bg" ref={canvasContainerRef} />
            )}

            <div
                className="container"
                style={{ position: 'relative', zIndex: 2 }}
            >
                {/* Header Block */}
                <div className="section-header-block">
                    <h2 className="section-title-main">Programme Schedule</h2>
                </div>

                {/* Day Switcher Tabs */}
                { /*
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
                */}

                <div className="schedule-placeholder-message">
                    <p>Programme schedule will be announced soon. Stay tuned for updates.</p>
                </div>

                {/* Schedule Card Grid Layout */}
                { /*
                <div className="schedule-cards-grid">
                    {activeList.map((item) => (
                        <div
                            key={item.id}
                            className={`schedule-grid-card ${item.type}`}
                        >
                            <div className="card-top-header">
                                <span className="card-badge-label">
                                    {item.label}
                                </span>
                                <div className="card-time-badge">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span>{item.time}</span>
                                </div>
                            </div>

                            <h3 className="card-title-main">
                                {item.session && (
                                    <span className="session-prefix">
                                        {item.session}:{' '}
                                    </span>
                                )}
                                {item.title}
                            </h3>

                            {item.speaker && (
                                <div className="card-speaker-block">
                                    <div className="speaker-avatar">
                                        {item.speaker
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')
                                            .slice(0, 2)}
                                    </div>
                                    <div className="speaker-meta">
                                        <div className="speaker-name">
                                            {item.speaker}
                                        </div>
                                        <div className="speaker-sub">
                                            {item.details}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <p className="card-description-text">{item.desc}</p>

                            <div className="card-accent-bar"></div>
                        </div>
                    ))}
                </div>
                */}
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
                    opacity: 0.6; /* Perfectly transparent watermark constellation */
                }

                .section-3d-bg canvas {
                    display: block;
                    width: 100%;
                    height: 100%;
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

                .schedule-placeholder-message {
                    max-width: 760px;
                    margin: 3rem auto 0;
                    padding: 2.2rem 2rem;
                    background: rgba(255, 255, 255, 0.96);
                    border: 1px solid rgba(59, 130, 246, 0.18);
                    border-radius: 24px;
                    box-shadow: 0 28px 80px -40px rgba(30, 64, 175, 0.4);
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }

                .schedule-placeholder-message::before {
                    content: '📅';
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    font-size: 3rem;
                    opacity: 0.22;
                }

                .schedule-placeholder-message p {
                    margin: 0;
                    color: #1e3a8a;
                    font-size: 1.05rem;
                    font-weight: 600;
                    line-height: 1.75;
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
