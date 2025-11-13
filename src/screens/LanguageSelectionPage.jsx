import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Globe, Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../logoll.png'
import LottieAnimation from '../components/LottieAnimation'
import { LOTTIE_ANIMATIONS } from '../config/lottieAnimations'
import './LanguageSelectionPage.css'

const LanguageSelectionPage = ({ setUser, setUserRole }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  
  // Get user data from location state (passed from signup)
  const userData = location.state?.userData
  const role = location.state?.role

  const languages = [
    { code: 'fr', name: 'Français', nativeName: 'Français' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ]

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode)
    
    // After language selection, proceed to the appropriate home page
    setTimeout(() => {
      if (userData && role) {
        setUser(userData)
        setUserRole(role)
        
        if (role === 'client') {
          navigate('/client/home')
        } else {
          navigate('/driver/home')
        }
      } else {
        // Fallback: go back to signup if no data
        navigate('/signup')
      }
    }, 300)
  }

  return (
    <div className="language-selection-page">
      <div className="language-selection-background">
        <div className="water-pattern"></div>
      </div>
      <div className="language-selection-content">
        <div className="language-selection-header">
          <div className="language-animation">
            <LottieAnimation
              src={LOTTIE_ANIMATIONS.app}
              className="language-lottie"
              style={{ width: '120px', height: '120px' }}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2 className="language-selection-title">
            {t('signup.selectLanguage')}
          </h2>
          <p className="language-selection-subtitle">
            {t('signup.language')}
          </p>
        </div>

        <div className="language-options-container">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-option-btn ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <div className="language-option-content">
                <span className="language-option-name">{lang.nativeName}</span>
                <span className="language-option-code">{lang.name}</span>
              </div>
              {language === lang.code && (
                <Check size={24} className="language-check" />
              )}
              {language === lang.code && (
                <ArrowRight size={20} className="language-arrow" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSelectionPage





