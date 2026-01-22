import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

function Program() {
    const [activeDay, setActiveDay] = useState(1)

    const schedule = {
        day1: [
            {
                time: "10.00 – 10.40 am",
                title: "Inaugural Session",
                type: "inaugural"
            },
            {
                time: "10.40 – 11.00 am",
                title: "Tea Break",
                type: "break"
            },
            {
                time: "11.00 – 11.50 am",
                session: "Session 1",
                title: "Decentralized Polygeneration Solutions for Reliable and Sustainable Rural Energy",
                speaker: "Prof. R Saravanan",
                details: "Professor, Department of Mechanical Engineering, Anna University, Chennai, Tamil Nadu",
                type: "session"
            },
            {
                time: "11.55 am – 12.45 pm",
                session: "Session 2",
                title: "Polygeneration Using Waste Heat: An Overview and A Few Case Studies",
                speaker: "Prof. Sudipta De",
                details: "Professor, Department of Mechanical Engineering, Jadavpur University, Kolkata, West Bengal",
                type: "session"
            },
            {
                time: "12.45 – 02.00 pm",
                title: "Lunch Break",
                type: "break"
            },
            {
                time: "02.00 – 02.50 pm",
                session: "Session 3",
                title: "Waste Heat Recovery Applications and Opportunities in Industrial Sectors Targeting High Energy Intensive Industries",
                speaker: "Mr Abhijeet Chaudhari",
                details: "Director, Enrecover Pvt. Limited, Pune, Maharashtra, India",
                note: "Focus on Energy Recovery Turbines (Industries: Steel, Cement, Geothermal)",
                type: "session"
            },
            {
                time: "02.50 – 03.05 pm",
                title: "Tea Break",
                type: "break"
            },
            {
                time: "03.05 – 03.25 pm",
                session: "Session 4",
                title: "Students' Experiences, Feedback, and Suggestions on SPARC Scheme",
                speaker: "Dr Manish Kaushal",
                details: "Asst. Professor, Department of Chemical Engineering, Indian Institute of Technology Kharagpur, West Bengal",
                type: "session"
            },
            {
                time: "03.30 – 05.00 pm",
                session: "Session 5",
                title: "Hands-on Training Session on Computational Tools for the Solutions of Waste Heat Recovery Thermal Polygeneration",
                speaker: "Dr T Srinivas and Dr Rajan Kumar",
                details: "NIT Jalandhar, Punjab",
                type: "session"
            }
        ],
        day2: [
            {
                time: "10.00 – 10.50 am",
                session: "Session 6",
                title: "Challenges and Technologies for the Decarbonisation of Industrial Energy Users",
                speaker: "Prof. Umberto Desideri",
                details: "Professor, University of Pisa, Italy",
                type: "session"
            },
            {
                time: "10.50 – 11.05 am",
                title: "Tea Break",
                type: "break"
            },
            {
                time: "11.05 – 11.55 am",
                session: "Session 7",
                title: "", // Title blank in source image, or implied as speaker session
                speaker: "Mr. Vinay Devasthali",
                details: "Director Saveeco Energy India Pvt. Ltd., Pune, Maharashtra",
                type: "session"
            },
            {
                time: "11.55 am – 01.30 pm",
                title: "Lunch Break",
                type: "break"
            },
            {
                time: "01.30 – 02.20 pm",
                session: "Session 8",
                title: "Thermoeconomic and Exegoenvironmental Investigation on Power Generation and Cogeneration Systems",
                speaker: "Prof. N Shankar Ganesh",
                details: "Professor and Director, Research & Development, Global Institute of Engineering and Technology, Ranipet, Tamil Nadu",
                type: "session"
            },
            {
                time: "02.30 – 03.15 pm",
                session: "Session 9",
                title: "Technological Pathways for Waste Heat Recovery: From Fundamentals to Application",
                speaker: "Prof. Christos N. Markides",
                details: "Professor, Imperial College London, UK",
                type: "session"
            },
            {
                time: "03.15 – 3.30 pm",
                title: "Tea Break",
                type: "break"
            },
            {
                time: "03.30 – 04.15 pm",
                title: "Valedictory Session",
                type: "inaugural"
            }
        ]
    }

    return (
        <section className="section program-section" id="program">
            <div className="container">
                <h2 className="section-title text-center">Programme Schedule</h2>

                {/* Day Tobs */}
                <div className="program-tabs">
                    <button
                        className={`program-tab ${activeDay === 1 ? 'active' : ''}`}
                        onClick={() => setActiveDay(1)}
                    >
                        <span className="tab-date">09 February 2026</span>
                        <span className="tab-day">Monday</span>
                    </button>
                    <button
                        className={`program-tab ${activeDay === 2 ? 'active' : ''}`}
                        onClick={() => setActiveDay(2)}
                    >
                        <span className="tab-date">10 February 2026</span>
                        <span className="tab-day">Tuesday</span>
                    </button>
                </div>

                {/* Timeline Content */}
                <div className="program-content">
                    {schedule[`day${activeDay}`].map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className={`timeline-item ${item.type}`}>
                                <div className="timeline-time">
                                    {item.time}
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-details">
                                    {item.session && <div className="session-badge">{item.session}</div>}
                                    <h3 className="timeline-title">{item.title || item.speaker}</h3> {/* Fallback for empty title */}
                                    {item.title && item.speaker && <div className="timeline-speaker">{item.speaker}</div>}
                                    {item.details && <p className="timeline-desc">{item.details}</p>}
                                    {item.note && <div className="timeline-note">{item.note}</div>}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Program
