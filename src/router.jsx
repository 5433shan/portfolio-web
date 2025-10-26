import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import BlogPost from './pages/BlogPost'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRouter
