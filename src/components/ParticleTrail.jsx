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

        class Particle {
            constructor(x, y) {
                this.x = x
                this.y = y
                this.size = Math.random() * 5 + 2
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 2 - 1
                this.color = `hsla(${200 + Math.random() * 40}, 100%, 70%, 0.8)` // Blue-ish thermal colors
                this.life = 1.0
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.size > 0.2) this.size -= 0.1
                this.life -= 0.02
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.globalAlpha = this.life
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.globalAlpha = 1.0
            }
        }

        const handleMouseMove = (e) => {
            // Reduced density: only 1 particle per event
            particles.push(new Particle(e.x, e.y))
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()

                if (particles[i].life <= 0 || particles[i].size <= 0.2) {
                    particles.splice(i, 1)
                    i--
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
                zIndex: 9999 // Ensure it's on top of everything
            }}
        />
    )
}

export default ParticleTrail
