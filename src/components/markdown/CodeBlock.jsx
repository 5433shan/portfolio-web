import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

/**
 * CodeBlock component with syntax highlighting and copy button
 * Uses prism-react-renderer for syntax highlighting
 */
export function CodeBlock({ children, language = 'text' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="relative group my-4">
      <Highlight theme={themes.nightOwl} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 rounded-lg overflow-x-auto text-sm`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 bg-neutral-700 hover:bg-neutral-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export default CodeBlock
