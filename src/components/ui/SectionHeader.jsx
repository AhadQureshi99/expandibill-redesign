import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function SectionHeader({ eyebrow, title, highlight, description, align = 'center' }) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="chip">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-base sm:text-lg text-ink-700/80 leading-relaxed">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
