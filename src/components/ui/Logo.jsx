import { company } from '../../data/site'

export default function Logo({ inverted = false, className = '' }) {
  const solidColor = inverted ? 'text-white' : 'text-ink-900'

  return (
    <a
      href="#top"
      aria-label={`${company.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <img
        src="/logo.png"
        alt={`${company.name} logo`}
        width={40}
        height={40}
        loading="eager"
        decoding="async"
        className="h-9 w-9 shrink-0 object-contain transition-transform duration-300 group-hover:rotate-6 sm:h-10 sm:w-10"
      />
      <span className="font-display text-[15px] font-extrabold leading-none tracking-[0.08em] sm:text-base">
        <span className="gradient-text">EXPANDIBILL</span>{' '}
        <span className={solidColor}>SOLUTIONS</span>
      </span>
    </a>
  )
}
