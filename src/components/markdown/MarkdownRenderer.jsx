import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import CodeBlock from './CodeBlock'

/**
 * MarkdownRenderer component with custom components and plugins
 * Renders markdown content with syntax highlighting and lazy-loaded images
 */
export function MarkdownRenderer({ content, className = '' }) {
  return (
    <ReactMarkdown
      className={`prose prose-constrained ${className}`}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        // Custom image component with lazy loading
        img: ({ src, alt }) => (
          <img src={src} alt={alt} loading="lazy" className="rounded-lg my-6 w-full" />
        ),
        // Custom code block with syntax highlighting
        code: ({ inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          const language = match ? match[1] : ''

          if (inline) {
            return (
              <code
                className="bg-neutral-100 text-neutral-800 px-2 py-1 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            )
          }

          return (
            <CodeBlock language={language} {...props}>
              {String(children).replace(/\n$/, '')}
            </CodeBlock>
          )
        },
        // Custom link component to open external links in new tab
        a: ({ href, children }) => {
          const isExternal = href?.startsWith('http')
          return (
            <a
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="text-accent hover:text-accent-dark underline transition-colors duration-200"
            >
              {children}
            </a>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
