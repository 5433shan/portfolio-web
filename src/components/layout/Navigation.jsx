import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy'

/**
 * Navigation component with mobile menu
 * Highlights active section during scroll
 */
export function Navigation({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname === ''

  // Section IDs for scroll spy (only on home page)
  const sectionIds = ['hero', 'projects', 'experience', 'blog', 'contact']
  const activeSection = useScrollSpy(isHomePage ? sectionIds : [], 100)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="py-4" aria-label="Main navigation">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className={`text-xl font-bold transition-colors duration-200 ${
            scrolled ? 'text-neutral-900' : 'text-neutral-900'
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-base font-medium transition-colors duration-200 hover:text-accent ${
                activeSection === link.id
                  ? 'text-accent border-b-2 border-accent'
                  : scrolled
                    ? 'text-neutral-700'
                    : 'text-neutral-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 space-y-4 bg-white rounded-lg shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-4 py-2 text-base font-medium transition-colors duration-200 hover:bg-neutral-50 hover:text-accent ${
                activeSection === link.id ? 'text-accent bg-neutral-50' : 'text-neutral-700'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
