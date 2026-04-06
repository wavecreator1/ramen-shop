import { useState, useEffect } from 'react'
import en from './en'
import ja from './ja'
import { LanguageContext } from './context'

const translations = { en, ja }

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('language', language)
    } catch {
      // localStorage unavailable
    }
  }, [language])

  const t = translations[language] || translations.en

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
