import { useParallax } from '../hooks/useParallax'
import ScrollReveal from './ScrollReveal'

function Speakers() {
    const titleParallax = useParallax(-0.05)

const speakers = [
    {
        name: 'Prof. Christos N. Markides',
        type: 'International Expert',
        designation: 'Professor',
        affiliation: 'Imperial College London, UK',
        image: '/assets/images/speaker_1.png'
    },
    {
        name: 'Prof. Umberto Desideri',
        type: 'International Expert',
        designation: 'Professor',
        affiliation: 'University of Pisa, Italy',
        image: '/assets/images/speaker_2.png'
    },
    {
        name: 'Prof. Anil Kumar Emadabathuni',
        type: 'Academic Speaker',
        designation: 'Professor, Department of Mechanical Engineering',
        affiliation: 'IIT Tirupati',
        image: '/assets/images/speaker_anil.jpg'
    },
    {
        name: 'Dr. Jagabandhu Kole',
        type: 'Industry Speaker',
        designation: 'Sr Vice President R & D',
        affiliation: 'JSW Cements, Mumbai',
        image: '/assets/images/speaker_jagabandhu.jpg'
    },
    {
        name: 'Prof. AVSSKS Gupta',
        type: 'Academic Speaker',
        designation: 'Professor, Department of Mechanical Engineering',
        affiliation: 'JNTU, Hyderabad',
        image: '/assets/images/speaker_gupta.jpeg'
    },
    {
        name: 'Mr. Abhijeet Chaudhari',
        type: 'Industry Speaker',
        designation: 'Director',
        affiliation: 'Enrecover Pvt. Limited, Pune',
        image: '/assets/images/speaker_9.jpeg'
    },
    {
        name: 'Prof. S Suresh',
        type: 'Academic Speaker',
        designation: 'Professor, Department of Mechanical Engineering',
        affiliation: 'NIT Tiruchirappalli',
        image: '/assets/images/speaker_suresh.jpg'
    },
    {
        name: 'Dr. Abhishek Agarwal',
        type: 'Industry Speaker',
        designation: 'Managing Director',
        affiliation: 'Siemens Energy India Limited, New Delhi',
        image: '/assets/images/speaker_abhishek.jpg'
    },
    {
        name: 'Prof. Eswaramoorthy Muthusamy',
        type: 'Academic Speaker',
        designation: 'Professor, School of Mechanical Engineering',
        affiliation: 'Shri Mata Vaishno Devi University, Katra',
        image: '/assets/images/speaker_eswaramoorthy.jpg'
    },
    {
        name: 'Mr. Arijit Ghosh',
        type: 'Industry Speaker',
        designation: 'Managing Director',
        affiliation: 'S.A.P. Automations India Pvt. Ltd., New Delhi',
        image: '/assets/images/speaker_arijit.jpeg'
    },
    {
        name: 'Dr. Ankit Gupta',
        type: 'Research Speaker',
        designation: 'Scientist-E',
        affiliation: 'CSIR–National Environmental Engineering Research Institute (NEERI), New Delhi',
        image: '/assets/images/speaker_ankit.jpg'
    },
    {
        name: 'Prof. T Srinivas',
        type: 'Workshop Coordinator',
        designation: 'Professor, Department of Mechanical Engineering',
        affiliation: 'NIT Jalandhar',
        image: '/assets/images/speaker_6.jpg'
    },
    {
        name: 'Dr. Rajan Kumar',
        type: 'Workshop Co-Coordinator',
        designation: 'Assistant Professor, Department of Mechanical Engineering',
        affiliation: 'NIT Jalandhar',
        image: '/assets/images/organizer_2.png'
    }
];

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
