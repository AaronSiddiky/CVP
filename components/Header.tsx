'use client'

import { useEffect, useState } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const sections = ['about', 'thesis', 'early', 'members', 'apply']
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const mid = window.scrollY + 140
      let active = ''
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) active = id
      })
      setActiveLink(active)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (id: string) => `nav-link${activeLink === id ? ' active' : ''}`

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-left">
        <a href="#about" className={linkClass('about')}>About</a>
        <a href="#members" className={linkClass('members')}>Members</a>
      </div>
      <a href="#top" className="nav-brand">Columbia Venture Partners</a>
      <div className="nav-right">
        <a href="https://morningsideventurefund.com" target="_blank" rel="noopener noreferrer" className="nav-link">Fund</a>
        <a href="#apply" className="nav-cta">Apply</a>
      </div>
    </nav>
  )
}

export default Header
