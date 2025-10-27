import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

// Hardcoded project data (temporary solution until markdown loading is fixed)
const PROJECTS_DATA = [
  {
    title: "AI-Powered Portfolio Website",
    slug: "portfolio-website",
    overview: "Built a professional portfolio website using SpecKit and Claude Code - no manual coding required. Automated end-to-end workflow from specs to deployed GitHub Pages site.",
    advantages: [
      "Zero manual coding required",
      "Fully automated CI/CD pipeline",
      "Modern React & Tailwind design"
    ],
    outcomes: [
      "Deployed in hours, not days",
      "Professional portfolio ready",
      "Easy to maintain and update"
    ],
    techStack: ["SpecKit", "Claude Code", "React", "Vite", "Tailwind CSS", "GitHub Actions"],
    repoUrl: "https://github.com/5433shan/portfolio-web",
    mediumUrl: "https://medium.com/@sl08095433/using-spec-kit-and-claude-code-to-build-a-github-page-a0f265528840",
    featured: true,
    order: 0,
    date: "2025-10",
    image: "/images/projects/portfolio-website.svg"
  },
  {
    title: "Customer Churn Prediction Model",
    slug: "customer-churn-prediction",
    summary: "Built a machine learning pipeline to predict customer churn with 92% accuracy, reducing retention costs by 15% and saving $200K annually.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI", "SMOTE"],
    repoUrl: "https://github.com/janedoe/churn-prediction",
    demoUrl: "https://churn-demo.example.com",
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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

                  {/* Overview */}
                  <Card.Description className="mb-4 flex-1">
                    {project.overview || project.summary}
                  </Card.Description>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <Badge variant="neutral">+{project.techStack.length - 5}</Badge>
                    )}
                  </div>

                  {/* Links with Icons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-neutral-700 hover:text-accent transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {project.mediumUrl && (
                      <a
                        href={project.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-neutral-700 hover:text-accent transition-colors duration-200"
                        aria-label="Read on Medium"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
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
