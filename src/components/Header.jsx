import { useState, useEffect } from 'react'

const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Organizers', sectionId: 'organizers' },
    { label: 'Speakers', sectionId: 'speakers' },
    { label: 'Programme', sectionId: 'program' },
    { label: 'Details', sectionId: 'details' },
    { label: 'Registration', sectionId: 'registration', isButton: true }
]

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
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
            setMenuOpen(false)
        }
    }

    return (
        <header
            className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
        >
            <div className="container">
                <nav className="navbar-content">
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

                    <button
                        type="button"
                        className="mobile-menu-toggle"
                        aria-label={
                            menuOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className="nav-links" id="primary-navigation">
                        {navItems.map((item) => (
                            <li key={item.sectionId}>
                                <a
                                    href={`#${item.sectionId}`}
                                    onClick={(e) =>
                                        scrollToSection(e, item.sectionId)
                                    }
                                    className={
                                        item.isButton ? 'btn-nav' : undefined
                                    }
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
