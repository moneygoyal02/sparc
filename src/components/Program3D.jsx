import React, { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// Schedule Data
const schedule = {
    day1: [
        { time: "10.00 – 10.40 am", title: "Inaugural Session", type: "inaugural" },
        { time: "10.40 – 11.00 am", title: "Tea Break", type: "break" },
        { time: "11.00 – 11.50 am", session: "Session 1", title: "Decentralized Polygeneration Solutions", speaker: "Prof. R Saravanan", details: "Anna University, Chennai", type: "session" },
        { time: "11.55 – 12.45 pm", session: "Session 2", title: "Polygeneration Using Waste Heat", speaker: "Prof. Sudipta De", details: "Jadavpur University, Kolkata", type: "session" },
        { time: "12.45 – 02.00 pm", title: "Lunch Break", type: "break" },
        { time: "02.00 – 02.50 pm", session: "Session 3", title: "Waste Heat Recovery Applications", speaker: "Mr Abhijeet Chaudhari", details: "Enrecover Pvt. Ltd., Pune", type: "session" },
        { time: "02.50 – 03.05 pm", title: "Tea Break", type: "break" },
        { time: "03.05 – 03.25 pm", session: "Session 4", title: "Students' Experiences & Feedback", speaker: "Dr Manish Kaushal", details: "IIT Kharagpur", type: "session" },
        { time: "03.30 – 05.00 pm", session: "Session 5", title: "Hands-on Training Session", speaker: "Dr T Srinivas & Dr Rajan Kumar", details: "NIT Jalandhar", type: "session" }
    ],
    day2: [
        { time: "10.00 – 10.50 am", session: "Session 6", title: "Decarbonisation of Industrial Energy Users", speaker: "Prof. Umberto Desideri", details: "University of Pisa, Italy", type: "session" },
        { time: "10.50 – 11.05 am", title: "Tea Break", type: "break" },
        { time: "11.05 – 11.55 am", session: "Session 7", title: "Industry Lecture", speaker: "Mr. Vinay Devasthali", details: "Saveeco Energy India Pvt. Ltd.", type: "session" },
        { time: "11.55 – 01.30 pm", title: "Lunch Break", type: "break" },
        { time: "01.30 – 02.20 pm", session: "Session 8", title: "Thermoeconomic Investigation", speaker: "Prof. N Shankar Ganesh", details: "GIET, Ranipet, Tamil Nadu", type: "session" },
        { time: "02.30 – 03.15 pm", session: "Session 9", title: "Technological Pathways for Waste Heat", speaker: "Prof. Christos N. Markides", details: "Imperial College London, UK", type: "session" },
        { time: "03.15 – 03.30 pm", title: "Tea Break", type: "break" },
        { time: "03.30 – 04.15 pm", title: "Valedictory Session", type: "inaugural" }
    ]
}

function ParticleField(props) {
    const ref = useRef()
    const [sphere] = useState(() => {
        const coords = new Float32Array(3000 * 3)
        for (let i = 0; i < 3000; i++) {
            const r = 10 * Math.cbrt(Math.random())
            const theta = Math.random() * 2 * Math.PI
            const phi = Math.acos(2 * Math.random() - 1)
            coords[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            coords[i * 3 + 2] = r * Math.cos(phi)
        }
        return coords
    })

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15
        ref.current.rotation.y -= delta / 20
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#1e40af" // primary-blue
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.3} // Slightly reduced opacity for subtle blending
                />
            </Points>
        </group>
    )
}

function ScheduleItem({ item }) {
    return (
        <div className="schedule-item-glass">
            <div className="time-badge">{item.time}</div>
            <div className="content-area">
                {item.session && <span className="session-tag">{item.session}</span>}
                <div className="item-title">{item.title}</div>
                {item.speaker && <div className="item-speaker">{item.speaker}</div>}
                {item.details && <div className="item-details">{item.details}</div>}
            </div>
            {item.type === 'break' && <div className="type-indicator break" />}
            {item.type === 'inaugural' && <div className="type-indicator inaugural" />}
        </div>
    )
}

