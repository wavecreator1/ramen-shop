import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'

function Navbar() {
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

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
              ICHIBAN RAMEN
            </h1>
            <p className="text-gold text-xs tracking-widest m-0">
              {t.nav.subtitle}
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
            className="ml-2 flex items-center gap-1 text-xs font-bold tracking-wide border border-gold/50 rounded-full px-3 py-1.5 transition-colors cursor-pointer bg-transparent hover:bg-gold/10"
          >
            <span className={language === 'en' ? 'text-gold' : 'text-white/60'}>EN</span>
            <span className="text-white/40">/</span>
            <span className={language === 'ja' ? 'text-gold' : 'text-white/60'}>JA</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
