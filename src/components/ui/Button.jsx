/**
 * Button component with variants and accessibility support
 * Variants: primary, secondary, outline
 * Sizes: small, medium, large
 */
export function Button({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary:
      'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400',
    outline:
      'border-2 border-primary-600 text-primary-700 hover:bg-primary-50 active:bg-primary-100',
  }

  const sizeStyles = {
    small: 'px-3 py-2 text-sm min-h-[36px]',
    medium: 'px-4 py-3 text-base min-h-[44px]',
    large: 'px-6 py-4 text-lg min-h-[52px]',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </Component>
  )
}
