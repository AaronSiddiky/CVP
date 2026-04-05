'use client'

const HeroImage = () => {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-gray-900/70"></div>
      
      {/* Person silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64">
        <div className="relative w-full h-full">
          {/* Head */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-amber-200/40 rounded-full"></div>
          {/* Hair */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-amber-300/30 rounded-t-full"></div>
          {/* Body */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-amber-800/50 rounded-t-2xl"></div>
          {/* Arm holding microphone */}
          <div className="absolute top-24 right-8 w-6 h-20 bg-amber-200/40 rounded-full transform rotate-12"></div>
        </div>
      </div>
      
      {/* Microphone */}
      <div className="absolute bottom-20 right-12 w-3 h-12 bg-gray-300/80 rounded-full"></div>
      <div className="absolute bottom-32 right-11 w-5 h-4 bg-gray-400/80 rounded"></div>
      
      {/* Stage lighting effect */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-200/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-orange-200/10 rounded-full blur-2xl"></div>
      
      {/* Audience silhouettes */}
      <div className="absolute bottom-0 left-8 w-8 h-16 bg-gray-900/60 rounded-t-full"></div>
      <div className="absolute bottom-0 left-20 w-10 h-20 bg-gray-900/60 rounded-t-full"></div>
      <div className="absolute bottom-0 right-20 w-9 h-18 bg-gray-900/60 rounded-t-full"></div>
      <div className="absolute bottom-0 right-8 w-7 h-14 bg-gray-900/60 rounded-t-full"></div>
    </div>
  )
}

export default HeroImage
