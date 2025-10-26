/**
 * Card component with hover effects
 * Used for project cards, blog post cards, etc.
 */
export function Card({
  children,
  className = '',
  hoverable = true,
  onClick,
  ...props
}) {
  const baseStyles =
    'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300'

  const hoverStyles = hoverable
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : ''

  const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`

  return (
    <div className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </div>
  )
}

/**
 * Card.Image - Image section of card
 */
Card.Image = function CardImage({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  )
}

/**
 * Card.Content - Content section of card
 */
Card.Content = function CardContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

/**
 * Card.Title - Title section of card
 */
Card.Title = function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-xl font-bold text-neutral-900 mb-2 ${className}`}>
      {children}
    </h3>
  )
}

/**
 * Card.Description - Description section of card
 */
Card.Description = function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-neutral-700 leading-relaxed ${className}`}>{children}</p>
  )
}
