import { useParallax } from '../hooks/useParallax'
import ScrollReveal from './ScrollReveal'

function Speakers() {
    const titleParallax = useParallax(-0.05)

const speakers = [
    {
        name: 'Dr. Elham Sahraei',
        type: 'International Expert',
        designation: 'Associate Professor of Mechanical Engineering & Director, Center for Battery Safety (CBS) / Electric Vehicle Safety Lab (EVSL)',
        affiliation: 'Temple University, USA',
        image: '/assets/images/speaker_elham.jpg',   // 📌 Add photo: speaker_elham.jpg
        bio: 'An internationally recognized authority on lithium-ion battery crashworthiness, mechanical integrity, and abuse mechanics. Pioneer of the Sahraei Failure Criterion — widely adopted by automotive OEMs. Recipient of the 2024 ASME Edward F. Obert Award. Research secured over $3 million in grants from the Office of Naval Research, automotive industry, and federal transportation agencies.'
    },
    {
        name: 'Prof. Arunachala Mada Kannan',
        type: 'International Expert',
        designation: 'Professor & Graduate Program Chair (Clean Energy Systems), Ira A. Fulton Schools of Engineering',
        affiliation: 'Arizona State University (ASU), USA',
        image: '/assets/images/speaker_kannan.jpg',  // 📌 Add photo: speaker_kannan.jpg
        bio: 'Over three decades of distinguished leadership in energy conversion and storage technologies. Ph.D. from the Indian Institute of Science (IISc), Bangalore. Author of 150+ high-impact peer-reviewed publications with 8 U.S. patents. Managed sponsored research funding exceeding $9 million from DOE, DOD, and Salt River Project. Associate Editor of the International Journal of Hydrogen Energy.'
    },
    {
        name: 'Prof. T. J. Dhilip Kumar',
        type: 'Academic Speaker',
        designation: 'Professor',
        affiliation: 'Indian Institute of Technology Ropar',
        image: '/assets/images/speaker_dhilip.jpg'  // 📌 Add photo: speaker_dhilip.jpg
    },
    {
        name: 'Dr. Rabinder Singh Bharj',
        type: 'Academic Speaker',
        designation: 'Associate Professor, Department of Mechanical Engineering',
        affiliation: 'National Institute of Technology Jalandhar',
        image: '/assets/images/speaker_bharj.jpg'   // 📌 Add photo: speaker_bharj.jpg
    },
    {
        name: 'Dr. Saurabh Saxena',
        type: 'Academic Speaker',
        designation: 'Assistant Professor',
        affiliation: 'Indian Institute of Technology Delhi',
        image: '/assets/images/speaker_saxena.jpg'  // 📌 Add photo: speaker_saxena.jpg
    },
    {
        name: 'Dr. Manish Kumar Rathod',
        type: 'Academic Speaker',
        designation: 'Associate Professor',
        affiliation: 'National Institute of Technology, Surat',
        image: '/assets/images/speaker_rathod.jpg'  // 📌 Add photo: speaker_rathod.jpg
    },
    {
        name: 'Mr. Suraj S D',
        type: 'Industry Speaker',
        designation: 'Founder & CEO',
        affiliation: 'Decibels Lab Pvt Ltd, India',
        image: '/assets/images/speaker_suraj.jpg'   // 📌 Add photo: speaker_suraj.jpg
    },
    {
        name: 'Mr. Rahul Goyal',
        type: 'Industry Speaker',
        designation: 'Founder & CEO',
        affiliation: 'Republic Motors, Jalandhar, India',
        image: '/assets/images/speaker_rahul.jpg'   // 📌 Add photo: speaker_rahul.jpg
    },
    {
        name: 'Dr. Rajan Kumar',
        type: 'Workshop Coordinator',
        designation: 'Assistant Professor, Department of Mechanical Engineering',
        affiliation: 'NIT Jalandhar, Punjab',
        image: '/assets/images/organizer_2.png'
    },
    {
        name: 'Prof. T. Srinivas',
        type: 'Workshop Co-Coordinator',
        designation: 'Professor, Department of Mechanical Engineering',
        affiliation: 'NIT Jalandhar, Punjab',
        image: '/assets/images/organizer_1.jpg'
    }
];

    const featuredSpeakers = speakers.filter((s) => s.bio)
    const regularSpeakers = speakers.filter((s) => !s.bio)

    return (
        <section className="section speakers-section" id="speakers">
            <div className="container">
                {/* Section Header */}
                <div
                    className="speakers-header"
                    ref={titleParallax.ref}
                    style={titleParallax.style}
                >
                    <span className="section-eyebrow">International Faculty</span>
                    <h2 className="section-title">
                        Distinguished International Experts
                    </h2>
                    <p className="speakers-intro">
                        World-renowned experts in lithium-ion battery safety,
                        thermo-mechanical modelling, electrochemical systems,
                        and next-generation energy storage technologies.
                    </p>
                </div>

                {/* ── Featured Expert Cards ── */}
                <div className="featured-speakers-grid">
                    {featuredSpeakers.map((speaker, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.15}
                            style={{ width: '100%' }}
                        >
                            <article className="featured-speaker-card">
                                <div className="featured-photo-wrap">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="featured-photo"
                                        loading="lazy"
                                        decoding="async"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'flex'
                                        }}
                                    />
                                    <div className="featured-photo-fallback">
                                        {speaker.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                                    </div>
                                </div>
                                <div className="featured-speaker-info">
                                    <span className="featured-expert-badge">
                                        {speaker.type}
                                    </span>
                                    <h3 className="featured-name">{speaker.name}</h3>
                                    <p className="featured-designation">{speaker.designation}</p>
                                    <p className="featured-affiliation">{speaker.affiliation}</p>
                                    <p className="featured-bio">{speaker.bio}</p>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div className="speakers-section-divider">
                    <span>National Experts</span>
                </div>

                {/* ── Regular Speaker Grid ── */}
                <div className="speakers-grid">
                    {regularSpeakers.map((speaker, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.08}
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
                                            e.target.nextSibling.style.display = 'flex'
                                        }}
                                    />
                                    <div className="profile-photo-fallback">
                                        {speaker.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                                    </div>
                                </div>
                                <div className="speaker-info">
                                    <span className="speaker-type">{speaker.type}</span>
                                    <h3>{speaker.name}</h3>
                                    <p className="designation">{speaker.designation}</p>
                                    <p className="affiliation">{speaker.affiliation}</p>
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