export default function Program3D() {
    const [activeDay, setActiveDay] = useState(1)

    return (
        <section className="section" id="program" style={{ position: 'relative', height: '800px', overflow: 'hidden' }}>
            {/* 3D Background - Seamless Blend */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                {/* 
                    Gradient Strategy:
                    Start: #f8fafc (Matches Speakers Section Bottom)
                    End: #eff6ff (Very subtle blue tint for depth, not "Sky Blue") 
                */}
                <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }} />
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                        <ParticleField />
                    </Float>
                    <ambientLight intensity={0.7} />
                </Canvas>
            </div>

            {/* Glassmorphism Overlay - Reduced Padding Top */}
            <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', padding: '1rem 2rem 4rem 2rem' }}>
                <h2 className="section-title text-center" style={{ color: '#1e3a8a', marginBottom: '2rem', marginTop: '1rem' }}>Programme Schedule</h2>

                <div className="glass-dashboard">
                    {/* Tabs */}
                    <div className="dashboard-tabs">
                        <button
                            className={`dashboard-tab ${activeDay === 1 ? 'active' : ''}`}
                            onClick={() => setActiveDay(1)}
                        >
                            Day 1 <span style={{ fontSize: '0.8em', opacity: 0.8 }}>(Feb 09)</span>
                        </button>
                        <button
                            className={`dashboard-tab ${activeDay === 2 ? 'active' : ''}`}
                            onClick={() => setActiveDay(2)}
                        >
                            Day 2 <span style={{ fontSize: '0.8em', opacity: 0.8 }}>(Feb 10)</span>
                        </button>
                    </div>

                    {/* Scrollable List */}
                    <div className="dashboard-content custom-scrollbar">
                        {schedule[`day${activeDay}`].map((item, index) => (
                            <ScheduleItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .glass-dashboard {
                    flex: 1;
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
                    max-width: 900px;
                    margin: 0 auto;
                    width: 100%;
                }

                .dashboard-tabs {
                    display: flex;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    background: rgba(255, 255, 255, 0.5);
                }

                .dashboard-tab {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #64748b;
                    padding: 1.25rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .dashboard-tab:hover {
                    background: rgba(255, 255, 255, 0.8);
                    color: #1e40af;
                }

                .dashboard-tab.active {
                    color: #1e40af;
                    background: rgba(59, 130, 246, 0.1);
                    border-bottom: 2px solid #1e40af;
                }

                .dashboard-content {
                    flex: 1;
                    overflow-y: auto;
                    padding: 2rem;
                }

                /* Custom Scrollbar */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(148, 163, 184, 0.5);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(148, 163, 184, 0.8);
                }

                .schedule-item-glass {
                    background: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 12px;
                    padding: 1.25rem;
                    margin-bottom: 1rem;
                    display: flex;
                    gap: 1.5rem;
                    position: relative;
                    transition: all 0.2s ease;
                    color: #1f2937;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }

                .schedule-item-glass:hover {
                    background: rgba(255, 255, 255, 0.95);
                    transform: translateX(5px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .time-badge {
                    font-family: monospace;
                    background: #eff6ff;
                    padding: 0.5rem 0.75rem;
                    border-radius: 6px;
                    color: #1e40af;
                    font-weight: 600;
                    height: fit-content;
                    white-space: nowrap;
                    font-size: 0.9rem;
                    border: 1px solid #dbeafe;
                }

                .content-area {
                    flex: 1;
                }

                .session-tag {
                    display: inline-block;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #3b82f6;
                    background: rgba(59, 130, 246, 0.1);
                    padding: 0.15rem 0.5rem;
                    border-radius: 4px;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }

                .item-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    line-height: 1.4;
                    color: #1e3a8a;
                }

                .item-speaker {
                    color: #d97706; /* Amber-600 */
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                }

                .item-details {
                    color: #4b5563;
                    font-size: 0.85rem;
                    font-style: italic;
                }

                .type-indicator {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    border-radius: 0 12px 12px 0;
                }

                .type-indicator.break {
                    background-color: #f59e0b; /* Orange */
                }
                
                .type-indicator.inaugural {
                    background-color: #eab308; /* Yellow */
                }

                @media (max-width: 768px) {
                    .schedule-item-glass {
                        flex-direction: column;
                        gap: 0.75rem;
                    }
                    .time-badge {
                        align-self: flex-start;
                    }
                }
            `}</style>
        </section>
    )
}
