import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { processSteps } from '../../data/process'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-white" />
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="Four simple steps to a"
          highlight="healthier revenue cycle."
          description="No long sales cycles, no surprise fees. Here's exactly what working with us looks like."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => (
            <motion.div key={step.n} variants={fadeUp} className="relative">
              {/* Connector dotted line (desktop) */}
              {i < processSteps.length - 1 && (
                <div className="absolute left-full top-12 hidden h-px w-full -translate-x-6 border-t-2 border-dashed border-brand-300/60 lg:block" />
              )}

              <div className="card h-full">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-brand-300">
                    {step.n}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
