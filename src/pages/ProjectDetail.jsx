import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { formatDate } from '../utils/markdown'

// Hardcoded project data with content
const PROJECTS_DATA = {
  'portfolio-website': {
    title: "AI-Powered Portfolio Website",
    slug: "portfolio-website",
    overview: "Built a professional portfolio website using SpecKit and Claude Code - no manual coding required. Automated end-to-end workflow from specs to deployed GitHub Pages site.",
    advantages: [
      "Zero manual coding required",
      "Fully automated CI/CD pipeline",
      "Modern React & Tailwind design",
      "Component-based architecture",
      "Responsive and accessible"
    ],
    outcomes: [
      "Deployed in hours, not days",
      "Professional portfolio ready",
      "Easy to maintain and update",
      "Automated GitHub Pages deployment",
      "Production-ready codebase"
    ],
    techStack: ["SpecKit", "Claude Code", "React", "Vite", "Tailwind CSS", "GitHub Actions"],
    repoUrl: "https://github.com/5433shan/portfolio-web",
    mediumUrl: "https://medium.com/@sl08095433/using-spec-kit-and-claude-code-to-build-a-github-page-a0f265528840",
    date: "2025-10",
    image: "/images/projects/portfolio-website.svg"
  },
  // 'customer-churn-prediction': {
  //   title: "Customer Churn Prediction Model",
  //   slug: "customer-churn-prediction",
  //   summary: "Built a machine learning pipeline to predict customer churn with 92% accuracy, reducing retention costs by 15% and saving $200K annually.",
  //   techStack: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI", "SMOTE"],
  //   repoUrl: "https://github.com/janedoe/churn-prediction",
  //   demoUrl: "https://churn-demo.example.com",
  //   date: "2024-08",
  //   image: "/images/projects/churn-prediction.svg",
  //   content: "Project details coming soon. This project demonstrates advanced machine learning techniques for customer churn prediction."
  // },
  // 'computer-vision-defect-detection': {
  //   title: "Computer Vision Defect Detection",
  //   slug: "computer-vision-defect-detection",
  //   summary: "Developed a computer vision model for manufacturing defect detection, improving quality control accuracy by 23% and reducing defects by $2.1M annually.",
  //   techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "TensorRT", "ONNX"],
  //   repoUrl: "https://github.com/janedoe/defect-detection",
  //   date: "2024-03",
  //   image: "/images/projects/defect-detection.svg",
  //   content: "Project details coming soon. This project showcases real-time computer vision for manufacturing quality control."
  // },
  // 'nlp-sentiment-analysis': {
  //   title: "NLP Sentiment Analysis Pipeline",
  //   slug: "nlp-sentiment-analysis",
  //   summary: "Created an NLP pipeline for real-time sentiment analysis of customer reviews, processing 100K+ reviews daily with 89% accuracy.",
  //   techStack: ["Python", "Transformers", "BERT", "spaCy", "FastAPI", "Redis"],
  //   repoUrl: "https://github.com/janedoe/sentiment-analysis",
  //   date: "2024-05",
  //   image: "/images/projects/sentiment-analysis.svg",
  //   content: "Project details coming soon. This project implements state-of-the-art NLP techniques for sentiment analysis."
  // },
  // 'predictive-maintenance-lstm': {
  //   title: "Predictive Maintenance with LSTM",
  //   slug: "predictive-maintenance-lstm",
  //   summary: "Developed a time-series forecasting model using LSTM networks to predict equipment failures, reducing downtime by 40%.",
  //   techStack: ["Python", "PyTorch", "LSTM", "Pandas", "NumPy", "Plotly"],
  //   repoUrl: "https://github.com/janedoe/predictive-maintenance",
  //   date: "2023-11",
  //   image: "/images/projects/predictive-maintenance.svg",
  //   content: "Project details coming soon. This project uses LSTM networks for predictive maintenance in industrial settings."
  // }
}

/**
 * ProjectDetail page for displaying individual project content
 */
function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadProject()
  }, [slug])

  const loadProject = async () => {
    try {
      setLoading(true)
      setError(null)

      const projectData = PROJECTS_DATA[slug]

      if (!projectData) {
        setError('Project not found')
        return
      }

      setProject(projectData)
    } catch (err) {
      console.error('Error loading project:', err)
      setError('Failed to load project')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-50">
        <Header />
        <main className="container-custom py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-100 rounded-lg h-96 animate-pulse mb-8" />
            <div className="space-y-4">
              <div className="bg-neutral-100 rounded h-8 animate-pulse" />
              <div className="bg-neutral-100 rounded h-8 animate-pulse w-3/4" />
              <div className="bg-neutral-100 rounded h-8 animate-pulse w-1/2" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-primary-50">
        <Header />
        <main className="container-custom py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              {error || 'Project Not Found'}
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary-50">
      <Header />
      <main className="py-20">
        <article className="container-custom max-w-4xl">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            ← Back to Projects
          </Button>

          {/* Project Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {project.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-neutral-600 mb-6">
              {project.date && <span>{formatDate(project.date)}</span>}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  View on GitHub →
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          {/* Project Image */}
          {project.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={import.meta.env.BASE_URL + project.image.replace(/^\//, '')}
                alt={project.title}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          )}

          {/* Project Content */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            {/* Overview */}
            {project.overview && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">{project.overview}</p>
              </div>
            )}

            {/* Key Advantages */}
            {project.advantages && project.advantages.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Key Advantages</h2>
                <ul className="space-y-3">
                  {project.advantages.map((advantage, index) => (
                    <li key={index} className="text-lg text-neutral-700 flex items-start">
                      <span className="text-accent mr-3 text-xl font-bold">✓</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="text-lg text-neutral-700 flex items-start">
                      <span className="text-accent mr-3 text-xl">→</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Read More on Medium */}
            {project.mediumUrl && (
              <div className="mt-10 pt-8 border-t border-neutral-200 text-center">
                <a
                  href={project.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  Read Full Article on Medium
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Back to Projects Link */}
          <div className="mt-12 text-center">
            <Button onClick={() => navigate('/')}>
              ← Back to All Projects
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail
