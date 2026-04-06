import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

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
              {t.nav.brandName}
            </h1>
            <p className="text-gold text-xs tracking-widest m-0">
              {t.nav.brandTagline}
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
            className="ml-2 px-3 py-1.5 text-xs font-semibold tracking-wide border border-gold/60 rounded-md transition-colors cursor-pointer bg-transparent text-gold hover:bg-gold hover:text-charcoal"
          >
            {language === 'en' ? '日本語' : 'EN'}
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg bg-transparent border-none cursor-pointer gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-1 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 text-sm font-medium tracking-wide no-underline rounded-lg transition-colors ${
                location.pathname === link.to
                  ? 'text-gold bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleLanguage()
              setMobileMenuOpen(false)
            }}
            className="mt-1 mx-4 px-3 py-2 text-xs font-semibold tracking-wide border border-gold/60 rounded-md transition-colors cursor-pointer bg-transparent text-gold hover:bg-gold hover:text-charcoal text-center"
          >
            {language === 'en' ? '日本語に切替' : 'Switch to EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
