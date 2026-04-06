import { useLanguage } from '../context/LanguageContext'

const menuData = {
  signature: {
    translationKey: 'signature',
    items: [
      { key: 'tonkotsuClassic', price: 16, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
      { key: 'spicyMiso', price: 17, image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop' },
      { key: 'shoyu', price: 15, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop' },
      { key: 'blackGarlic', price: 19, image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop' },
    ],
  },
  seasonal: {
    translationKey: 'seasonal',
    items: [
      { key: 'yuzuShio', price: 18, image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop' },
      { key: 'tantanmen', price: 18, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop' },
    ],
  },
  sides: {
    translationKey: 'sides',
    items: [
      { key: 'gyoza', price: 9, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop' },
      { key: 'karaage', price: 11, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
      { key: 'edamame', price: 6, image: 'https://images.unsplash.com/photo-1564093497595-593b96d80571?w=400&h=300&fit=crop' },
      { key: 'takoyaki', price: 10, image: 'https://images.unsplash.com/photo-1609183480237-ccfc2683c9df?w=400&h=300&fit=crop' },
    ],
  },
}

function MenuCard({ item, t }) {
  const translated = t.menu.items[item.key]
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={translated.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = `https://placehold.co/400x300/F5E6C8/8B6914?text=${encodeURIComponent(translated.name)}`
        }}
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-charcoal font-display">{translated.name}</h3>
          <span className="text-deep-red font-bold">${item.price}</span>
        </div>
        <p className="text-muted text-sm leading-relaxed">{translated.description}</p>
      </div>
    </div>
  )
}

function MenuSection({ section, t }) {
  const sectionT = t.menu[section.translationKey]
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-charcoal font-display text-center mb-2">{sectionT.title}</h2>
      <p className="text-muted text-center mb-2">{sectionT.subtitle}</p>
      <div className="w-16 h-0.5 bg-gold mx-auto mb-10"></div>
      <div className="grid grid-cols-4 gap-6">
        {section.items.map((item) => (
          <MenuCard key={item.key} item={item} t={t} />
        ))}
      </div>
    </section>
  )
}

function Menu() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold font-display mb-2">{t.menu.pageTitle}</h1>
          <p className="text-lg text-white/80">{t.menu.pageSubtitle}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <MenuSection section={menuData.signature} t={t} />
        <MenuSection section={menuData.seasonal} t={t} />
        <MenuSection section={menuData.sides} t={t} />
      </div>
    </div>
  )
}

export default Menu
