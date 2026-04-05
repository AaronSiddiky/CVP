import Header from '@/components/Header'
import Footer from '@/components/Footer'

const partners = [
  { name: 'NEA', description: 'New Enterprise Associates' },
  { name: 'Picus', description: 'Picus Capital' },
  { name: 'Interplay', description: 'Interplay Ventures' },
  { name: 'Plug & Play', description: 'Plug and Play Tech Center' },
]

export default function EarlyConvictions() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif-italic text-black leading-tight mb-4 sm:mb-6">
            Early Convictions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-serif-italic text-gray-500 italic">
            Honoring the companies we had high conviction in.
          </p>
        </div>
      </section>

      {/* Body Text */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-serif-italic">
            <p>
              Columbia Venture Partners has a long history of providing its members the opportunity to make bold convictions on early-stage start-ups and emerging verticals. Before the inception of the Morningside Venture Fund, CVP&apos;s sourcing initiative served as an outlet for members to identify high-conviction companies and share them with partner funds across New York City.
            </p>
            <p>
              Today, MVF gives us the opportunity to deploy capital behind these convictions directly. For the companies we are unable to invest in, we maintain this archive as a record of the founders, ideas, and markets that captured our attention.
            </p>
            <p>
              As time progresses, we&apos;d like to look back on this list progressively and the early convictions we made in the next big start-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-italic text-black mb-8 sm:mb-12">
            Partnerships
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[140px] sm:min-h-[160px]"
              >
                <span className="text-2xl sm:text-3xl font-display font-bold text-black mb-2">
                  {p.name}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {p.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-16 shadow-sm">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-italic text-black mb-4">
              Coming Soon
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 font-serif-italic">
              Early Convictions was incepted as part of the sourcing initiative from Spring 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
