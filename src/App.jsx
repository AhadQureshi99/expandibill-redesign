import Navbar       from './components/layout/Navbar'
import Footer       from './components/layout/Footer'
import Hero         from './components/sections/Hero'
import Stats        from './components/sections/Stats'
import Services     from './components/sections/Services'
import Specialties  from './components/sections/Specialties'
import Process      from './components/sections/Process'
import Benefits     from './components/sections/Benefits'
import WhyUs        from './components/sections/WhyUs'
import Values       from './components/sections/Values'
import Testimonials from './components/sections/Testimonials'
import FAQ          from './components/sections/FAQ'
import CTA          from './components/sections/CTA'
import Contact      from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Specialties />
        <Process />
        <Benefits />
        <WhyUs />
        <Values />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
