import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { pricing } from '../../data/pricing'
import { useCountUp } from '../../hooks/useCountUp'
import { fadeUp, stagger, viewport } from '../../lib/animations'

const usd = (n) => '$' + n.toLocaleString('en-US')

export default function Pricing() {
  const inHouseTotal     = pricing.inHouse.rows.reduce((s, r) => s + r.v, 0)
  const expandibillTotal = pricing.expandibill.rows.reduce((s, r) => s + r.v, 0)
  const savings          = Math.max(0, inHouseTotal - expandibillTotal)
  const [savingsRef, savingsValue] = useCountUp(savings, { duration: 1800 })

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/40 via-white to-white" />

      <Container>
        <SectionHeader
          eyebrow="Cost comparison"
          title="One flat rate that"
          highlight="pays for itself."
          description={pricing.scenario}
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid items-stretch gap-6 lg:grid-cols-2"
        >
          {/* In-house card */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-ink-900/5 bg-white p-8 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-700/60">
              The traditional way
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-ink-900">
              {pricing.inHouse.label}
            </h3>

            <ul className="mt-6 space-y-3">
              {pricing.inHouse.rows.map((r) => (
                <li key={r.k} className="flex items-center justify-between gap-4 border-b border-ink-900/5 pb-3 text-sm">
                  <span className="flex items-center gap-2 text-ink-700">
                    <X className="h-4 w-4 text-red-400" />
                    {r.k}
                  </span>
                  <span className="font-display font-bold text-ink-900">{usd(r.v)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-end justify-between">
              <span className="text-xs uppercase tracking-widest text-ink-700/60">Annual</span>
              <span className="font-display text-3xl font-extrabold text-ink-900">{usd(inHouseTotal)}</span>
            </div>
            <p className="mt-4 text-xs italic text-ink-700/60">{pricing.inHouse.note}</p>
          </motion.div>

          {/* Expandibill card */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-brand-600/30 bg-gradient-to-br from-brand-900 via-brand-800 to-ink-900 p-8 text-white shadow-card"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/30 blur-3xl" />
            <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full border border-accent-400/30 bg-accent-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-300">
              Recommended
            </span>

            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              The Expandibill way
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold">{pricing.expandibill.label}</h3>

            <ul className="mt-6 space-y-3">
              {pricing.expandibill.rows.map((r) => (
                <li key={r.k} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm">
                  <span className="flex items-center gap-2 text-white/80">
                    <Check className="h-4 w-4 text-accent-400" />
                    {r.k}
                  </span>
                  <span className="font-display font-bold">{r.v === 0 ? 'Included' : usd(r.v)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-end justify-between">
              <span className="text-xs uppercase tracking-widest text-white/60">Annual</span>
              <span className="font-display text-3xl font-extrabold">{usd(expandibillTotal)}</span>
            </div>

            <div ref={savingsRef} className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-accent-300">
                {pricing.savingsLabel}
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold text-white">
                {usd(savingsValue)}
                <span className="ml-2 text-sm font-semibold text-accent-300">
                  ≈ {Math.round((savings / inHouseTotal) * 100)}% less
                </span>
              </p>
            </div>

            <a href="#contact" className="btn-primary mt-6 w-full justify-center">
              Get my custom quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
