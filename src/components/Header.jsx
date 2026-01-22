import { useState, useEffect } from 'react'

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80 // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar-content">
                    {/* Logo Section */}
                    <div className="navbar-brand">
                        <img
                            src="/assets/images/header_logos.png"
                            alt="SPARC Workshop"
                            className="navbar-logo"
                        />
                        <div className="brand-text">
                            <h1 className="brand-title">SPARC Workshop</h1>
                            <p className="brand-subtitle">2026</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="nav-links">
                        <li>
                            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#organizers" onClick={(e) => scrollToSection(e, 'organizers')}>
                                Organizers
                            </a>
                        </li>
                        <li>
                            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')}>
                                Speakers
                            </a>
                        </li>
                        <li>
                            <a href="#details" onClick={(e) => scrollToSection(e, 'details')}>
                                Details
                            </a>
                        </li>
                        <li>
                            <a href="#registration" onClick={(e) => scrollToSection(e, 'registration')} className="btn-nav">
                                Registration
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
