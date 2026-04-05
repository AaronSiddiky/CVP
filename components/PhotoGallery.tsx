'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  src: string
  pos?: string
  wide?: boolean
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-2 scrollbar-hide justify-center items-end">
        {photos.map((item, i) => (
          <div
            key={i}
            className="shrink-0 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(item.src)}
          >
            <div
              className={`${
                item.wide
                  ? 'w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]'
                  : 'w-[160px] sm:w-[190px] md:w-[220px] lg:w-[250px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]'
              } rounded-3xl overflow-hidden bg-gray-200 shadow-lg`}
            >
              <Image
                src={item.src}
                alt={`CVP Trip ${i + 1}`}
                width={item.wide ? 460 : 250}
                height={500}
                quality={100}
                className="w-full h-full object-cover"
                style={{ objectPosition: item.pos || 'center' }}
                priority={i < 2}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Zoomed photo"
              width={1200}
              height={1600}
              quality={100}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl"
              priority
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
