import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-16">
          {/* Big CVP */}
          <div>
            <Link href="/">
              <span
                className="font-serif-italic text-white select-none leading-none hover:text-gray-300 transition-colors inline-block"
                style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
              >
                CVP
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg sm:text-xl font-serif-italic">
            <a href="https://morningsideventurefund.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Fund
            </a>
            <Link href="/early-convictions" className="text-gray-400 hover:text-white transition-colors">
              Early Convictions
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500 font-serif-italic">
            &copy; 2026 Columbia Venture Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
