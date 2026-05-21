import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import Container from '../ui/Container'
import { certifications } from '../../data/certifications'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Certifications() {
  return (
    <section className="relative py-14">
      <Container>
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-3xl border border-ink-900/5 bg-white px-6 py-8 shadow-soft sm:px-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />

          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-700/60"
          >
            Built on a foundation of trust & compliance
          </motion.p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {certifications.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                  <BadgeCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink-900">{c.label}</p>
                  <p className="text-[11px] font-medium text-ink-700/60">{c.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
