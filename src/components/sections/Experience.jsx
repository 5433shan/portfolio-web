import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { formatDate } from '../../utils/markdown'
import experienceData from '../../data/experience/roles.json'

/**
 * Experience section component with timeline layout
 */
export function Experience() {
  const prefersReducedMotion = useReducedMotion()

  const itemVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }

  return (
    <section id="experience" className="py-20 bg-primary-50">
      <div className="container-custom">
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-900 mb-4"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My journey in building impactful machine learning solutions
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData
            .sort((a, b) => a.order - b.order)
            .map((role, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {/* Role Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {role.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-neutral-700 mb-2">
                    {role.companyUrl ? (
                      <a
                        href={role.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-dark font-medium transition-colors"
                      >
                        {role.company}
                      </a>
                    ) : (
                      <span className="font-medium">{role.company}</span>
                    )}
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>
                      {formatDate(role.startDate)} -{' '}
                      {role.endDate ? formatDate(role.endDate) : 'Present'}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3">
                  {role.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-3 mt-1.5">▸</span>
                      <span className="text-neutral-700 leading-relaxed">
                        {achievement.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
