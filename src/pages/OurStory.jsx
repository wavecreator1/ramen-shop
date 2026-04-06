const milestones = [
  { year: '2013', title: 'The Journey Begins', description: 'Chef Takeshi Yamamoto travels to Japan to apprentice under ramen masters in Tokyo and Fukuoka.' },
  { year: '2014', title: 'Brooklyn Pop-Up', description: 'First Ichiban Ramen pop-up at Brooklyn food markets draws lines around the block.' },
  { year: '2015', title: 'Grand Opening', description: 'Ichiban Ramen opens its permanent home at 742 Noodle Street, Brooklyn.' },
  { year: '2018', title: 'Critical Acclaim', description: 'Named "Best Ramen in NYC" by New York Magazine and featured on the Cooking Channel.' },
  { year: '2020', title: 'Community Spirit', description: 'Launched a free ramen program, serving 10,000+ bowls to frontline workers during the pandemic.' },
  { year: '2024', title: 'A Decade of Ramen', description: 'Celebrating 10 years of serving Brooklyn with plans for a second location in Manhattan.' },
]

function OurStory() {
  return (
    <div>
      <div className="relative h-48 sm:h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-5xl font-bold font-display mb-2">Our Story</h1>
          <p className="text-base sm:text-lg text-white/80">A passion for perfect ramen</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Origin Story */}
        <section className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-4 sm:mb-6">From Tokyo to Brooklyn</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>Ichiban Ramen was born from a simple dream: to bring the authentic flavors of Japan&apos;s finest ramen shops to New York City. Our founder, Chef Takeshi Yamamoto, spent two years apprenticing under legendary ramen masters in Tokyo and Fukuoka, learning the art and science of crafting the perfect bowl.</p>
                <p>What started as a weekend pop-up at Brooklyn food markets quickly became the talk of the city. Lines stretched around the block as word spread about our impossibly rich tonkotsu broth and handmade noodles. In 2015, we opened our doors on Noodle Street, and we haven&apos;t looked back since.</p>
                <p>Today, Ichiban Ramen is more than a restaurant. It&apos;s a gathering place where families, friends, and ramen lovers come together over steaming bowls of comfort, united by the belief that great food brings people together.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop"
                alt="Chef Takeshi Yamamoto preparing ramen in the kitchen"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x700/F5E6C8/8B6914?text=Chef+Takeshi'
                }}
              />
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-8 sm:mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-cream rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal font-display mb-3 sm:mb-4">The Broth</h3>
              <p className="text-muted leading-relaxed">
                Our tonkotsu broth is the soul of every bowl. We simmer premium pork bones for a minimum of 18 hours at a rolling boil, extracting every ounce of collagen and flavor. The result is a broth so rich and creamy it coats the noodles like silk. We never take shortcuts, never use concentrates, and never compromise. Each batch is tasted and approved by Chef Yamamoto himself before a single bowl is served.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal font-display mb-3 sm:mb-4">The Noodles</h3>
              <p className="text-muted leading-relaxed">
                We make our noodles fresh every morning using a custom blend of premium Japanese flour, kansui mineral water, and a technique passed down through generations. Each style of ramen gets its own noodle: thin and straight for tonkotsu, wavy and chewy for miso, and medium-width for shoyu. The right noodle transforms a good bowl into an unforgettable one, and we obsess over getting it perfect every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-4">Key Milestones</h2>
          <p className="text-muted text-center mb-8 sm:mb-12 text-sm sm:text-base">Key milestones in the Ichiban story</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gold font-bold text-2xl font-display">{milestone.year}</span>
                <h3 className="text-lg font-semibold text-charcoal mt-2 mb-2">{milestone.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default OurStory
