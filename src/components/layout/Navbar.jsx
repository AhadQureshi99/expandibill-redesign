import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { navLinks, company } from '../../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-ink-900/5 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${company.phoneTel}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-brand-700 transition-colors"
          >
            <PhoneCall className="h-4 w-4 text-accent-500" />
            {company.phone}
          </a>
          <a href="#contact" className="btn-primary">Get a free audit</a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white/70 text-ink-900 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="mx-5 mb-4 mt-1 rounded-2xl border border-ink-900/5 bg-white p-5 shadow-card">
              <ul className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
                Get a free audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
