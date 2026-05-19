import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { specialties } from '../../data/specialties'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Specialties() {
  return (
    <section id="specialties" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />

      <Container>
        <SectionHeader
          eyebrow="Medical specialties"
          title="Specialty-specific solutions for"
          highlight="every practice."
          description="Coders and reviewers trained on your specialty — and the payer quirks that come with it."
        />

        <motion.ul
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {specialties.map((s) => (
            <motion.li
              key={s.name}
              variants={fadeUp}
              className="group flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-white/80 px-4 py-4 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/20 hover:shadow-card"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-accent-500/10 text-brand-700 transition-colors group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink-900">{s.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
