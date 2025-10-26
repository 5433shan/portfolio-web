import { useState, useEffect } from 'react'

/**
 * Hook to track which section is currently in the viewport
 * Used for highlighting active navigation links during scroll
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {number} offset - Offset from top of viewport (default: 100px)
 * @returns {string} - ID of currently active section
 */
export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    handleScroll() // Call once on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
