import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, User, ArrowRight, Lock, Key } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../logoll.png'
import './SignUpPage.css'

const SignUpPage = ({ setUser, setUserRole }) => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const touchStartTime = React.useRef(null)
  const isQuickTap = React.useRef(false)
  const [role, setRole] = useState('client') // 'client' or 'driver'
  const [clientFormData, setClientFormData] = useState({
    phone: '',
    firstName: '',
    lastName: ''
  })
  const [driverFormData, setDriverFormData] = useState({
    driverId: '',
    password: ''
  })

  const handleClientInputChange = (e) => {
    setClientFormData({
      ...clientFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleDriverInputChange = (e) => {
    setDriverFormData({
      ...driverFormData,
      [e.target.name]: e.target.value
    })
  }


  const handleClientSubmit = (e) => {
    // Only execute if it was a quick tap (not a long press)
    if (!isQuickTap.current && touchStartTime.current) {
      e.preventDefault()
      return
    }
    e.preventDefault()
    const form = e.currentTarget
    const button = form.querySelector('.signup-btn')
    if (button) {
      button.classList.add('touched')
    }
    setTimeout(() => {
      const userData = {
        firstName: clientFormData.firstName,
        lastName: clientFormData.lastName,
        phone: clientFormData.phone
      }
      // Navigate to language selection page with user data
      navigate('/signup/language', {
        state: {
          userData: userData,
          role: 'client'
        }
      })
    }, 650)
    isQuickTap.current = false
  }

  const handleTouchStart = () => {
    touchStartTime.current = Date.now()
    isQuickTap.current = false
  }

  const handleTouchEnd = (e) => {
    const touchDuration = touchStartTime.current ? Date.now() - touchStartTime.current : 0
    // Only trigger if it was a quick tap (< 300ms)
    if (touchDuration < 300 && touchDuration > 0) {
      isQuickTap.current = true
      const button = e.currentTarget
      button.classList.add('touched')
      // Form submission will be handled by onClick
    } else {
      isQuickTap.current = false
    }
    touchStartTime.current = null
  }

  const handleDriverLogin = (e) => {
    // Only execute if it was a quick tap (not a long press)
    if (!isQuickTap.current && touchStartTime.current) {
      e.preventDefault()
      return
    }
    e.preventDefault()
    const form = e.currentTarget
    const button = form.querySelector('.signup-btn')
    if (button) {
      button.classList.add('touched')
    }
    setTimeout(() => {
      // In a real app, this would verify credentials with the server
      const userData = {
        driverId: driverFormData.driverId,
        name: 'Ahmed B.' // This would come from the server after login
      }
      // Navigate to language selection page with user data
      navigate('/signup/language', {
        state: {
          userData: userData,
          role: 'driver'
        }
      })
    }, 650)
    isQuickTap.current = false
  }

  return (
    <div className="signup-page">
      <div className="signup-background">
        <div className="water-pattern"></div>
      </div>
      <div className="signup-content">
        <h2 className="signup-title">
          {t('signup.title')}
        </h2>
        <p className="signup-subtitle">
          {t('signup.subtitle')}
        </p>

        <div className="role-selector">
          <div 
            key={role}
            className={`role-slider ${role === 'driver' ? 'slide-right' : 'slide-left'}`}
          ></div>
          <button
            type="button"
            className={`role-btn ${role === 'client' ? 'active' : ''}`}
            onClick={() => setRole('client')}
          >
            {t('signup.client')}
          </button>
          <button
            type="button"
            className={`role-btn ${role === 'driver' ? 'active' : ''}`}
            onClick={() => setRole('driver')}
          >
            {t('signup.driver')}
          </button>
        </div>

        {role === 'client' ? (
          <form onSubmit={handleClientSubmit} className="signup-form">
            <div className="input-group">
              <label className="input-label">
                <Phone size={18} />
                {t('signup.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                className="input-field"
                placeholder="+212 6XX XXX XXX"
                value={clientFormData.phone}
                onChange={handleClientInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                <User size={18} />
                {t('signup.firstName')}
              </label>
              <input
                type="text"
                name="firstName"
                className="input-field"
                placeholder={t('signup.firstName')}
                value={clientFormData.firstName}
                onChange={handleClientInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                <User size={18} />
                {t('signup.lastName')}
              </label>
              <input
                type="text"
                name="lastName"
                className="input-field"
                placeholder={t('signup.lastName')}
                value={clientFormData.lastName}
                onChange={handleClientInputChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full signup-btn"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <span>{t('signup.start')}</span>
              <ArrowRight size={20} />
              <img src={logo} alt="Allocuba" className="btn-logo-moving" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleDriverLogin} className="signup-form">
            <div className="driver-login-info">
              <p className="info-text">
                Votre compte devrait être créé par l'administration.
              </p>
            </div>

            <div className="input-group">
              <label className="input-label">
                <Key size={18} />
                {t('signup.driverId')}
              </label>
              <input
                type="text"
                name="driverId"
                className="input-field"
                placeholder={t('signup.driverId')}
                value={driverFormData.driverId}
                onChange={handleDriverInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                <Lock size={18} />
                {t('signup.password')}
              </label>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder={t('signup.password')}
                value={driverFormData.password}
                onChange={handleDriverInputChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full signup-btn"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <span>{t('signup.login')}</span>
              <ArrowRight size={20} />
              <img src={logo} alt="Allocuba" className="btn-logo-moving" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default SignUpPage

