'use client'

import Image from 'next/image'

const Team = () => {
  return (
    <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-black leading-tight mb-8">
          Our Team
        </h2>
      </div>

      {/* Executive Team Section */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Executive Photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image 
                src="/exec.JPG"
                alt="Executive Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Executive Team Info */}
          <div className="space-y-8">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-black mb-8">
              Executive Leadership
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-6">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-black">
                  Jake Lee
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  Co-President (2025-2026)
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-black">
                  Jenna Zhao
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  Co-President (2025-2026)
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-black">
                  Alexander Zhao
                </h4>
                <p className="text-lg text-gray-600 mt-1">
                  Vice-President (2025-2026)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Club-wide Team Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-black mb-4">
            Our Community
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Columbia Venture Partners brings together passionate students, entrepreneurs, and innovators 
            from across the university to build the future of venture capital.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image 
              src="/clubwide.JPG"
              alt="Columbia Venture Partners Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
