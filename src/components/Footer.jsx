import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">&#127836;</span>
              <h3 className="text-xl font-bold text-white m-0 font-display">
                ICHIBAN RAMEN
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Crafting authentic Japanese ramen with passion since 2015. Every bowl tells a story of tradition and dedication.
            </p>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider mb-4">QUICK LINKS</h4>
            <div className="flex flex-col gap-2">
              <Link to="/menu" className="text-white/70 hover:text-white text-sm no-underline transition-colors">Menu</Link>
              <Link to="/our-story" className="text-white/70 hover:text-white text-sm no-underline transition-colors">Our Story</Link>
              <Link to="/reservations" className="text-white/70 hover:text-white text-sm no-underline transition-colors">Reservations</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider mb-4">VISIT US</h4>
            <div className="text-white/70 text-sm space-y-1">
              <p>742 Noodle Street</p>
              <p>Brooklyn, NY 11201</p>
              <p className="mt-3">Phone: (718) 555-0188</p>
              <p>Email: hello@ichibanramen.com</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/50 hover:text-white text-sm no-underline transition-colors">Instagram</a>
              <a href="#" className="text-white/50 hover:text-white text-sm no-underline transition-colors">Facebook</a>
              <a href="#" className="text-white/50 hover:text-white text-sm no-underline transition-colors">X / Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-sm">&copy; 2026 Ichiban Ramen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
