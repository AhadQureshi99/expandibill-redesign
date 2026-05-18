import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'
import { fadeUp, stagger, viewport } from '../../lib/animations'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="What clients say"
          title="Real results from"
          highlight="real practices."
          description="A small sample of the practices who trust Expandibill with their revenue cycle."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              className="relative flex h-full flex-col rounded-2xl border border-ink-900/5 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-100" />
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-800">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/5 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 font-display font-bold text-white">
                  {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </span>
                <div>
                  <p className="font-display font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-700/70">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
