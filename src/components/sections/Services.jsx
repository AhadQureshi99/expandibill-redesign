import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { services } from '../../data/services'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Full-service revenue cycle,"
          highlight="end to end."
          description="Pick the pieces you need — or hand us the entire revenue cycle. Either way, you get senior reviewers and outcomes you can measure."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article key={s.title} variants={fadeUp} className="card group">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={2} />
              </span>

              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                {s.description}
              </p>

              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-ink-800">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/15 text-accent-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
