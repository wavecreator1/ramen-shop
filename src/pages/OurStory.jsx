import { useLanguage } from '../context/LanguageContext'

function OurStory() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="relative h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-3">{t.ourStory.title}</h1>
          <p className="text-lg text-white/80">{t.ourStory.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Origin Story */}
        <section className="mb-20 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-6">{t.ourStory.originTitle}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{t.ourStory.originP1}</p>
                <p>{t.ourStory.originP2}</p>
                <p>{t.ourStory.originP3}</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg card-hover">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop"
                alt={t.ourStory.chefAlt}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x700/F5E6C8/8B6914?text=Chef+Takeshi'
                }}
              />
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-8 lg:mb-12">{t.ourStory.philosophyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-cream rounded-xl p-8 card-hover">
              <h3 className="text-xl font-bold text-charcoal font-display mb-4">{t.ourStory.brothTitle}</h3>
              <p className="text-muted leading-relaxed">
                {t.ourStory.brothText}
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 card-hover">
              <h3 className="text-xl font-bold text-charcoal font-display mb-4">{t.ourStory.noodlesTitle}</h3>
              <p className="text-muted leading-relaxed">
                {t.ourStory.noodlesText}
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-4">{t.ourStory.testimonialsTitle}</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.ourStory.testimonials.map((testimonial) => (
              <div key={testimonial.author} className="testimonial-card bg-cream rounded-xl p-8 pt-10">
                <p className="text-charcoal leading-relaxed italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-semibold text-charcoal text-sm">{testimonial.author}</p>
                  <p className="text-muted text-xs">{testimonial.source}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display text-center mb-4">{t.ourStory.milestonesTitle}</h2>
          <p className="text-muted text-center mb-2">{t.ourStory.milestonesSubtitle}</p>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.ourStory.milestones.map((milestone) => (
              <div key={milestone.year} className="card-hover bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
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
