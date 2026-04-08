import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const location = useLocation()
  const { t, language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/menu', label: t.nav.menu },
    { to: '/our-story', label: t.nav.ourStory },
    { to: '/reservations', label: t.nav.reservations },
  ]

  return (
    <nav className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="text-3xl">&#127836;</span>
          <div>
            <h1 className="text-2xl font-bold text-white m-0 leading-tight tracking-wide font-display">
              {t.brand.name}
            </h1>
            <p className="text-gold text-xs tracking-widest m-0">
              {t.brand.tagline}
            </p>
          </div>
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
          {menuOpen ? '\u2715' : '\u2630'}
        </button>
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
            className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors bg-transparent border border-white/30 hover:border-white/60 rounded px-3 py-1 cursor-pointer"
          >
            {language === 'en' ? 'JP' : 'EN'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10 px-8 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium tracking-wide no-underline transition-colors ${location.pathname === link.to ? 'text-gold' : 'text-white/80 hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors bg-transparent border border-white/30 hover:border-white/60 rounded px-3 py-1 cursor-pointer"
          >
            {language === 'en' ? 'JP' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
