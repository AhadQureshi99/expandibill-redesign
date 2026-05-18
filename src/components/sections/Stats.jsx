import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { stats } from '../../data/stats'
import { useCountUp } from '../../hooks/useCountUp'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-900/5 bg-ink-900/5 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function StatCard({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group relative bg-white px-6 py-8 text-center transition-colors hover:bg-brand-50/60 sm:py-10"
    >
      <p className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
        <span className="gradient-text">{current}</span>
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-ink-700/75">{label}</p>
    </motion.div>
  )
}
