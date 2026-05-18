import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/site'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-white sm:px-14 sm:py-20"
        >
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl animate-blob" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent-500/40 blur-3xl animate-blob [animation-delay:-6s]" />
          </div>
          <div className="absolute inset-0 -z-0 bg-noise mix-blend-overlay opacity-50" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <span className="chip border-white/20 bg-white/10 text-white">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
                Free, no-strings audit
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                See how much revenue your{' '}
                <span className="bg-gradient-to-r from-accent-400 to-white bg-clip-text text-transparent">
                  practice is leaving on the table.
                </span>
              </h3>
              <p className="mt-4 max-w-xl text-white/75">
                Send us 30 days of remits — we'll return a written analysis with
                concrete revenue opportunities within five business days.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
              <a href="#contact" className="btn-primary">
                Start the audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${company.phoneTel}`}
                className="btn inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                <PhoneCall className="h-4 w-4 text-accent-400" />
                {company.phone}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
