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
                            ABOUT THE WORKSHOP
                        </h3>
                        <p className="about-description">
                            The workshop on &ldquo;Advanced Battery Technologies
                            for Next-Generation Energy Storage: Modelling,
                            Design, and Thermal Management&rdquo; is an academic
                            dissemination initiative supported by the Scheme for
                            Promotion of Academic and Research Collaboration
                            (SPARC), Ministry of Education, Government of India.
                        </p>
                        <p className="about-description">
                            It is organized as part of the collaborative
                            bilateral SPARC project entitled &ldquo;Thermo-Mechanical
                            Analysis and Experimental Validation of Lithium-Ion
                            Battery Modules for Enhanced Safety and
                            Performance&rdquo; between Dr B. R. Ambedkar
                            National Institute of Technology (NIT) Jalandhar,
                            Arizona State University (ASU), and Temple
                            University.
                        </p>
                        <p className="about-description">
                            The workshop provides an intensive forum covering the
                            thermo-mechanical reliability and performance
                            optimization of lithium-ion batteries (LIBs). It
                            bridges fundamental multi-physics theory with
                            practical engineering design, bringing together
                            researchers, doctoral scholars, and industry
                            professionals to explore cutting-edge simulation,
                            packaging architectures, and experimental
                            methodologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
