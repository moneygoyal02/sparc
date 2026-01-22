import { useParallax } from '../hooks/useParallax'
import ScrollReveal from './ScrollReveal'

function Speakers() {
    const titleParallax = useParallax(-0.05)

    const speakers = [
        {
            name: "Prof. Umberto Desideri",
            designation: "Professor",
            affiliation: "University of Pisa, Italy",
            image: "/assets/images/speaker_2.png"
        },
        {
            name: "Prof. Christos N. Markides",
            designation: "Professor",
            affiliation: "Imperial College London, UK",
            image: "/assets/images/speaker_1.png"
        },
        {
            name: "Dr. Manish Kaushal",
            designation: "Asst. Professor",
            affiliation: "Indian Institute of Technology Kharagpur, West Bengal",
            image: "/assets/images/speaker_3.webp"
        },
        {
            name: "Mr Vinay Devasthali",
            designation: "Director",
            affiliation: "Saveeco Energy India Pvt. Ltd., Pune, Maharashtra",
            image: "/assets/images/speaker_4.jpg"
        },
        {
            name: "Prof. R Saravanan",
            designation: "Professor, Dept. of Mechanical Engineering",
            affiliation: "Anna University, Chennai, Tamil Nadu",
            image: "/assets/images/speaker_5.jpg"
        },
        {
            name: "Prof. Sudipta De",
            designation: "Professor, Dept. of Mechanical Engineering",
            affiliation: "Jadavpur University, Kolkata, West Bengal",
            image: "/assets/images/speaker_7.jpg"
        },
        {
            name: "Prof. N Shankar Ganesh",
            designation: "Professor and Director, R&D",
            affiliation: "Global Institute of Engineering and Technology, Ranipet, Tamil Nadu",
            image: "/assets/images/speaker_8.jpeg"
        },
        {
            name: "Mr Abhijeet Chaudhari",
            designation: "Director",
            affiliation: "Enrecover Pvt. Limited, Pune, Maharashtra",
            image: "/assets/images/speaker_9.jpeg"
        },
        {
            name: "Prof. Tangellapalli Srinivas",
            designation: "Professor",
            affiliation: "NIT Jalandhar",
            image: "/assets/images/speaker_6.jpg"
        },
        {
            name: "Dr Rajan Kumar",
            designation: "Asst. Professor",
            affiliation: "NIT Jalandhar",
            image: "/assets/images/organizer_2.png"
        }
    ]

    return (
        <section className="section speakers-section" id="speakers">
            <div className="container">
                <h2 className="section-title" ref={titleParallax.ref} style={titleParallax.style}>Distinguished Workshop Speakers</h2>
                <div className="speakers-grid">
                    {speakers.map((speaker, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} style={{ height: '100%' }}>
                            <div className="profile-card">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="profile-photo"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback Initials Circle (Hidden by default) */}
                                <div className="profile-photo-fallback" style={{
                                    display: 'none',
                                    width: '90px',
                                    height: '90px',
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                                    borderRadius: '50%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    flexShrink: 0
                                }}>
                                    {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>

                                <div className="speaker-info">
                                    <h3>{speaker.name}</h3>
                                    <p className="designation">{speaker.designation}</p>
                                    <p className="affiliation">{speaker.affiliation}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Speakers
