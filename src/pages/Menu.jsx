import { useLanguage } from '../context/LanguageContext'

const images = {
  signature: [
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop',
  ],
  seasonal: [
    'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
  ],
  sides: [
    'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1564093497595-593b96d80571?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1609183480237-ccfc2683c9df?w=400&h=300&fit=crop',
  ],
  drinks: [
    'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop',
  ],
}

function MenuCard({ item, image }) {
  return (
    <div className="card-hover bg-white rounded-xl overflow-hidden shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x300/F5E6C8/8B6914?text=${encodeURIComponent(item.name)}`
          }}
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-charcoal font-display">{item.name}</h3>
          <span className="text-deep-red font-bold text-lg">${item.price}</span>
        </div>
        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

function MenuSection({ section, sectionImages }) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-2">{section.title}</h2>
      <p className="text-muted text-center mb-2">{section.subtitle}</p>
      <div className="w-16 h-0.5 bg-gold mx-auto mb-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {section.items.map((item, index) => (
          <MenuCard key={item.name} item={item} image={sectionImages[index]} />
        ))}
      </div>
    </section>
  )
}

function Menu() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="relative h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-3">{t.menu.title}</h1>
          <p className="text-lg text-white/80">{t.menu.subtitle}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <MenuSection section={t.menu.signature} sectionImages={images.signature} />
        <MenuSection section={t.menu.seasonal} sectionImages={images.seasonal} />
        <MenuSection section={t.menu.sides} sectionImages={images.sides} />
        <MenuSection section={t.menu.drinks} sectionImages={images.drinks} />
      </div>
    </div>
  )
}

export default Menu
