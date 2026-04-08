import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/menu', label: t.nav.menu },
    { to: '/our-story', label: t.nav.ourStory },
    { to: '/reservations', label: t.nav.reservations },
  ]

  return (
    <nav className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="text-2xl sm:text-3xl">&#127836;</span>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white m-0 leading-tight tracking-wide font-display">
              {t.brand.name}
            </h1>
            <p className="text-gold text-xs tracking-widest m-0">
              {t.brand.tagline}
            </p>
          </div>
        </Link>
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide no-underline transition-colors ${
                location.pathname === link.to
                  ? 'text-gold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors bg-transparent border border-white/30 rounded px-3 py-1 cursor-pointer hover:border-white/60"
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer bg-transparent border-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium tracking-wide no-underline transition-colors ${
                location.pathname === link.to
                  ? 'text-gold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="mt-2 text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors bg-transparent border border-white/30 rounded px-3 py-1 cursor-pointer hover:border-white/60"
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
