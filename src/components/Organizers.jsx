import React from 'react';

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
            institution: "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
            image: "/assets/images/patron_1.jpg"
        },
        {
            name: "Prof. Ajay Bansal",
            role: "Co-Patron",
            designation: "Registrar",
            institution: "NIT Jalandhar",
            image: "/assets/images/patron_2.jpg"
        },
        {
            name: "Prof. Rohit Mehra",
            role: "Co-Patron",
            designation: "Dean Research and Consultancy",
            institution: "NIT Jalandhar",
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

    return (
        <section className="section organizers-section" id="organizers">
            <div className="container">
                {/* Patrons */}
                <div className="patrons-container">
                    <div className="patrons-title-badge">Patrons</div>
                    <div className="patrons-grid">
                        {patrons.map((patron, index) => (
                            <OrganizerCard key={index} {...patron} isLocal={true} />
                        ))}
                    </div>
                </div>

                {/* Local Organizers */}
                <div className="local-organizers-container">
                    <div className="organizers-title-badge">Organizers</div>
                    <div className="local-organizers-grid">
                        {localOrganizers.map((org, index) => (
                            <OrganizerCard key={index} {...org} isLocal={true} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Organizers
