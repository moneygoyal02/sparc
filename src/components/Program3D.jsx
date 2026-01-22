import React, { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Text, useCursor, Environment, Float, Stars } from '@react-three/drei'
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

function Card({ item, index, activeIndex, total, setActiveIndex }) {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)

    // Calculate position in the carousel
    // spacing between cards
    const xSpacing = 3.5

    // We want the active card to be at x=0
    // So each card's x is (index - activeIndex) * xSpacing
    const targetX = (index - activeIndex) * xSpacing
    const isActive = index === activeIndex

    // Calculate scale and z-index based on distance from center
    const dist = Math.abs(index - activeIndex)
    const scale = isActive ? 1.1 : Math.max(0.8 - dist * 0.1, 0.6)
    const zIndex = isActive ? 10 : 5 - dist
    const opacity = isActive ? 1 : Math.max(0.5 - dist * 0.15, 0.2)

    useFrame((state, delta) => {
        ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, delta * 4)

        // Add a slight float effect to active card
        if (isActive) {
            ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, Math.sin(state.clock.elapsedTime) * 0.1, delta * 2)
        } else {
            ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, 0, delta * 4)
        }

        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (index - activeIndex) * -0.2, delta * 4)
    })

    const cardStyle = {
        width: '320px',
        padding: '24px',
        borderRadius: '16px',
        background: item.type === 'break' ? 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)' : 'rgba(255, 255, 255, 0.95)',
        border: item.type === 'break' ? '2px solid #fdba74' : '2px solid white',
        boxShadow: isActive ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
        opacity: opacity,
        transform: `scale(${scale})`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textAlign: 'left',
        userSelect: 'none'
    }

    return (
        <group ref={ref} position={[index * xSpacing, 0, 0]}>
            <Html transform position={[0, 0, 0]} style={{ pointerEvents: 'none' }} zIndexRange={[100 - dist, 0]}>
                <div
                    style={cardStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => setActiveIndex(index)}
                >
                    <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        color: item.type === 'break' ? '#ea580c' : '#2563eb',
                        marginBottom: '8px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <span>{item.time}</span>
                        {item.session && <span style={{
                            background: 'rgba(37, 99, 235, 0.1)',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '0.75rem'
                        }}>{item.session}</span>}
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 style={{
                            margin: '0 0 8px 0',
                            fontSize: '1.2rem',
                            color: '#1e293b',
                            lineHeight: '1.4'
                        }}>{item.title}</h3>

                        {item.speaker && (
                            <div style={{ color: '#ea580c', fontWeight: '600', marginBottom: '4px' }}>
                                {item.speaker}
                            </div>
                        )}

                        {item.details && (
                            <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                                {item.details}
                            </div>
                        )}
                    </div>
                </div>
            </Html>

            {/* Hitbox meshes for interaction since Html has pointerEvents none/limited issues in 3D sometimes */}
            <mesh
                onClick={(e) => {
                    e.stopPropagation()
                    setActiveIndex(index)
                }}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                visible={false}
            >
                <planeGeometry args={[3.5, 5]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
        </group>
    )
}

function Scene({ activeDayItems }) {
    const [activeIndex, setActiveIndex] = useState(0)

    // Reset index when day changes, but can keep nicely
    useEffect(() => {
        setActiveIndex(0)
    }, [activeDayItems])

    // Arrow keys navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setActiveIndex(prev => Math.min(prev + 1, activeDayItems.length - 1))
            } else if (e.key === 'ArrowLeft') {
                setActiveIndex(prev => Math.max(prev - 1, 0))
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [activeDayItems.length])

    return (
        <group position={[0, 0, 0]}>
            {activeDayItems.map((item, index) => (
                <Card
                    key={index}
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    total={activeDayItems.length}
                    setActiveIndex={setActiveIndex}
                />
            ))}
        </group>
    )
}

export default function Program3D() {
    const [activeDay, setActiveDay] = useState(1)

    return (
        <section className="section" id="program" style={{
            background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)',
            padding: '4rem 0',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
                <h2 className="section-title text-center">Programme Schedule</h2>

                <div className="program-tabs">
                    <button
                        className={`program-tab ${activeDay === 1 ? 'active' : ''}`}
                        onClick={() => setActiveDay(1)}
                    >
                        <span className="tab-date">09 February 2026</span>
                        <span className="tab-day">Monday</span>
                    </button>
                    <button
                        className={`program-tab ${activeDay === 2 ? 'active' : ''}`}
                        onClick={() => setActiveDay(2)}
                    >
                        <span className="tab-date">10 February 2026</span>
                        <span className="tab-day">Tuesday</span>
                    </button>
                </div>
            </div>

            <div style={{ height: '500px', width: '100%', position: 'relative' }}>
                {/* Navigation Hints */}
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    color: '#64748b',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    pointerEvents: 'none'
                }}>
                    Swipe or use Arrow Keys to navigate sessions
                </div>

                <Canvas camera={{ position: [0, 0, 12], fov: 40 }} dpr={[1, 2]}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    {/* Add some subtle stars for depth in the clean background */}
                    <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />

                    <Scene activeDayItems={schedule[`day${activeDay}`]} />

                    <Environment preset="city" />
                </Canvas>
            </div>
        </section>
    )
}
