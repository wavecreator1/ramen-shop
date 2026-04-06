import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const location = useLocation()
  const { t, language, toggleLanguage } = useLanguage()

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
        <div className="flex items-center gap-8">
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
            className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors bg-transparent border border-white/30 rounded px-3 py-1 cursor-pointer"
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
