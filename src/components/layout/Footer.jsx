import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import Icon from '../ui/Icon'
import { company, navLinks } from '../../data/site'

const columns = [
  {
    title: 'Services',
    links: [
      'Medical billing',
      'Medical coding',
      'Credentialing',
      'AR & denial management',
      'Eligibility & verification',
      'Practice analytics',
    ],
  },
  {
    title: 'Company',
    links: ['About us', 'How it works', 'Case studies', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Free audit', 'Compliance', 'Privacy policy', 'Terms'],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <Container className="relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {company.description}
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent-400" />
                <a href={`mailto:${company.email}`} className="hover:text-accent-400">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent-400" />
                <a href={`tel:${company.phoneTel}`} className="hover:text-accent-400">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent-400" />
                <span className="text-white/80">{company.address}</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/70 transition-colors hover:text-accent-400">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="mt-14 grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
          <div>
            <h5 className="font-display text-lg font-bold">Get monthly RCM tips</h5>
            <p className="text-sm text-white/70">One short email a month. No spam, unsubscribe anytime.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@practice.com"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent-400"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {company.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-400"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-400"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
