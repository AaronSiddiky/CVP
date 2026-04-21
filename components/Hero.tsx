'use client'

import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.2, 0.7, 0.2, 1] as const

const Hero = () => {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.14,
        delayChildren: reduced ? 0 : 0.2,
      },
    },
  }

  const rise = {
    hidden: { opacity: 0, y: reduced ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 1.15, ease: EASE },
    },
  }

  const smallRise = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.9, ease: EASE },
    },
  }

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div className="hero-meta" variants={smallRise}>
            <span>
              <span className="dot"></span>Cohort X · 2025–2026 · Recruitment Closed
            </span>
            <span>New York · Morningside Heights · Est. MMXVI</span>
          </motion.div>

          <h1 className="hero-headline">
            <motion.span className="block" variants={rise}>
              Columbia University&apos;s
            </motion.span>
            <motion.span className="block" variants={rise}>
              <em>premier</em> venture
            </motion.span>
            <motion.span className="block" variants={rise}>
              capital initiative<span style={{ color: 'var(--green)' }}>.</span>
            </motion.span>
          </h1>

          <div className="hero-footer">
            <motion.p className="hero-lede" variants={smallRise}>
              Founded in 2016, Columbia Venture Partners is Columbia&apos;s oldest and premier venture capital society, connecting its students to founders, funds, and the full machinery of early-stage investing.
            </motion.p>
            <motion.div className="hero-stamp" variants={smallRise}>
              <strong>X</strong>
              <span>Tenth Cohort<br />Convened Sept. 2025</span>
            </motion.div>
          </div>

          <motion.div className="hero-close" variants={smallRise}>
            <span className="hero-close-mark">§</span>
            <span className="hero-close-byline">
              Columbia University · Morningside Heights
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
