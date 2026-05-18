import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { company } from '../../data/site'
import { fadeUp, stagger, viewport } from '../../lib/animations'

const inputCls =
  'mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 outline-none transition-all focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10'

const contactInfo = [
  { icon: Mail,   label: 'Email',   value: company.email,   href: `mailto:${company.email}` },
  { icon: Phone,  label: 'Phone',   value: company.phone,   href: `tel:${company.phoneTel}` },
  { icon: MapPin, label: 'Office',  value: company.address },
  { icon: Clock,  label: 'Hours',   value: company.hours   },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Get in touch"
          title="Tell us about"
          highlight="your practice."
          description="We'll get back to you within one business day with next steps and a free audit checklist."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Info column */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-ink-900 p-8 text-white shadow-card">
              <h3 className="font-display text-2xl font-bold">Talk to a senior biller</h3>
              <p className="mt-2 text-sm text-white/75">
                No SDRs, no scripts. You'll speak directly with someone who has run
                hundreds of revenue cycles.
              </p>

              <ul className="mt-8 space-y-5">
                {contactInfo.map(({ icon: I, label, value, href }) => (
                  <motion.li key={label} variants={fadeUp} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                      <I className="h-5 w-5 text-accent-400" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</p>
                      {href ? (
                        <a href={href} className="mt-0.5 block text-sm font-medium hover:text-accent-400">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                <p className="font-semibold text-accent-400">Response SLA</p>
                <p className="mt-1 text-white/70">
                  Replies within 1 business day. Same-day for urgent issues.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            onSubmit={onSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-3xl border border-ink-900/5 bg-white p-8 shadow-soft lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Dr. Jane Smith" required />
              <Field label="Practice name" name="practice" placeholder="Smith Family Medicine" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              <Field label="Phone" name="phone" type="tel" placeholder="(800) 555-0142" />
              <Field label="Specialty" name="specialty" placeholder="Family medicine, cardiology…" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-ink-900">How can we help?</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your current billing setup, pain points, and goals…"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-ink-700/60">
                We respect your privacy. Your info is never shared.
              </p>
              <button type="submit" className="btn-primary">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}

function Field({ label, className = '', ...rest }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-ink-900">{label}</label>
      <input className={inputCls} {...rest} />
    </div>
  )
}
