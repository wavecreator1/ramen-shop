import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Reservations() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=400&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-2">{t.reservations.title}</h1>
          <p className="text-lg text-white/80">{t.reservations.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Booking Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-6">{t.reservations.bookTitle}</h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">&#127836;</div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">
                    {t.reservations.confirmTitle}
                  </h3>
                  <p className="text-muted mb-2">
                    {t.reservations.confirmMsg
                      .replace('{name}', formData.name)
                      .replace('{guests}', formData.guests)
                      .replace('{date}', formData.date)
                      .replace('{time}', formData.time)}
                  </p>
                  <p className="text-muted text-sm">
                    {t.reservations.confirmEmail.replace('{email}', formData.email)}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', date: '', time: '', guests: '2' })
                    }}
                    className="mt-6 bg-deep-red text-white px-6 py-2 rounded-lg hover:bg-deep-red/90 transition-colors cursor-pointer"
                  >
                    {t.reservations.makeAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">{t.reservations.labelName}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder={t.reservations.placeholderName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">{t.reservations.labelEmail}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder={t.reservations.placeholderEmail}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">{t.reservations.labelDate}</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">{t.reservations.labelTime}</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      >
                        <option value="">{t.reservations.selectTime}</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">{t.reservations.labelGuests}</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? t.reservations.guest : t.reservations.guests}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-deep-red text-white py-3 rounded-lg font-semibold hover:bg-deep-red/90 transition-colors cursor-pointer"
                  >
                    {t.reservations.reserveButton}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-6">{t.reservations.findUs}</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-light-gold h-56 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">&#128205;</div>
                    <p className="text-warm-brown font-medium text-sm">{t.reservations.address1}</p>
                    <p className="text-warm-brown/70 text-sm">{t.reservations.address2}</p>
                    <p className="text-xs text-warm-brown/50 mt-2 italic">{t.reservations.mapNote}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-charcoal font-display mb-4">{t.reservations.hoursTitle}</h3>
                <div className="space-y-3">
                  {t.reservations.hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-charcoal font-medium text-sm">{h.day}</span>
                      <span className="text-muted text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <h3 className="text-lg font-bold text-charcoal font-display mb-2">{t.reservations.largeParties}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t.reservations.largePartiesText}{' '}
                  <a href="mailto:reservations@ichibanramen.com" className="text-deep-red hover:underline">
                    reservations@ichibanramen.com
                  </a>{' '}
                  {t.reservations.largePartiesOr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservations
