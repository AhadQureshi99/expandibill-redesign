import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { painPoints } from '../../data/painPoints'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function PainPoints() {
  return (
    <section id="problems" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <Container>
        <SectionHeader
          eyebrow="Problems we solve"
          title="If any of these feel"
          highlight="familiar — we can help."
          description="The same four issues quietly cost most U.S. practices 10–30% of their potential revenue every year."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {painPoints.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink-900/5 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                <Icon name={p.icon} className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
