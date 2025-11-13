import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Settings, Globe, Moon, Sun, Palette, Phone, Heart, Info, ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useThemeColor } from '../context/ThemeColorContext'
import LanguageSelector from '../components/LanguageSelector'
import ThemeToggle from '../components/ThemeToggle'
import DonationModal from '../components/DonationModal'
import LottieAnimation from '../components/LottieAnimation'
import { LOTTIE_ANIMATIONS } from '../config/lottieAnimations'
import './SettingsPage.css'

const SettingsPage = ({ userRole }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLanguage()
  const { isDark } = useTheme()
  const { themeColor, setThemeColor } = useThemeColor()
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const settingsTitleRef = useRef(null)
  const animatedIconRef = useRef(null)

  const presetColors = [
    { name: 'Bleu iOS', value: '#0A84FF' },
    { name: 'Vert', value: '#34C759' },
    { name: 'Orange', value: '#FF9500' },
    { name: 'Rouge', value: '#FF3B30' },
    { name: 'Violet', value: '#AF52DE' },
    { name: 'Indigo', value: '#5856D6' },
    { name: 'Rose', value: '#FF2D55' },
    { name: 'Turquoise', value: '#5AC8FA' }
  ]

  const handlePhoneCall = () => {
    window.location.href = `tel:${t('settings.phone')}`
  }

  const handleDonation = () => {
    setShowDonationModal(true)
  }

  const handleDonationConfirm = (amount) => {
    // In a real app, this would process the donation
    console.log('Donation amount:', amount, 'MAD')
    // You can add payment processing here
    alert(t('donationModal.successMessage', { amount }))
  }

  // Handle icon animation on mount
  useEffect(() => {
    const animationData = location.state?.animateIcon && location.state?.sourcePosition
    if (animationData && settingsTitleRef.current) {
      const titleIcon = settingsTitleRef.current.querySelector('svg')
      if (titleIcon && animatedIconRef.current) {
        // Wait for layout to be ready
        setTimeout(() => {
          const titleRect = titleIcon.getBoundingClientRect()
          const destination = {
            x: titleRect.left + titleRect.width / 2,
            y: titleRect.top + titleRect.height / 2,
            width: titleRect.width,
            height: titleRect.height
          }

          const source = animationData.sourcePosition
          
          // Set initial position and CSS variables
          const animatedIcon = animatedIconRef.current
          animatedIcon.style.setProperty('--source-x', `${source.x}px`)
          animatedIcon.style.setProperty('--source-y', `${source.y}px`)
          animatedIcon.style.setProperty('--source-width', `${source.width}px`)
          animatedIcon.style.setProperty('--source-height', `${source.height}px`)
          animatedIcon.style.setProperty('--dest-x', `${destination.x}px`)
          animatedIcon.style.setProperty('--dest-y', `${destination.y}px`)
          animatedIcon.style.setProperty('--dest-width', `${destination.width}px`)
          animatedIcon.style.setProperty('--dest-height', `${destination.height}px`)
          
          animatedIcon.style.left = `${source.x}px`
          animatedIcon.style.top = `${source.y}px`
          animatedIcon.style.width = `${source.width}px`
          animatedIcon.style.height = `${source.height}px`
          animatedIcon.style.opacity = '1'
          setIsAnimating(true)

          // Hide the original icon temporarily
          titleIcon.style.opacity = '0'

          // Trigger animation after a small delay
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              animatedIcon.classList.add('animating')
            })
          })

          // Clean up after animation
          const timer = setTimeout(() => {
            setIsAnimating(false)
            titleIcon.style.opacity = '1'
            animatedIcon.style.opacity = '0'
            animatedIcon.classList.remove('animating')
          }, 600) // Match animation duration

          return () => clearTimeout(timer)
        }, 50)
      }
    }
  }, [location.state])

  return (
    <div className="settings-page">
      {/* Animated icon overlay */}
      <div 
        ref={animatedIconRef}
        className="animated-settings-icon"
        style={{ display: isAnimating ? 'block' : 'none' }}
      >
        <Settings size={28} />
      </div>
      
      <div className="scrollable-content">
        <div className="settings-header">
          <button 
            className="back-button"
            onClick={() => {
              const basePath = userRole === 'driver' ? '/driver' : '/client'
              navigate(`${basePath}/profile`)
            }}
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="settings-title" ref={settingsTitleRef}>
            <Settings size={28} />
            {t('settings.title')}
          </h1>
        </div>

        {/* Appearance Section */}
        <div className="settings-section">
          <h2 className="section-title">
            <Palette size={20} />
            {t('settings.appearance')}
          </h2>

          {/* Language Selector */}
          <div className="settings-language-wrapper">
            <LanguageSelector />
          </div>

          {/* Dark Mode Toggle */}
          <div className="settings-card card">
            <div className="settings-item">
              <div className="settings-item-info">
                {isDark ? <Moon size={20} className="settings-icon" /> : <Sun size={20} className="settings-icon" />}
                <div>
                  <h3 className="settings-item-title">{t('settings.darkMode')}</h3>
                  <p className="settings-item-description">{t('settings.darkModeDescription')}</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Theme Color Picker */}
          <div className="settings-card card">
            <div className="settings-item-header">
              <div className="settings-item-info">
                <Palette size={20} className="settings-icon" />
                <div>
                  <h3 className="settings-item-title">{t('settings.themeColor')}</h3>
                  <p className="settings-item-description">{t('settings.themeColorDescription')}</p>
                </div>
              </div>
            </div>
            <div className="settings-item-content">
              <div className="color-picker-container">
                <div className="current-color-display" style={{ backgroundColor: themeColor }}>
                  <input
                    type="color"
                    value={themeColor}
                    onChange={(e) => setThemeColor(e.target.value)}
                    className="color-input"
                  />
                </div>
                <div className="preset-colors">
                  {presetColors.map((color) => (
                    <button
                      key={color.value}
                      className={`preset-color ${themeColor === color.value ? 'active' : ''}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setThemeColor(color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="settings-section">
          <h2 className="section-title">
            <Phone size={20} />
            {t('settings.support')}
          </h2>

          {/* Contact */}
          <div className="settings-card card">
            <div className="settings-item">
              <div className="settings-item-info">
                <Phone size={20} className="settings-icon" />
                <div>
                  <h3 className="settings-item-title">{t('settings.contact')}</h3>
                  <p className="settings-item-description">{t('settings.contactDescription')}</p>
                  <p className="settings-phone-number">{t('settings.phone')}</p>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handlePhoneCall}>
                {t('settings.phoneNumber')}
              </button>
            </div>
          </div>
        </div>

        {/* Donation Section */}
        <div className="settings-section">
          <h2 className="section-title">
            <Heart size={20} />
            {t('settings.donation')}
          </h2>

          <div className="settings-card card">
            <div className="settings-item">
              <div className="settings-item-info">
                <Heart size={20} className="settings-icon" />
                <div>
                  <h3 className="settings-item-title">{t('settings.donationPlace')}</h3>
                  <p className="settings-item-description">{t('settings.donationDescription')}</p>
                </div>
              </div>
              <button className="btn btn-secondary" onClick={handleDonation}>
                <Heart size={18} />
                {t('settings.donationPlace')}
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="settings-section">
          <div className="settings-card card">
            <div className="settings-item">
              <div className="settings-item-info">
                <Info size={20} className="settings-icon" />
                <div>
                  <h3 className="settings-item-title">{t('settings.about')}</h3>
                  <p className="settings-item-description">{t('settings.version')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DonationModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        onConfirm={handleDonationConfirm}
      />
    </div>
  )
}

export default SettingsPage

