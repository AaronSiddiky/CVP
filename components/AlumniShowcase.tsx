'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const allCompanies = [
  { name: 'Google', logo: '/google-logo-black-transparent.png' },
  { name: 'Meta', logo: '/meta-black-icon.png' },
  { name: 'Lazard', logo: '/Lazard_wordmark.svg.png' },
  { name: 'Uber', logo: '/Uber-Logo.wine.png' },
  { name: 'J.P. Morgan', logo: '/jpmorgan.png' },
  { name: 'Morgan Stanley', logo: '/Morgan_Stanley_Logo_1.svg.png' },
  { name: 'Bank of America', logo: '/Bank_of_America_logo.svg.png' },
  { name: 'McKinsey & Company', logo: '/mckinsey.svg.png' },
  { name: 'BlackRock', logo: '/blackrock.png' },
  { name: 'Insight Partners', logo: '/insight.png' },
  { name: 'Y Combinator', logo: '/yc.webp' },
  { name: 'Intel Capital', logo: '/intel.png' },
  { name: 'Evercore', logo: '/evercore.jpg' },
  { name: 'Barclays', logo: '/barclays.jpg' },
  { name: 'BCG', logo: '/bcg.png' },
  { name: 'EY', logo: '/ey.webp' },
  { name: 'White Star Capital', logo: '/whitestar.png' },
  { name: 'Microsoft', logo: '/microsoft.png' },
  { name: 'Amazon', logo: '/amazon.png' },
  { name: 'Goldman Sachs', logo: '/goldmansachs.png' },
]

const leftLogos = allCompanies.slice(0, 10)
const rightLogos = allCompanies.slice(10)

const cycleNames = [
  'Google',
  'Goldman Sachs',
  'J.P. Morgan',
  'McKinsey',
  'Meta',
  'Morgan Stanley',
  'BlackRock',
  'Barclays',
]

const ITEM_HEIGHT = 80
const VISIBLE_ITEMS = 3
const CONTAINER_HEIGHT = VISIBLE_ITEMS * ITEM_HEIGHT
const DELTA_PER_NAME = 150
const TOTAL_DELTA = cycleNames.length * DELTA_PER_NAME
const LOCK_THRESHOLD = 80

export default function AlumniShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const accDeltaRef = useRef(0)
  const [rawProgress, setRawProgress] = useState(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const wh = window.innerHeight
      const acc = accDeltaRef.current
      const down = e.deltaY > 0
      const up = e.deltaY < 0

      if (rect.bottom < 0 || rect.top > wh) return

      // Carousel in progress -- always capture while section is visible
      if (acc > 0 && acc < TOTAL_DELTA && rect.bottom > 0 && rect.top < wh) {
        e.preventDefault()
        accDeltaRef.current = Math.max(
          0,
          Math.min(TOTAL_DELTA, acc + e.deltaY)
        )
        setRawProgress(accDeltaRef.current / TOTAL_DELTA)
        return
      }

      // At start, scrolling down, section near viewport top -- begin capturing
      if (
        acc <= 0 &&
        down &&
        rect.top <= LOCK_THRESHOLD &&
        rect.top >= -LOCK_THRESHOLD
      ) {
        e.preventDefault()
        accDeltaRef.current = Math.max(0, acc + e.deltaY)
        setRawProgress(accDeltaRef.current / TOTAL_DELTA)
        return
      }

      // At end, scrolling up, section near viewport top -- begin reverse
      if (
        acc >= TOTAL_DELTA &&
        up &&
        rect.top <= LOCK_THRESHOLD &&
        rect.top >= -LOCK_THRESHOLD
      ) {
        e.preventDefault()
        accDeltaRef.current = Math.min(TOTAL_DELTA, acc + e.deltaY)
        setRawProgress(accDeltaRef.current / TOTAL_DELTA)
        return
      }
    }

    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const wh = window.innerHeight
      const acc = accDeltaRef.current
      const deltaY = touchStartY - e.touches[0].clientY
      touchStartY = e.touches[0].clientY

      const down = deltaY > 0
      const up = deltaY < 0

      if (rect.bottom < 0 || rect.top > wh) return

      if (acc > 0 && acc < TOTAL_DELTA && rect.bottom > 0 && rect.top < wh) {
        e.preventDefault()
        accDeltaRef.current = Math.max(
          0,
          Math.min(TOTAL_DELTA, acc + deltaY)
        )
        setRawProgress(accDeltaRef.current / TOTAL_DELTA)
        return
      }

      if (
        acc <= 0 &&
        down &&
        rect.top <= LOCK_THRESHOLD &&
        rect.top >= -LOCK_THRESHOLD
      ) {
        e.preventDefault()
        accDeltaRef.current = Math.max(0, acc + deltaY)
        setRawProgress(accDeltaRef.current / TOTAL_DELTA)
        return
      }

      if (
        acc >= TOTAL_DELTA &&
        up &&
        rect.top <= LOCK_THRESHOLD &&
        rect.top >= -LOCK_THRESHOLD
      ) {
        e.preventDefault()
        accDeltaRef.current = Math.min(TOTAL_DELTA, acc + deltaY)
        setRawProgress(accDeltaRef.current / TOTAL_DELTA)
        return
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const isComplete = rawProgress >= 1
  const smoothIndex = rawProgress * cycleNames.length
  const smoothTranslateY =
    CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2 - smoothIndex * ITEM_HEIGHT

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf9f7] py-10 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[250px] sm:min-h-[350px] md:min-h-[400px]">
          {/* Left logos */}
          <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-7 shrink-0 mr-16">
            {leftLogos.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center h-10 w-[120px]"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={100}
                  height={32}
                  className="max-h-8 w-auto object-contain opacity-50"
                />
              </div>
            ))}
          </div>

          {/* Center — scroll-controlled carousel */}
          <div className="flex-1 flex items-center justify-center">
            {isComplete ? (
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-italic text-navy-900 text-center animate-fade-in">
                and many more
              </p>
            ) : (
              <div
                className="relative overflow-hidden w-full max-w-lg"
                style={{ height: `${CONTAINER_HEIGHT}px` }}
              >
                <div
                  className="absolute w-full will-change-transform"
                  style={{
                    transform: `translateY(${smoothTranslateY}px)`,
                  }}
                >
                  {cycleNames.map((name, i) => {
                    const distance = Math.abs(i - smoothIndex)
                    const scale = Math.max(0.55, 1 - distance * 0.22)
                    const opacity = Math.max(0.06, 1 - distance * 0.55)
                    const isActive = distance < 0.5

                    return (
                      <div
                        key={name}
                        className="flex items-center justify-center"
                        style={{ height: `${ITEM_HEIGHT}px` }}
                      >
                        <span
                          className="font-serif-italic whitespace-nowrap will-change-transform"
                          style={{
                            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                            transform: `scale(${scale})`,
                            opacity,
                            color: isActive ? '#0f172a' : '#9ca3af',
                          }}
                        >
                          {name}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#faf9f7] to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#faf9f7] to-transparent pointer-events-none z-10" />
              </div>
            )}
          </div>

          {/* Right logos */}
          <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-7 shrink-0 ml-16">
            {rightLogos.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center h-10 w-[120px]"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={100}
                  height={32}
                  className="max-h-8 w-auto object-contain opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
