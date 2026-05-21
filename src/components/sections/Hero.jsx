import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, TrendingUp, FileCheck2 } from 'lucide-react'
import Container from '../ui/Container'
import { fadeUp, fadeIn, stagger } from '../../lib/animations'

const trustLogos = ['Aetna', 'Cigna', 'BCBS', 'United', 'Humana', 'Medicare']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background mesh + grid */}
      <div className="absolute inset-0 -z-10 bg-hero-mesh" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] bg-grid-light"
        style={{ backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-fade" />
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-80 w-80 rounded-full bg-accent-400/30 blur-3xl animate-blob [animation-delay:-4s]" />

      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.span variants={fadeUp} className="chip">
            <Sparkles className="h-3.5 w-3.5" />
            U.S.-based · 75+ specialties · 500+ providers
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
          >
            You take care of patients.{' '}
            <span className="gradient-text">We take care of billing.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-700/85 sm:text-lg"
          >
            Expandibill Solutions runs your entire revenue cycle — billing, coding,
            credentialing, eligibility, AR follow-up, and reporting — with senior,
            U.S.-based reviewers and transparent monthly accountability.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Schedule a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              <PlayCircle className="h-4 w-4 text-brand-700" />
              Explore our services
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-700/80"
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-500" /> HIPAA · SOC 2 · ISO 27001
            </li>
            <li className="inline-flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-accent-500" /> 99% first-pass resolution
            </li>
            <li className="inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent-500" /> +30% revenue, on average
            </li>
          </motion.ul>

          {/* Trust logos */}
          <motion.div variants={fadeIn} className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-700/50">
              We work with every major payer
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 opacity-80">
              {trustLogos.map((l) => (
                <span
                  key={l}
                  className="text-sm font-semibold tracking-wide text-ink-700/70"
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <HeroDashboard />
        </motion.div>
      </Container>
    </section>
  )
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-600/20 via-accent-400/20 to-transparent blur-2xl" />
      <div className="relative rounded-[1.6rem] border border-white/60 bg-white/80 p-5 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-700/50">
              This month
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-ink-900">$184,260</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-600">
            <TrendingUp className="h-3.5 w-3.5" />
            +28.4%
          </span>
        </div>

        {/* Chart */}
        <div className="mt-5">
          <svg viewBox="0 0 320 110" className="h-28 w-full">
            <defs>
              <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,90 C30,80 50,60 80,55 C120,48 150,80 180,55 C210,32 240,40 280,25 L320,18 L320,110 L0,110 Z"
              fill="url(#hg)"
            />
            <path
              d="M0,90 C30,80 50,60 80,55 C120,48 150,80 180,55 C210,32 240,40 280,25 L320,18"
              fill="none"
              stroke="#0d9488"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[
            { k: 'Clean claims', v: '99%' },
            { k: 'Days in AR',  v: '22'  },
            { k: 'Denials',     v: '2.8%'},
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-brand-50/70 p-3">
              <p className="font-display text-lg font-bold text-brand-900">{s.v}</p>
              <p className="mt-0.5 text-[11px] font-medium text-ink-700/70">{s.k}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card */}
      <div className="animate-float absolute -left-8 -bottom-6 hidden w-56 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
            <FileCheck2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink-700/70">Claim accepted</p>
            <p className="text-sm font-bold text-ink-900">#CLM-48211 · $1,240</p>
          </div>
        </div>
      </div>
    </div>
  )
}
