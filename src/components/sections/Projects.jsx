import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { parseMarkdown } from '../../utils/markdown'

/**
 * Projects section component with grid layout and project cards
 * Loads and displays featured projects from markdown files
 */
export function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      // Import all project markdown files (eager import for better compatibility)
      const projectFiles = import.meta.glob('../../data/projects/*.md', { eager: true, query: '?raw', import: 'default' })

      const allProjects = Object.entries(projectFiles).map(([path, content]) => {
        const { frontmatter } = parseMarkdown(content)
        return frontmatter
      })

      // Filter featured projects and sort by order
      const featuredProjects = allProjects
        .filter((p) => p.featured)
        .sort((a, b) => a.order - b.order)
        .slice(0, 6) // Max 6 featured projects

      setProjects(featuredProjects)
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }

  const cardVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-neutral-100 rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-900 mb-4"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore my recent work in machine learning, data science, and AI applications
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <Card
                hoverable
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="h-full flex flex-col"
              >
                {project.image && (
                  <Card.Image
                    src={import.meta.env.BASE_URL + project.image.replace(/^\//, '')}
                    alt={project.title}
                    className="h-48"
                  />
                )}

                <Card.Content className="flex-1 flex flex-col">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Description className="mb-4 flex-1">
                    {project.summary}
                  </Card.Description>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="neutral">+{project.techStack.length - 4}</Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 text-sm">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-accent hover:text-accent-dark font-medium transition-colors duration-200"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-accent hover:text-accent-dark font-medium transition-colors duration-200"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </Card.Content>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
