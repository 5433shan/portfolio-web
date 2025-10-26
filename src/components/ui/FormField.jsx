/**
 * FormField component with validation support
 * Supports text, email, textarea input types
 */
export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) {
  const inputId = `field-${name}`

  const baseInputStyles =
    'w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:bg-neutral-100 disabled:cursor-not-allowed min-h-[44px]'

  const inputStateStyles = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-neutral-300 focus:ring-accent'

  const combinedInputStyles = `${baseInputStyles} ${inputStateStyles} ${className}`

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-neutral-900 font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={combinedInputStyles}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={combinedInputStyles}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      )}

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}
