import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { benefits } from '../../data/benefits'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Benefits"
          title="Outcomes you can"
          highlight="measure on day 30."
          description="Concrete results we commit to in writing — not vague promises."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink-900/5 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/10 to-accent-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                <Icon name={b.icon} className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-ink-900">{b.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-700/80">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
