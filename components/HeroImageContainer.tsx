'use client'

import Image from 'next/image'
import HeroImage from './HeroImage'

interface HeroImageContainerProps {
  useCustomImage?: boolean
  imageSrc?: string
  imageAlt?: string
}

const HeroImageContainer = ({ 
  useCustomImage = false, 
  imageSrc = '/columbia-university_445.png',
  imageAlt = 'Columbia University'
}: HeroImageContainerProps) => {
  
  // If you want to use a real image, set useCustomImage to true
  // and make sure your image is in the /public folder
  if (useCustomImage && imageSrc) {
    return (
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
        <Image 
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={450}
          className="object-contain w-full h-full p-4"
          priority
        />
      </div>
    )
  }
  
  // Default: Use the custom CSS illustration
  return <HeroImage />
}

export default HeroImageContainer
