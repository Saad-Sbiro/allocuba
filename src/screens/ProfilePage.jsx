import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Phone, MapPin, Package, LogOut, Edit } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Settings } from 'lucide-react'
import ConfirmDialog from '../components/ConfirmDialog'
import LottieAnimation from '../components/LottieAnimation'
import { LOTTIE_ANIMATIONS } from '../config/lottieAnimations'
import './ProfilePage.css'

const ProfilePage = ({ user }) => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  
  // Count unread notifications (in a real app, this would come from state/API)
  const unreadCount = 1

  const pastOrders = [
    {
      id: 1,
      quantity: 5,
      type: t('waterTypes.tantan'),
      date: '2024-01-15',
      status: t('clientHome.status.delivered'),
      total: 225 // 5 tonnes × 45 MAD
    },
    {
      id: 2,
      quantity: 3,
      type: t('waterTypes.filtered'),
      date: '2024-01-10',
      status: t('clientHome.status.delivered'),
      total: 135 // 3 tonnes × 45 MAD
    },
    {
      id: 3,
      quantity: 4,
      type: t('waterTypes.tantan'),
      date: '2024-01-05',
      status: t('clientHome.status.delivered'),
      total: 180 // 4 tonnes × 45 MAD
    }
  ]

  const handleLogout = () => {
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    setShowLogoutConfirm(false)
    navigate('/signup')
  }

  const handleSettingsClick = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const iconRect = button.querySelector('svg')?.getBoundingClientRect() || rect
    
    // Store the icon position for animation
    navigate('/client/settings', {
      state: {
        animateIcon: true,
        sourcePosition: {
          x: iconRect.left + iconRect.width / 2,
          y: iconRect.top + iconRect.height / 2,
          width: iconRect.width,
          height: iconRect.height
        }
      }
    })
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button 
          className="profile-settings-btn"
          onClick={handleSettingsClick}
          aria-label={t('navigation.settings')}
        >
          <Settings size={24} />
        </button>
        <div className="profile-avatar">
          <User size={48} />
        </div>
        <h1 className="profile-name">{t('profile.name', { firstName: user?.firstName || 'Saad', lastName: user?.lastName || 'A.' })}</h1>
        <p className="profile-role">{t('profile.role')}</p>
        <button 
          className="edit-profile-btn"
          onClick={() => navigate('/client/edit-profile', { 
            state: { 
              userData: {
                firstName: user?.firstName || '',
                lastName: user?.lastName || '',
                phone: user?.phone || ''
              }
            } 
          })}
        >
          <Edit size={16} />
          {t('profile.editProfile')}
        </button>
      </div>

      <div className="scrollable-content">
        <div className="profile-section">
          <h3 className="section-title">{t('profile.personalInfo')}</h3>
          <div className="info-card card">
            <div className="info-item">
              <Phone size={20} />
              <div className="info-content">
                <span className="info-label">{t('profile.phone')}</span>
                <span className="info-value">{user?.phone || '+212 6XX XXX XXX'}</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <div className="info-content">
                <span className="info-label">{t('profile.address')}</span>
                <span className="info-value">{t('profile.addressValue')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3 className="section-title">
            <Package size={20} />
            {t('profile.orderHistory')}
          </h3>
          {pastOrders.map(order => (
            <div key={order.id} className="order-history-card card">
              <div className="order-history-header">
                <div>
                  <h4 className="order-history-type">{order.type}</h4>
                  <p className="order-history-date">{order.date}</p>
                </div>
                <div className="order-history-right">
                  <span className="order-history-total">{order.total} MAD</span>
                  <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="order-history-details">
                <span>{order.quantity} {t('profile.tonnes')}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-section">
          <button 
            className="btn btn-secondary btn-full settings-btn"
            onClick={handleSettingsClick}
          >
            <Settings size={20} />
            {t('navigation.settings')}
          </button>
        </div>

        <div className="profile-section">
          <button className="btn btn-secondary btn-full logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            {t('profile.logout')}
          </button>
        </div>
      </div>

      {showLogoutConfirm && (
        <ConfirmDialog
          message={t('profile.logoutConfirm')}
          onConfirm={confirmLogout}
          onCancel={() => setShowLogoutConfirm(false)}
          confirmText={t('profile.logoutConfirmText')}
          cancelText={t('common.cancel')}
        />
      )}
    </div>
  )
}

export default ProfilePage

