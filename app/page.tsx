import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AlumniShowcase from '@/components/AlumniShowcase'
import PhotoGallery from '@/components/PhotoGallery'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "url('/cvp.png')",
          backgroundColor: "#faf9f7"
        }}
      >
        <div className="relative z-10 text-left w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 sm:pt-24 md:pt-32 lg:pt-40">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="font-serif-italic text-navy-900 leading-[1.05] tracking-tight mb-4 sm:mb-6 md:mb-8" style={{ fontSize: 'clamp(2rem, 5.5vw, 8rem)' }}>
              <span className="block not-italic">Columbia University&apos;s <span className="italic">Premier</span></span>
              <span className="block">
                <span className="text-brand-green not-italic">Venture Capital</span> <span className="not-italic">Initiative</span><span className="text-brand-green">.</span>
              </span>
            </h1>
            
            <div className="mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-12 md:mb-16 w-full max-w-3xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif-italic text-navy-900 leading-relaxed">
                Established in 2016, Columbia Venture Partners is Columbia University&apos;s oldest and premier venture capital initiative.
              </p>
            </div>
            
            <div className="relative mb-8 sm:mb-12 md:mb-16 w-full flex justify-center">
              <div className="relative max-w-5xl w-full">
                <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                  <div className="absolute top-0 left-4 sm:left-6 right-4 sm:right-6 h-px bg-gray-600"></div>
                  <div className="absolute bottom-0 left-4 sm:left-6 right-4 sm:right-6 h-px bg-gray-600"></div>
                  <div className="absolute left-0 top-4 sm:top-6 bottom-4 sm:bottom-6 w-px bg-gray-600"></div>
                  <div className="absolute right-0 top-4 sm:top-6 bottom-4 sm:bottom-6 w-px bg-gray-600"></div>
                  
                  <div className="absolute inset-3 sm:inset-4 overflow-hidden">
                    <Image
                      src="/clubwide.JPG"
                      alt="CVP Team"
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="bg-[#faf9f7] pt-10 sm:pt-14 pb-2 px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg font-serif-italic text-gray-500 text-center">
          Our members are at:
        </p>
      </div>

      <AlumniShowcase />

      {/* About Us Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-2xl mx-auto px-8 sm:px-10 md:px-12">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-black leading-relaxed font-serif-italic font-normal">
            <p>
              <span className="text-5xl sm:text-6xl font-bold text-black float-left mr-3 mt-1 leading-[0.8]">I</span>n 2016, a group of students founded Columbia Venture Partners. Since then, CVP has stood as Columbia University&apos;s premier venture capital initiative, connecting students to venture capital and entrepreneurship.
            </p>
            <p>
              More than a decade later, Columbia Venture Partners exists as a comprehensive platform that bridges the gap between academic excellence and real-world venture capital experience. Our members gain exposure to deal sourcing with partnerships with leading venture capital funds including NEA, Picus, Interplay, internship opportunities with Plug and Play.
            </p>
            <p>
              Through our extensive network of alumni working at top-tier firms, we provide unparalleled opportunities for professional development and career advancement in the venture capital ecosystem. As well as access to Morningside Venture Fund, Columbia&apos;s first student-driven venture fund that deploys capital to Columbia affiliated start-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Venture in New York and Beyond */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-2xl mx-auto px-8 sm:px-10 md:px-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-italic text-black mb-4 sm:mb-6 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-80">
              {/* Minimalist NYC skyline */}
              <rect x="1" y="20" width="4" height="10" fill="black"/>
              <rect x="2" y="16" width="2" height="4" fill="black"/>
              <rect x="6" y="14" width="5" height="16" fill="black"/>
              <rect x="7" y="10" width="3" height="4" fill="black"/>
              <rect x="12" y="8" width="6" height="22" fill="black"/>
              <rect x="13" y="4" width="1" height="4" fill="black"/>
              <rect x="19" y="12" width="5" height="18" fill="black"/>
              <rect x="20" y="8" width="3" height="4" fill="black"/>
              <rect x="25" y="17" width="4" height="13" fill="black"/>
              <rect x="26" y="13" width="2" height="4" fill="black"/>
              <rect x="0" y="30" width="32" height="2" fill="black"/>
            </svg>
            Venture in New York and Beyond
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-serif-italic font-normal">
            As a club CVP hosts an annual trip to explore the venture scene outside New York City. In recent years, CVP members have travelled to San Francisco, Chicago, London, San Juan and more.
          </p>
        </div>
        {/* Photo strip */}
        <PhotoGallery
          photos={[
            { src: '/CVP in London 2025.JPG', pos: 'center' },
            { src: '/CVP in London 2025 (1).JPG', pos: 'center' },
            { src: '/CVP in Chicago (2).JPG', pos: 'center' },
          ]}
        />
      </section>

      {/* A lifelong community */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-2xl mx-auto px-8 sm:px-10 md:px-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-italic text-black mb-4 sm:mb-6 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-80">
              {/* Three people / community */}
              <circle cx="16" cy="8" r="4" fill="black"/>
              <path d="M8 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="black" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              <circle cx="5" cy="11" r="3" fill="black"/>
              <path d="M0 28c0-3.314 2.239-6 5-6" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="27" cy="11" r="3" fill="black"/>
              <path d="M32 28c0-3.314-2.239-6-5-6" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            A lifelong community
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-serif-italic font-normal">
            With alumni in venture capital, entrepreneurship, investment banking, private equity, consulting, tech, and more, CVP members become more than peers — they build a lifelong community. Whether it is midterm season, or finals, you&apos;ll find our members engaging in social pods, dinners, or joining in on our annual retreats to Upstate New York, or the Hamptons.
          </p>
        </div>
        {/* Photo strip */}
        <PhotoGallery
          photos={[
            { src: '/IMG_6677.jpg', pos: 'center' },
            { src: '/IMG_6680.jpg', pos: 'center' },
            { src: '/IMG_7830.jpg', pos: 'center' },
          ]}
        />
      </section>

      {/* Analyst Program */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-2xl mx-auto px-8 sm:px-10 md:px-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-italic text-black mb-4 sm:mb-6 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-80">
              {/* Rising bar chart */}
              <rect x="2" y="22" width="5" height="8" fill="black"/>
              <rect x="10" y="14" width="5" height="16" fill="black"/>
              <rect x="18" y="8" width="5" height="22" fill="black"/>
              <rect x="26" y="2" width="5" height="28" fill="black"/>
              <path d="M4.5 22 L12.5 14 L20.5 8 L28.5 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
            Analyst Program
          </h2>
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-black leading-relaxed font-serif-italic font-normal">
            <p>
              Columbia Venture Partners is a student-run venture capital initiative in New York City, founded in the spring of 2016. We educate the Columbia University student body on angel investing, venture capital, and growth equity by providing students with real-world experience in the venture capital industry.
            </p>
            <p>
              Every fall, we recruit for 10–15 analysts to participate in our rigorous Analyst Program. Analysts participate in CVP Academy, a 10-week long bootcamp program aimed to thoroughly prepare them in venture capital, including the ins-and-outs of investing and how to evaluate a startup. Further, our program connects analysts with real world internship experience supported by our partner funds and introduces analysts to the vibrant ecosystem of investors and entrepreneurs in New York City.
            </p>
          </div>
        </div>
        {/* Placeholder image */}
        <div className="max-w-2xl mx-auto px-8 sm:px-10 md:px-12">
          <div className="w-full h-[300px] sm:h-[380px] md:h-[460px] rounded-2xl overflow-hidden bg-gray-200">
            <Image src="/analyst.webp" alt="Analyst Program" width={800} height={460} quality={100} className="w-full h-full object-cover" style={{ objectPosition: 'center' }} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
