import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { features } from '../../data/features'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow="Why Expandibill"
              title="Specialists who"
              highlight="actually move your numbers."
              description="Most billing companies are reactive. We are obsessed with first-pass clean claims, denial root causes, and proving ROI every single month."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-4"
            >
              <ShieldCheck className="h-6 w-6 text-accent-600" />
              <p className="text-sm font-medium text-ink-800">
                Signed BAA, SOC 2-aligned controls, and encrypted data at rest & in transit.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-ink-900/5 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/20 hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-ink-900">{f.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700/80">{f.text}</p>
                  </div>
                </div>
                <CheckCircle2 className="absolute right-4 top-4 h-4 w-4 text-accent-500/60 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
