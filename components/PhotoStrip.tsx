'use client'

import { useEffect, useState } from 'react'

interface PhotoStripProps {
  photos: { src: string; alt: string }[]
  mirrored?: boolean
}

const PhotoStrip = ({ photos, mirrored = false }: PhotoStripProps) => {
  const [zoomed, setZoomed] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(null)
    }
    if (zoomed) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoomed])

  return (
    <>
      <div className={`photo-strip${mirrored ? ' mirrored' : ''}`}>
        {photos.map((p, i) => (
          <div key={i} onClick={() => setZoomed(p.src)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} />
          </div>
        ))}
      </div>
      {zoomed && (
        <div className="zoom-modal" onClick={() => setZoomed(null)}>
          <button className="zoom-close" onClick={() => setZoomed(null)} aria-label="Close">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoomed} alt="Zoomed" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

export default PhotoStrip
