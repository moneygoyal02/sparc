import { useEffect, useRef } from 'react'

function ParticleTrail() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let particles = []
        let animationFrameId

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()

        // Electric spark particle — sharp, fast, battery-themed
        class Particle {
            constructor(x, y) {
                this.x = x
                this.y = y

                // Fast directional burst — like an electrical discharge
                const angle = Math.random() * Math.PI * 2
                const speed = Math.random() * 2.5 + 0.8
                this.speedX = Math.cos(angle) * speed
                this.speedY = Math.sin(angle) * speed - 0.6  // slight upward bias

                this.size = Math.random() * 2.5 + 1

                // Electric palette: white-yellow core → electric blue edge
                const type = Math.random()
                if (type < 0.4) {
                    // Bright white-yellow core spark
                    this.color = `hsla(${50 + Math.random() * 20}, 100%, 95%, 0.95)`
                } else if (type < 0.75) {
                    // Electric blue
                    this.color = `hsla(${210 + Math.random() * 25}, 100%, 65%, 0.85)`
                } else {
                    // Cyan-teal accent
                    this.color = `hsla(${185 + Math.random() * 20}, 95%, 60%, 0.75)`
                }

                this.life = 1.0
                this.decay = Math.random() * 0.035 + 0.025  // faster fade than fluid
                this.gravity = 0.04  // slight downward pull
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                this.speedY += this.gravity   // gravity
                this.speedX *= 0.97           // air resistance
                this.size -= 0.06
                this.life -= this.decay
            }

            draw() {
                ctx.save()
                ctx.globalAlpha = Math.max(0, this.life)

                // Draw as a small diamond/cross for a spark feel
                const s = Math.max(0, this.size)
                ctx.translate(this.x, this.y)
                ctx.rotate(Math.PI / 4)

                // Glow effect
                ctx.shadowColor = this.color
                ctx.shadowBlur = s * 4

                ctx.fillStyle = this.color
                ctx.fillRect(-s / 2, -s / 2, s, s)

                ctx.restore()
            }
        }

        const handleMouseMove = (e) => {
            // 1–2 sparks per move event — crisp, not overwhelming
            const count = Math.random() < 0.4 ? 2 : 1
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(e.clientX, e.clientY))
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update()
                particles[i].draw()

                if (particles[i].life <= 0 || particles[i].size <= 0.1) {
                    particles.splice(i, 1)
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMouseMove)
        animate()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999
            }}
        />
    )
}

export default ParticleTrail
