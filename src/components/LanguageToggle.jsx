import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './LanguageToggle.css'

const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className={`language-toggle ${className}`}
      onClick={toggleLanguage}
      aria-label={language === 'fr' ? 'Switch to Arabic' : 'Passer au français'}
      title={language === 'fr' ? 'العربية' : 'Français'}
    >
      <Globe size={20} />
      <span className="language-code">{language === 'fr' ? 'FR' : 'AR'}</span>
    </button>
  )
}

export default LanguageToggle

