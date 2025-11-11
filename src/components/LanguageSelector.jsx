import React from 'react'
import { Globe, Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'fr', name: 'Français', nativeName: 'Français' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ]

  return (
    <div className="language-selector">
      <div className="language-selector-header">
        <Globe size={24} />
        <h3 className="language-selector-title">{t('signup.selectLanguage')}</h3>
      </div>
      <div className="language-options">
        {languages.map(lang => (
          <button
            key={lang.code}
            className={`language-option ${language === lang.code ? 'active' : ''}`}
            onClick={() => setLanguage(lang.code)}
          >
            <div className="language-option-content">
              <span className="language-option-name">{lang.nativeName}</span>
              <span className="language-option-code">{lang.name}</span>
            </div>
            {language === lang.code && (
              <Check size={20} className="language-check" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector

