import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Settings, Globe, Moon, Sun, Palette, Phone, Heart, Info, ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useThemeColor } from '../context/ThemeColorContext'
import LanguageSelector from '../components/LanguageSelector'
import ThemeToggle from '../components/ThemeToggle'
import DonationModal from '../components/DonationModal'
import './SettingsPage.css'

const SettingsPage = ({ userRole }) => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { isDark } = useTheme()
  const { themeColor, setThemeColor } = useThemeColor()
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showDonationModal, setShowDonationModal] = useState(false)

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

  return (
    <div className="settings-page">
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
          <h1 className="settings-title">
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

