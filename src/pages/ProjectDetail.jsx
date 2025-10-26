import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MarkdownRenderer from '../components/markdown/MarkdownRenderer'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { parseMarkdown, formatDate } from '../utils/markdown'

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

      // Import all project markdown files (eager import)
      const projectFiles = import.meta.glob('../data/projects/*.md', { eager: true, query: '?raw', import: 'default' })

      // Find the matching project file
      let projectContent = null
      for (const [path, content] of Object.entries(projectFiles)) {
        const filename = path.split('/').pop().replace('.md', '')
        if (filename === slug) {
          projectContent = content
          break
        }
      }

      if (!projectContent) {
        setError('Project not found')
        return
      }

      const { frontmatter, content } = parseMarkdown(projectContent)
      setProject({ ...frontmatter, content })
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

            <p className="text-xl text-neutral-700 mb-6">{project.summary}</p>

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
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  Live Demo →
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
            <MarkdownRenderer content={project.content} />
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
