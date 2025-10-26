/**
 * Form validation utility functions
 */

/**
 * Validate email format (RFC 5322 simplified)
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate required field
 * @param {string} value - Field value
 * @returns {string|null} - Error message or null if valid
 */
export function validateRequired(value) {
  if (!value || value.trim() === '') {
    return 'This field is required'
  }
  return null
}

/**
 * Validate email field
 * @param {string} email - Email value
 * @returns {string|null} - Error message or null if valid
 */
export function validateEmail(email) {
  const requiredError = validateRequired(email)
  if (requiredError) {
    return requiredError
  }

  if (!isValidEmail(email)) {
    return 'Please enter a valid email address'
  }

  return null
}

/**
 * Validate minimum length
 * @param {string} value - Field value
 * @param {number} minLength - Minimum required length
 * @returns {string|null} - Error message or null if valid
 */
export function validateMinLength(value, minLength) {
  const requiredError = validateRequired(value)
  if (requiredError) {
    return requiredError
  }

  if (value.trim().length < minLength) {
    return `Must be at least ${minLength} characters`
  }

  return null
}

/**
 * Validate maximum length
 * @param {string} value - Field value
 * @param {number} maxLength - Maximum allowed length
 * @returns {string|null} - Error message or null if valid
 */
export function validateMaxLength(value, maxLength) {
  if (value && value.length > maxLength) {
    return `Must be ${maxLength} characters or less`
  }

  return null
}

/**
 * Validate name field (2-100 characters)
 * @param {string} name - Name value
 * @returns {string|null} - Error message or null if valid
 */
export function validateName(name) {
  return validateMinLength(name, 2) || validateMaxLength(name, 100)
}

/**
 * Validate message field (10-2000 characters)
 * @param {string} message - Message value
 * @returns {string|null} - Error message or null if valid
 */
export function validateMessage(message) {
  return validateMinLength(message, 10) || validateMaxLength(message, 2000)
}
