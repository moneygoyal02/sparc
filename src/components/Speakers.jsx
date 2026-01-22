function Speakers() {
    const speakers = [
        {
            name: "Prof. Christos N. Markides",
            designation: "Professor of Clean Energy Technologies",
            affiliation: "Imperial College London, UK",
            image: "/assets/images/speaker_1.png"
        },
        {
            name: "Prof. Umberto Desideri",
            designation: "Professor",
            affiliation: "University of Pisa, Italy",
            image: "/assets/images/speaker_2.png"
        },
        {
            name: "Dr. Jagabandhu Kole",
            designation: "Sr Vice President R & D",
            affiliation: "JSW Cement Ltd., Mumbai",
            image: "/assets/images/speaker_3.jpg"
        },
        {
            name: "Prof. Anil Kumar Emadabathuni",
            designation: "Professor",
            affiliation: "IIT Tirupati",
            image: "/assets/images/speaker_4.jpg"
        },
        {
            name: "Prof. Jahar Sarkar",
            designation: "Professor",
            affiliation: "IIT (BHU), Varanasi",
            image: "/assets/images/speaker_5.jpg"
        },
        {
            name: "Prof. Tangellapalli Srinivas",
            designation: "Professor",
            affiliation: "NIT Jalandhar, Punjab",
            image: "/assets/images/speaker_6.jpg"
        }
    ]

    return (
        <section className="section speakers-section" id="speakers">
            <div className="container">
                <h2 className="section-title">Distinguished Workshop Speakers</h2>
                <div className="speakers-grid">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="profile-card">
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Speakers
