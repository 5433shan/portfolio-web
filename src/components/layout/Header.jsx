import { useState, useEffect } from 'react'
import Navigation from './Navigation'

/**
 * Header component with sticky navigation
 * Becomes visible on scroll with shadow effect
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <Navigation scrolled={scrolled} />
      </div>
    </header>
  )
}

export default Header
