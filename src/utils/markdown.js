import matter from 'gray-matter'

/**
 * Parse markdown content with YAML frontmatter
 * @param {string} markdownContent - Raw markdown string with frontmatter
 * @returns {object} - { frontmatter: object, content: string }
 */
export function parseMarkdown(markdownContent) {
  const { data, content } = matter(markdownContent)
  return {
    frontmatter: data,
    content: content.trim(),
  }
}

/**
 * Calculate read time from markdown content
 * @param {string} content - Markdown content
 * @param {number} wordsPerMinute - Average reading speed (default: 200)
 * @returns {number} - Estimated read time in minutes
 */
export function calculateReadTime(content, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Generate excerpt from markdown content
 * @param {string} content - Markdown content
 * @param {number} maxLength - Maximum excerpt length (default: 150)
 * @returns {string} - Excerpt with ellipsis
 */
export function generateExcerpt(content, maxLength = 150) {
  // Remove markdown syntax
  const plainText = content
    .replace(/[#*`\[\]]/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .trim()

  if (plainText.length <= maxLength) {
    return plainText
  }

  return plainText.substring(0, maxLength).trim() + '...'
}

/**
 * Extract headings from markdown content for table of contents
 * @param {string} content - Markdown content
 * @returns {array} - Array of { level: number, text: string, slug: string }
 */
export function extractHeadings(content) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ level, text, slug })
  }

  return headings
}

/**
 * Format date string to readable format
 * @param {string} dateString - Date string (YYYY-MM-DD or YYYY-MM)
 * @returns {string} - Formatted date (e.g., "January 2024" or "January 15, 2024")
 */
export function formatDate(dateString) {
  if (!dateString) return ''

  const parts = dateString.split('-')
  const year = parts[0]
  const month = parts[1]
  const day = parts[2]

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const monthName = monthNames[parseInt(month) - 1]

  if (day) {
    return `${monthName} ${parseInt(day)}, ${year}`
  }

  return `${monthName} ${year}`
}
