import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { practiceTypes } from '../../data/practiceTypes'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function PracticeTypes() {
  return (
    <section id="who-we-serve" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Who we serve"
          title="Built for every"
          highlight="kind of practice."
          description="Same senior team, same KPIs, same monthly accountability — whether you're a solo provider or a multi-site group."
        />

        <motion.ul
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3"
        >
          {practiceTypes.map((t) => (
            <motion.li
              key={t.name}
              variants={fadeUp}
              className="group flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/20 hover:shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={t.icon} className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-semibold text-ink-900">{t.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
