import { useParallax } from '../hooks/useParallax'

function About() {
    const imageParallax = useParallax(-0.05)

    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Left Image */}
                    <div className="about-image-container" ref={imageParallax.ref} style={imageParallax.style}>
                        <div className="image-wrapper">
                            <img
                                src="/assets/images/building.jpg"
                                alt="NIT Jalandhar Campus"
                                className="about-img"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="about-content">
                        <h3 className="section-title-left">ABOUT THE PROGRAM</h3>
                        <p className="about-description">
                            The workshop focuses on advanced waste heat recovery technologies
                            and thermal polygeneration systems for sustainable energy utilization.
                            The program aims to bridge theoretical concepts with practical
                            applications through expert lectures, skill development, and technical
                            discussions.
                        </p>
                        <p className="about-description">
                            Participants will gain fundamental and advanced knowledge of waste heat recovery,
                            exergy analysis, optimization frameworks, and system integration for combined power, heating, and cooling.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
