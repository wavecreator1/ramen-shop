const menuData = {
  signature: {
    title: 'Signature Bowls',
    subtitle: 'Our most beloved creations, perfected over the years',
    items: [
      { name: 'Tonkotsu Classic', description: 'Rich, creamy pork bone broth simmered for 18 hours with thin noodles, chashu pork belly, soft-boiled egg, and scallions.', price: 16, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
      { name: 'Spicy Miso Ramen', description: 'Bold miso broth with chili oil, ground pork, corn, bean sprouts, butter, and wavy noodles.', price: 17, image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop' },
      { name: 'Shoyu Ramen', description: 'Clear soy sauce-based broth with chicken, bamboo shoots, nori, naruto fish cake, and straight noodles.', price: 15, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop' },
      { name: 'Black Garlic Tonkotsu', description: 'Our signature tonkotsu elevated with roasted black garlic oil, wood ear mushrooms, and extra chashu.', price: 19, image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop' },
    ],
  },
  seasonal: {
    title: 'Seasonal Specials',
    subtitle: 'Limited-time offerings inspired by the season',
    items: [
      { name: 'Yuzu Shio Ramen', description: 'Light salt-based broth brightened with fresh yuzu citrus, topped with seared chicken and spring vegetables.', price: 18, image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop' },
      { name: 'Tantanmen', description: 'Creamy sesame broth with Sichuan peppercorn, seasoned minced pork, bok choy, and chili threads.', price: 18, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop' },
    ],
  },
  sides: {
    title: 'Sides & Small Plates',
    subtitle: 'The perfect companions to your ramen',
    items: [
      { name: 'Gyoza (6 pcs)', description: 'Pan-fried pork and cabbage dumplings served with ponzu dipping sauce.', price: 9, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop' },
      { name: 'Karaage Chicken', description: 'Crispy Japanese fried chicken marinated in ginger and soy, served with kewpie mayo.', price: 11, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
      { name: 'Edamame', description: 'Steamed young soybeans tossed with sea salt and a hint of chili flakes.', price: 6, image: 'https://images.unsplash.com/photo-1564093497595-593b96d80571?w=400&h=300&fit=crop' },
      { name: 'Takoyaki (6 pcs)', description: 'Golden octopus balls drizzled with takoyaki sauce, kewpie mayo, and bonito flakes.', price: 10, image: 'https://images.unsplash.com/photo-1609183480237-ccfc2683c9df?w=400&h=300&fit=crop' },
    ],
  },
}

function MenuCard({ item }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = `https://placehold.co/400x300/F5E6C8/8B6914?text=${encodeURIComponent(item.name)}`
        }}
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-charcoal font-display">{item.name}</h3>
          <span className="text-deep-red font-bold">${item.price}</span>
        </div>
        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

function MenuSection({ section }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-charcoal font-display text-center mb-2">{section.title}</h2>
      <p className="text-muted text-center mb-2">{section.subtitle}</p>
      <div className="w-16 h-0.5 bg-gold mx-auto mb-10"></div>
      <div className="grid grid-cols-4 gap-6">
        {section.items.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

function Menu() {
  return (
    <div>
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold font-display mb-2">Our Menu</h1>
          <p className="text-lg text-white/80">Handcrafted bowls made with soul</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        {Object.entries(menuData).map(([key, section]) => (
          <MenuSection key={key} section={section} />
        ))}
      </div>
    </div>
  )
}

export default Menu
