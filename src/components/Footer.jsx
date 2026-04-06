import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">&#127836;</span>
              <h3 className="text-xl font-bold text-white m-0 font-display">
                {t.brand.name}
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/menu" className="text-white/70 hover:text-white text-sm no-underline transition-colors">{t.footer.menu}</Link>
              <Link to="/our-story" className="text-white/70 hover:text-white text-sm no-underline transition-colors">{t.footer.ourStory}</Link>
              <Link to="/reservations" className="text-white/70 hover:text-white text-sm no-underline transition-colors">{t.footer.reservations}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider mb-4">{t.footer.visitUs}</h4>
            <div className="text-white/70 text-sm space-y-1">
              <p>{t.reservations.address}</p>
              <p>{t.reservations.city}</p>
              <p className="mt-3">{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/50 hover:text-white text-sm no-underline transition-colors">Instagram</a>
              <a href="#" className="text-white/50 hover:text-white text-sm no-underline transition-colors">Facebook</a>
              <a href="#" className="text-white/50 hover:text-white text-sm no-underline transition-colors">X / Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
