'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLink = "text-sm font-serif-italic text-gray-700 hover:text-black font-medium"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Left nav */}
          <nav className="hidden md:flex items-center space-x-6 flex-1">
            <Link href="/early-convictions" className={navLink}>
              Early Convictions
            </Link>
          </nav>

          {/* Center logo */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image 
                src="/cvplogo.png"
                alt="CVP Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right nav */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <a href="https://morningsideventurefund.com" target="_blank" rel="noopener noreferrer" className={navLink}>
              Fund
            </a>
            <a href="#apply" className="px-4 py-2 bg-green-600 text-white text-sm font-serif-italic font-medium rounded hover:bg-green-700 transition-colors">
              APPLY
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/early-convictions" className={navLink} onClick={() => setIsMenuOpen(false)}>
                Early Convictions
              </Link>
              <a href="https://morningsideventurefund.com" target="_blank" rel="noopener noreferrer" className={navLink}>
                Fund
              </a>
              <a href="#apply" className="px-4 py-2 bg-green-600 text-white text-sm font-serif-italic font-medium rounded hover:bg-green-700 transition-colors text-center">
                APPLY
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
