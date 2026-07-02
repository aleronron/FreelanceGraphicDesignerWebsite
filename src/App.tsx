import FontLoader from './components/FontLoader'
import Header from './components/Header'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Services from './components/Services'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8F0' }}>
      <FontLoader />
      <Header />
      <main>
        <Hero />
        <Bio />
        <Services />
      </main>
    </div>
  )
}
