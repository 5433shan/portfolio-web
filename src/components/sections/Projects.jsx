import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

// Hardcoded project data (temporary solution until markdown loading is fixed)
const PROJECTS_DATA = [
  {
    title: "Customer Churn Prediction Model",
    slug: "customer-churn-prediction",
    summary: "Built a machine learning pipeline to predict customer churn with 92% accuracy, reducing retention costs by 15% and saving $200K annually.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI", "SMOTE"],
    repoUrl: "https://github.com/janedoe/churn-prediction",
    demoUrl: "https://churn-demo.example.com",
    featured: true,
    order: 1,
    date: "2024-08",
    image: "/images/projects/churn-prediction.svg"
  },
  {
    title: "Computer Vision Defect Detection",
    slug: "computer-vision-defect-detection",
    summary: "Developed a computer vision model for manufacturing defect detection, improving quality control accuracy by 23% and reducing defects by $2.1M annually.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "TensorRT", "ONNX"],
    repoUrl: "https://github.com/janedoe/defect-detection",
    featured: true,
    order: 3,
    date: "2024-03",
    image: "/images/projects/defect-detection.svg"
  },
  {
    title: "NLP Sentiment Analysis Pipeline",
    slug: "nlp-sentiment-analysis",
    summary: "Created an NLP pipeline for real-time sentiment analysis of customer reviews, processing 100K+ reviews daily with 89% accuracy.",
    techStack: ["Python", "Transformers", "BERT", "spaCy", "FastAPI", "Redis"],
    repoUrl: "https://github.com/janedoe/sentiment-analysis",
    featured: true,
    order: 2,
    date: "2024-05",
    image: "/images/projects/sentiment-analysis.svg"
  },
  {
    title: "Predictive Maintenance with LSTM",
    slug: "predictive-maintenance-lstm",
    summary: "Developed a time-series forecasting model using LSTM networks to predict equipment failures, reducing downtime by 40%.",
    techStack: ["Python", "PyTorch", "LSTM", "Pandas", "NumPy", "Plotly"],
    repoUrl: "https://github.com/janedoe/predictive-maintenance",
    featured: true,
    order: 4,
    date: "2023-11",
    image: "/images/projects/predictive-maintenance.svg"
  }
]

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
      // Use hardcoded data for now
      const featuredProjects = PROJECTS_DATA
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
          {projects.length === 0 && (
            <div className="col-span-full text-center text-neutral-600">
              <p className="text-lg">No projects found. Check browser console for errors.</p>
              <p className="text-sm mt-2">Projects array length: {projects.length}</p>
            </div>
          )}
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
