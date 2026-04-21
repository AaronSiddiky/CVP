'use client'

import { motion, useReducedMotion } from 'framer-motion'
import CountUp from './CountUp'

const EASE = [0.2, 0.7, 0.2, 1] as const

const Stats = () => {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.14 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.95, ease: EASE },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: reduced ? 0 : 1.3, ease: EASE } },
  }

  return (
    <motion.section
      className="stats"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeIn}
    >
      <motion.div className="stats-grid" variants={container}>
        <motion.div className="stat" variants={item}>
          <div className="stat-num"><CountUp to={15} /></div>
          <div className="stat-label">Average<br />Cohort</div>
        </motion.div>
        <motion.div className="stat" variants={item}>
          <div className="stat-num"><CountUp to={10} /></div>
          <div className="stat-label">Years<br />Active</div>
        </motion.div>
        <motion.div className="stat" variants={item}>
          <div className="stat-num"><CountUp to={12} /></div>
          <div className="stat-label">Weeks<br />Academy</div>
        </motion.div>
      </motion.div>
      <motion.div
        className="stats-caption"
        variants={container}
      >
        <motion.div
          className="eyebrow"
          style={{ color: 'rgba(246,243,236,0.7)' }}
          variants={item}
        >
          — on the record
        </motion.div>
        <motion.p variants={item}>
          We are <em style={{ fontStyle: 'italic' }}>friends, peers, and partners</em> first. Our alumni keep in touch many years after they&apos;ve graduated from Columbia.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default Stats
