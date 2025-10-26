import { useState, useEffect } from 'react'

/**
 * Hook to load and parse markdown files
 * @param {string} markdownPath - Path to markdown file
 * @returns {object} - { content: string, loading: boolean, error: Error | null }
 */
export function useMarkdown(markdownPath) {
  const [state, setState] = useState({
    content: '',
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (!markdownPath) {
      setState({ content: '', loading: false, error: null })
      return
    }

    let cancelled = false

    const loadMarkdown = async () => {
      try {
        setState({ content: '', loading: true, error: null })
        const response = await fetch(markdownPath)

        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.statusText}`)
        }

        const text = await response.text()

        if (!cancelled) {
          setState({ content: text, loading: false, error: null })
        }
      } catch (error) {
        if (!cancelled) {
          setState({ content: '', loading: false, error })
        }
      }
    }

    loadMarkdown()

    return () => {
      cancelled = true
    }
  }, [markdownPath])

  return state
}
