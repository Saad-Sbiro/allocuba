import React, { createContext, useContext, useState, useEffect } from 'react'
import { fr } from '../translations/fr'
import { ar } from '../translations/ar'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to French
    const saved = localStorage.getItem('allocuba-language')
    return saved || 'fr'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('allocuba-language', language)
    // Update document direction for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'ar' : 'fr')
  }

  // Translation function
  const t = (key, params = {}) => {
    const keys = key.split('.')
    let translation = language === 'fr' ? fr : ar
    
    for (const k of keys) {
      translation = translation?.[k]
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`)
        return key
      }
    }

    // Replace parameters in translation string
    if (typeof translation === 'string' && params) {
      return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] !== undefined ? params[paramKey] : match
      })
    }

    return translation
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isRTL: language === 'ar',
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

