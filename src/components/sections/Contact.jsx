import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { FormField } from '../ui/FormField'
import { Button } from '../ui/Button'
import { validateName, validateEmail, validateMessage } from '../../utils/validation'
import profileData from '../../data/profile.json'

/**
 * Contact section component with resume download and contact form
 */
export function Contact() {
  const prefersReducedMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Anti-spam field
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}

    const nameError = validateName(formData.name)
    if (nameError) newErrors.name = nameError

    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    const messageError = validateMessage(formData.message)
    if (messageError) newErrors.message = messageError

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check honeypot (if filled, it's a bot)
    if (formData.honeypot) {
      return
    }

    // Validate
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      // Submit to Web3Forms (if API key is available)
      if (!import.meta.env.VITE_WEB3FORMS_KEY) {
        throw new Error('Email service is not configured. Please contact me directly via email.')
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: 'New Contact Form Submission from ' + formData.name,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '', honeypot: '' })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or email me directly.')
      console.error('Form submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-900 mb-4"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Actively seeking new ML/AI opportunities. Let’s connect!
        </motion.p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Resume Download */}
          <motion.div
            className="bg-primary-50 rounded-lg p-8 flex flex-col items-center justify-center text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <svg
              className="w-20 h-20 text-primary-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Download Resume</h3>
            <p className="text-neutral-700 mb-6">
              View my full professional experience and technical skills
            </p>
            <Button
              as="a"
              href={import.meta.env.BASE_URL + profileData.resumeUrl.replace(/^\//, '')}
              download
              variant="primary"
              size="large"
            >
              Download Resume (PDF)
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-neutral-50 rounded-lg p-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send a Message</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg
                  className="w-16 h-16 text-green-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-green-800 font-medium">
                  Thank you! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  placeholder="Your name"
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  placeholder="your.email@example.com"
                />

                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                />

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
