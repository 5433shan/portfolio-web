/**
 * Badge component for displaying tags, tech stack items, etc.
 * Variants: primary, accent, neutral
 */
export function Badge({ children, variant = 'primary', className = '' }) {
  const baseStyles =
    'inline-flex items-center px-3 py-1 text-sm font-medium rounded-full'

  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    accent: 'bg-accent/20 text-accent-dark',
    neutral: 'bg-neutral-200 text-neutral-800',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  return <span className={combinedClassName}>{children}</span>
}
