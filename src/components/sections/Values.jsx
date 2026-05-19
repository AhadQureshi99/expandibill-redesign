import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import { values } from '../../data/values'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Values() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-5"
          >
            <motion.span variants={fadeUp} className="chip">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
              Our story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl lg:text-5xl"
            >
              Built by billers who got tired of{' '}
              <span className="gradient-text">watching revenue leak.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-ink-700/85">
              Expandibill Solutions was founded to give independent practices the same
              revenue-cycle muscle that hospital systems take for granted. Every account
              is owned by a senior, certified biller — not a queue.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: 'Certified', v: 'CPC · CCS' },
                { k: 'Compliance', v: 'HIPAA · SOC 2' },
                { k: 'Coverage', v: 'All 50 states' },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-ink-900/5 bg-white p-4 text-center shadow-soft">
                  <p className="font-display text-sm font-bold text-brand-700">{c.v}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-ink-700/60">{c.k}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-ink-900/5 bg-gradient-to-br from-white to-brand-50/40 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-700 shadow-soft transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-display text-lg font-bold text-ink-900">{v.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700/80">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
