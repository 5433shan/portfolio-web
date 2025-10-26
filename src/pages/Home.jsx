import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'

/**
 * Home page composing Hero and Projects sections
 * Main landing page for the portfolio website
 */
function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default Home
