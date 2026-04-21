'use client'

import { motion, Variants, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

const EASE = [0.2, 0.7, 0.2, 1] as const

// ---- Shared variants ----

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
}

export const lineRise: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
}

// ---- Components ----

interface MotionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  once?: boolean
  amount?: number
  style?: React.CSSProperties
}

/** Scroll-triggered fade + small rise. Fires once when 20% in view. */
export const Reveal = ({
  children,
  className,
  id,
  delay = 0,
  once = true,
  amount = 0.2,
  style,
}: MotionProps) => {
  const reduced = useReducedMotion()
  if (reduced) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    )
  }
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

/** Stagger container – children should each use `StaggerItem`. */
export const StaggerGroup = ({
  children,
  className,
  id,
  amount = 0.2,
  once = true,
  delay = 0,
  style,
}: MotionProps) => {
  const reduced = useReducedMotion()
  if (reduced) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    )
  }
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className, style }: MotionProps) => {
  const reduced = useReducedMotion()
  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }
  return (
    <motion.div className={className} style={style} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
