import { useParallax } from '../hooks/useParallax'

function About() {
    const imageParallax = useParallax(-0.05)

    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Left Image */}
                    <div
                        className="about-image-container"
                        ref={imageParallax.ref}
                        style={imageParallax.style}
                    >
                        <div className="image-wrapper">
                            <img
                                src="/assets/images/building.jpg"
                                alt="NIT Jalandhar Campus"
                                className="about-img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="about-content">
                        <h3 className="section-title-left">
                            ABOUT THE PROGRAMME
                        </h3>
                        <p className="about-description">
                            This SPARC Sponsored 2-Day Workshop on
                            &ldquo;Advancing Heat Recovery Thermal
                            Polygeneration: Computational Tools, Process Design,
                            and Practical Training&rdquo; is being conducted
                            under the SPARC project entitled &ldquo;Exergy
                            Optimization Framework for Waste Heat Recovery in
                            Next-Generation Polygeneration Systems.&rdquo; The
                            workshop aims to create a multidisciplinary platform
                            for researchers, academicians, industry
                            professionals, and students to explore recent
                            developments in heat recovery and thermal
                            polygeneration technologies.
                        </p>
                        <p className="about-description">
                            With growing emphasis on energy efficiency and
                            sustainable systems, the event will highlight
                            innovative approaches for integrating multiple
                            energy outputs from a single thermal source. The key
                            objectives include introducing participants to
                            advanced computational tools for thermal system
                            analysis, strengthening understanding of process
                            design methodologies, and providing practical
                            training through hands-on sessions and case studies.
                            Discussions will focus on improving energy
                            utilization, reducing environmental impact, and
                            enhancing the performance of industrial and
                            renewable energy systems.
                        </p>
                        <p className="about-description">
                            By bringing together international expertise and
                            collaborative research perspectives, the workshop
                            seeks to promote knowledge exchange, skill
                            development, and future academic and research
                            partnerships.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
