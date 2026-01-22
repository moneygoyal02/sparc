import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Flowing Energy Particles - Like heat/energy transfer
function EnergyFlow() {
    const particlesRef = useRef()
    const particlesCount = 80

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < particlesCount; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 30,
                y: Math.random() * 15 - 7.5,
                z: (Math.random() - 0.5) * 10,
                speed: 0.005 + Math.random() * 0.01,
                size: 0.05 + Math.random() * 0.08,
                opacity: 0.5 + Math.random() * 0.4,
                phase: Math.random() * Math.PI * 2
            })
        }
        return temp
    }, [])

    const mouseRef = useRef({ x: 9999, y: 9999 }) // Start off-screen

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize mouse position to -1 to 1
            mouseRef.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame((state) => {
        if (!particlesRef.current) return

        const positions = particlesRef.current.geometry.attributes.position.array
        const sizes = particlesRef.current.geometry.attributes.size.array
        const opacities = particlesRef.current.geometry.attributes.opacity.array

        // Calculate mouse position in world space at z=0
        const mouseVector = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0)
        mouseVector.unproject(state.camera)
        const dir = mouseVector.sub(state.camera.position).normalize()
        const distanceToPlane = -state.camera.position.z / dir.z
        const mouseWorldPos = state.camera.position.clone().add(dir.multiplyScalar(distanceToPlane))

        particles.forEach((particle, i) => {
            // Standard Flow
            particle.y += particle.speed
            particle.x += Math.sin(state.clock.elapsedTime * 0.5 + particle.phase) * 0.01

            // Mouse Interaction (Scatter)
            const dx = particle.x - mouseWorldPos.x
            const dy = particle.y - mouseWorldPos.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const interactionRadius = 4

            if (dist < interactionRadius) {
                const force = (interactionRadius - dist) * 0.05
                const angle = Math.atan2(dy, dx)
                particle.x += Math.cos(angle) * force
                particle.y += Math.sin(angle) * force
            }

            // Return to center influence (gentle gravity back to flow)
            // This prevents them from getting stuck or pushed too far forever

            // Reset when particle goes too high
            if (particle.y > 8) {
                particle.y = -8
                particle.x = (Math.random() - 0.5) * 30
            }

            positions[i * 3] = particle.x
            positions[i * 3 + 1] = particle.y
            positions[i * 3 + 2] = particle.z

            // Fade in/out based on height
            const fadeProgress = (particle.y + 8) / 16
            opacities[i] = particle.opacity * Math.sin(fadeProgress * Math.PI)
            sizes[i] = particle.size * (0.5 + fadeProgress * 0.5)
        })

        particlesRef.current.geometry.attributes.position.needsUpdate = true
        particlesRef.current.geometry.attributes.size.needsUpdate = true
        particlesRef.current.geometry.attributes.opacity.needsUpdate = true
    })

    const { positions, sizes, opacities } = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3)
        const size = new Float32Array(particlesCount)
        const opacity = new Float32Array(particlesCount)

        particles.forEach((particle, i) => {
            pos[i * 3] = particle.x
            pos[i * 3 + 1] = particle.y
            pos[i * 3 + 2] = particle.z
            size[i] = particle.size
            opacity[i] = particle.opacity
        })

        return { positions: pos, sizes: size, opacities: opacity }
    }, [particles])

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={particlesCount}
                    array={sizes}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-opacity"
                    count={particlesCount}
                    array={opacities}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                transparent
                depthWrite={false}
                vertexShader={`
                    attribute float size;
                    attribute float opacity;
                    varying float vOpacity;
                    
                    void main() {
                        vOpacity = opacity;
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        gl_PointSize = size * 100.0 / -mvPosition.z;
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `}
                fragmentShader={`
                    varying float vOpacity;
                    
                    void main() {
                        float dist = length(gl_PointCoord - vec2(0.5));
                        if (dist > 0.5) discard;
                        
                        float alpha = (1.0 - dist * 2.0) * vOpacity;
                        
                        // Gradient from blue to light blue
                        vec3 color = mix(vec3(0.23, 0.51, 0.96), vec3(0.58, 0.77, 0.99), dist);
                        
                        gl_FragColor = vec4(color, alpha);
                    }
                `}
            />
        </points>
    )
}

// Subtle Wave Lines - Representing thermal waves
function ThermalWaves() {
    const linesRef = useRef()
    const waveCount = 3

    useFrame((state) => {
        if (!linesRef.current) return

        const time = state.clock.elapsedTime
        const positions = []

        for (let w = 0; w < waveCount; w++) {
            const yOffset = -4 + w * 3
            const phase = w * Math.PI / 3

            for (let i = 0; i <= 50; i++) {
                const x = (i / 50) * 25 - 12.5
                const y = yOffset + Math.sin(i * 0.3 + time * 0.5 + phase) * 0.5
                const z = -5 - w

                positions.push(x, y, z)
            }
        }

        const points = []
        for (let i = 0; i < positions.length; i += 3) {
            points.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
        }

        linesRef.current.geometry.setFromPoints(points)
    })

    return (
        <line ref={linesRef}>
            <bufferGeometry />
            <lineBasicMaterial
                color="#3b82f6"
                transparent
                opacity={0.2}
                linewidth={1}
            />
        </line>
    )
}

// Main Scene
function Scene() {
    return (
        <>
            <ambientLight intensity={1} />
            <EnergyFlow />
            <ThermalWaves />
        </>
    )
}

// Main Component
export default function ThreeBackground() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
        </div>
    )
}
