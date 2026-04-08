import { useLanguage } from '../context/LanguageContext'

function OurStory() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="relative h-48 sm:h-56 lg:h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-2">{t.ourStory.heroTitle}</h1>
          <p className="text-base sm:text-lg text-white/80">{t.ourStory.heroSubtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Origin Story */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-4 sm:mb-6">{t.ourStory.originTitle}</h2>
              <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                <p>{t.ourStory.originP1}</p>
                <p>{t.ourStory.originP2}</p>
                <p>{t.ourStory.originP3}</p>
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
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-8 sm:mb-10 lg:mb-12">{t.ourStory.philosophyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-cream rounded-xl p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal font-display mb-3 sm:mb-4">{t.ourStory.brothTitle}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {t.ourStory.brothText}
              </p>
            </div>
            <div className="bg-cream rounded-xl p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal font-display mb-3 sm:mb-4">{t.ourStory.noodlesTitle}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {t.ourStory.noodlesText}
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-3 sm:mb-4">{t.ourStory.milestonesTitle}</h2>
          <p className="text-muted text-center text-sm sm:text-base mb-8 sm:mb-10 lg:mb-12">{t.ourStory.milestonesSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {t.ourStory.milestones.map((milestone) => (
              <div key={milestone.year} className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gold font-bold text-xl sm:text-2xl font-display">{milestone.year}</span>
                <h3 className="text-base sm:text-lg font-semibold text-charcoal mt-2 mb-2">{milestone.title}</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default OurStory
