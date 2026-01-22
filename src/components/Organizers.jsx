import React from 'react';
import ScrollReveal from './ScrollReveal';

const OrganizerCard = ({ name, role, designation, department, institution, image, isLocal = false }) => {
    const [imgError, setImgError] = React.useState(false);

    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return (
        <div className={isLocal ? "organizer-card" : "expert-card"}>
            <div className={isLocal ? "organizer-image-wrapper" : "expert-img-wrapper"}>
                {!imgError ? (
                    <img
                        src={image}
                        alt={name}
                        className={isLocal ? "organizer-img" : "expert-img"}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="organizer-placeholder">
                        {initials}
                    </div>
                )}
            </div>
            {isLocal && <div className="organizer-role">{role}</div>}
            <h3 className={isLocal ? "organizer-name" : "expert-name"}>{name}</h3>
            <p className={isLocal ? "organizer-details" : "expert-role"}>
                {designation}
                {department && <span className="dept-text">{department}</span>}
                <br />
                {institution}
            </p>
        </div>
    );
};

function Organizers() {
    const patrons = [
        {
            name: "Prof. Binod Kumar Kanaujia",
            role: "Patron",
            designation: "Director",
            institution: "NIT Jalandhar, Punjab",
            image: "/assets/images/patron_1.jpg"
        },
        {
            name: "Prof. Ajay Bansal",
            role: "Co-Patron",
            designation: "Registrar",
            institution: "NIT Jalandhar, Punjab",
            image: "/assets/images/patron_2.jpg"
        },
        {
            name: "Prof. Rohit Mehra",
            role: "Co-Patron",
            designation: "Dean Research and Consultancy",
            institution: "NIT Jalandhar, Punjab",
            image: "/assets/images/patron_3.jpg"
        }
    ];

    const localOrganizers = [
        {
            name: "Dr. Tangellapalli Srinivas",
            role: "Coordinator",
            designation: "Professor",
            department: "Department of Mechanical Engineering",
            institution: "NIT Jalandhar, Punjab",
            image: "/assets/images/organizer_1.jpg"
        },
        {
            name: "Dr. Rajan Kumar",
            role: "Co-Coordinator",
            designation: "Assistant Professor",
            department: "Department of Mechanical Engineering",
            institution: "NIT Jalandhar, Punjab",
            image: "/assets/images/organizer_2.png"
        }
    ];

    const experts = [
        {
            name: "Prof. Christos N. Markides",
            designation: "Professor of Clean Energy Technologies",
            institution: "Imperial College London, UK",
            image: "/assets/images/speaker_1.png"
        },
        {
            name: "Prof. Umberto Desideri",
            designation: "Professor",
            institution: "University of Pisa, Italy",
            image: "/assets/images/speaker_2.png"
        }
    ];

    const committeeMembers = [
        "Prof. Joseph Anand Vaz", "Prof. Subhash Chander", "Prof. Raman Bedi", "Prof. Pramod Kumar",
        "Prof. Dinesh Kumar Shukla", "Er. Ajay Trehan", "Dr. R. S. Bharj", "Dr. Rajeev Kukreja",
        "Dr. S. K. Tiwari", "Dr. Sarbjot Singh Sandhu", "Dr. Dushyant Singh", "Dr. Ashok Kumar Bagha",
        "Dr. Dwesh K. Singh", "Dr. Manoj Kumar", "Dr. Nitin Sharma", "Dr. Ranchan Chauhan",
        "Dr. Sanjay", "Dr. Satyender Singh", "Dr. Saurabh Kango", "Dr. Sumit Sharma",
        "Dr. Harpreet Singh", "Dr. Parnika Shrivastava", "Dr. Ravi Kant Ravi"
    ];

    return (
        <section className="section organizers-section" id="organizers">
            <div className="container">
                {/* Patrons */}
                <div className="patrons-container">
                    <div className="patrons-title-badge">Patrons</div>
                    <div className="patrons-grid">
                        {patrons.map((patron, index) => (
                            <ScrollReveal key={index} delay={index * 0.15}>
                                <OrganizerCard {...patron} isLocal={true} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Local Organizers */}
                <div className="local-organizers-container">
                    <div className="organizers-title-badge">Organizers</div>
                    <div className="local-organizers-grid">
                        {localOrganizers.map((org, index) => (
                            <ScrollReveal key={index} delay={index * 0.15}>
                                <OrganizerCard {...org} isLocal={true} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Organizing Committee */}
                <div className="committee-container">
                    <h3 className="committee-title">Organizing Committee</h3>
                    <div className="committee-grid">
                        {committeeMembers.map((member, index) => (
                            <div key={index} className="committee-card">
                                <div className="committee-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <span className="committee-name">{member}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Organizers;
