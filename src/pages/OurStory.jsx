import { useLanguage } from '../context/LanguageContext'

function OurStory() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="relative h-48 sm:h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-5xl font-bold font-display mb-2">{t.story.heroTitle}</h1>
          <p className="text-base sm:text-lg text-white/80">{t.story.heroSubtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Origin Story */}
        <section className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-4 sm:mb-6">{t.story.originTitle}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{t.story.originP1}</p>
                <p>{t.story.originP2}</p>
                <p>{t.story.originP3}</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop"
                alt={t.story.chefAlt}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-8 sm:mb-12">{t.story.philosophyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-cream rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal font-display mb-3 sm:mb-4">{t.story.brothTitle}</h3>
              <p className="text-muted leading-relaxed">
                {t.story.brothText}
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-charcoal font-display mb-3 sm:mb-4">{t.story.noodlesTitle}</h3>
              <p className="text-muted leading-relaxed">
                {t.story.noodlesText}
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-4">{t.story.milestonesTitle}</h2>
          <p className="text-muted text-center mb-8 sm:mb-12 text-sm sm:text-base">{t.story.milestonesSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.story.milestones.map((milestone) => (
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
