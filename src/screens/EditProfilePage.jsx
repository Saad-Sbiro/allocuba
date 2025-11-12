import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, User, Phone, Save } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './EditProfilePage.css'

const EditProfilePage = ({ userRole, setUser, user }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLanguage()
  
  // Get user data from location state, props, or use defaults
  const userData = location.state?.userData || user || {
    firstName: '',
    lastName: '',
    phone: ''
  }

  const [formData, setFormData] = useState({
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    phone: userData.phone || ''
  })

  // Update form when user data changes
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || ''
      })
    }
  }, [user])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Update user data
    if (setUser) {
      setUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone
      })
    }
    // Navigate back to profile
    const basePath = userRole === 'driver' ? '/driver' : '/client'
    navigate(`${basePath}/profile`, {
      state: { userData: formData }
    })
  }

  const handleBack = () => {
    const basePath = userRole === 'driver' ? '/driver' : '/client'
    navigate(`${basePath}/profile`)
  }

  return (
    <div className="edit-profile-page">
      <div className="scrollable-content">
        <div className="edit-profile-header">
          <button 
            className="back-button"
            onClick={handleBack}
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="edit-profile-title">
            {t('editProfile.title')}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="profile-section">
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
                value={formData.firstName}
                onChange={handleInputChange}
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
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                <Phone size={18} />
                {t('profile.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                className="input-field"
                placeholder={t('profile.phone')}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary btn-full save-btn"
            >
              <Save size={20} />
              {t('editProfile.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfilePage

