import { useParallax } from '../hooks/useParallax'
import ScrollReveal from './ScrollReveal'

function Speakers() {
    const titleParallax = useParallax(-0.05)

    const speakers = [
        {
            name: 'Prof. Umberto Desideri',
            type: 'International Expert',
            designation:
                'Professor, Dept. of Energy, Systems, Territory and Construction Engineering (DESTEC)',
            affiliation: 'University of Pisa, Italy',
            image: '/assets/images/speaker_2.png'
        },
        {
            name: 'Prof. Christos N. Markides',
            type: 'International Expert',
            designation:
                'Professor of Clean Energy Technologies, Dept. of Chemical Engineering',
            affiliation: 'Imperial College London, UK',
            image: '/assets/images/speaker_1.png'
        },
        {
            name: 'Dr. Manish Kaushal',
            type: 'Academic Speaker',
            designation: 'Assistant Professor',
            affiliation:
                'Indian Institute of Technology Kharagpur, West Bengal',
            image: '/assets/images/speaker_3.webp'
        },
        {
            name: 'Mr. Vinay Devasthali',
            type: 'Industry Speaker',
            designation: 'Director',
            affiliation: 'Saveeco Energy India Pvt. Ltd., Pune, Maharashtra',
            image: '/assets/images/speaker_4.jpg'
        },
        {
            name: 'Prof. R Saravanan',
            type: 'Academic Speaker',
            designation: 'Professor, Dept. of Mechanical Engineering',
            affiliation: 'Anna University, Chennai, Tamil Nadu',
            image: '/assets/images/speaker_5.jpg'
        },
        {
            name: 'Prof. Sudipta De',
            type: 'Academic Speaker',
            designation: 'Professor, Dept. of Mechanical Engineering',
            affiliation: 'Jadavpur University, Kolkata, West Bengal',
            image: '/assets/images/speaker_7.jpg'
        },
        {
            name: 'Prof. N Shankar Ganesh',
            type: 'Academic Speaker',
            designation: 'Professor and Director, R&D',
            affiliation:
                'Global Institute of Engineering and Technology, Ranipet, Tamil Nadu',
            image: '/assets/images/speaker_8.jpeg'
        },
        {
            name: 'Mr. Abhijeet Chaudhari',
            type: 'Industry Speaker',
            designation: 'Director',
            affiliation: 'Enrecover Pvt. Limited, Pune, Maharashtra',
            image: '/assets/images/speaker_9.jpeg'
        },
        {
            name: 'Prof. Tangellapalli Srinivas',
            type: 'Workshop Coordinator',
            designation: 'Professor',
            affiliation: 'NIT Jalandhar',
            image: '/assets/images/speaker_6.jpg'
        },
        {
            name: 'Dr. Rajan Kumar',
            type: 'Workshop Co-Coordinator',
            designation: 'Assistant Professor',
            affiliation: 'NIT Jalandhar',
            image: '/assets/images/organizer_2.png'
        }
    ]

    return (
        <section className="section speakers-section" id="speakers">
            <div className="container">
                <div
                    className="speakers-header"
                    ref={titleParallax.ref}
                    style={titleParallax.style}
                >
                    <span className="section-eyebrow">Invited Faculty</span>
                    <h2 className="section-title">
                        Distinguished Workshop Speakers
                    </h2>
                    <p className="speakers-intro">
                        Academic and industry experts contributing sessions on
                        heat recovery, exergy analysis, process design, and
                        thermal polygeneration systems.
                    </p>
                </div>
                <div className="speakers-grid">
                    {speakers.map((speaker, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            style={{ height: '100%' }}
                        >
                            <article className="profile-card">
                                <div className="speaker-photo-wrap">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="profile-photo"
                                        loading="lazy"
                                        decoding="async"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display =
                                                'flex'
                                        }}
                                    />
                                    <div className="profile-photo-fallback">
                                        {speaker.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')
                                            .slice(0, 2)}
                                    </div>
                                </div>

                                <div className="speaker-info">
                                    <span className="speaker-type">
                                        {speaker.type}
                                    </span>
                                    <h3>{speaker.name}</h3>
                                    <p className="designation">
                                        {speaker.designation}
                                    </p>
                                    <p className="affiliation">
                                        {speaker.affiliation}
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Speakers
