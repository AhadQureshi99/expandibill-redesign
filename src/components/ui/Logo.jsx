export default function Logo({ inverted = false }) {
  const solidColor = inverted ? 'text-white' : 'text-ink-900'

  return (
    <a href="#top" className="group inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 shadow-glow transition-transform duration-300 group-hover:rotate-6">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h12M4 12h12M4 18h8" />
          <circle cx="19" cy="18" r="3" />
          <path d="M17.5 18l1 1 2-2" />
        </svg>
      </span>
      <span className="font-display text-[15px] font-extrabold leading-none tracking-[0.08em] sm:text-base">
        <span className="gradient-text">EXPANDIBILL</span>{' '}
        <span className={solidColor}>SOLUTIONS</span>
      </span>
    </a>
  )
}
