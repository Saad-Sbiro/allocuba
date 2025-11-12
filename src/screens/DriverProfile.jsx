import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Phone, MapPin, Package, LogOut, Edit, Trophy, Target, Settings } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import ConfirmDialog from '../components/ConfirmDialog'
import './DriverProfile.css'

const DriverProfile = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const deliveriesCompleted = 67
  const deliveriesGoal = 100
  const progressPercentage = (deliveriesCompleted / deliveriesGoal) * 100
  const remainingDeliveries = deliveriesGoal - deliveriesCompleted
  const rewardAmount = 100
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  
  // Count unread notifications (in a real app, this would come from state/API)
  const unreadCount = 2

  const recentDeliveries = [
    {
      id: 1,
      clientName: 'Saad A.',
      quantity: 5,
      date: '2024-01-15',
      status: t('clientHome.status.delivered')
    },
    {
      id: 2,
      clientName: 'Fatima B.',
      quantity: 3,
      date: '2024-01-14',
      status: t('clientHome.status.delivered')
    },
    {
      id: 3,
      clientName: 'Mohamed C.',
      quantity: 4,
      date: '2024-01-13',
      status: t('clientHome.status.delivered')
    }
  ]

  const handleLogout = () => {
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    setShowLogoutConfirm(false)
    navigate('/signup')
  }

  return (
    <div className="driver-profile-page">
      <div className="driver-profile-header">
        <button 
          className="profile-settings-btn"
          onClick={() => navigate('/driver/settings')}
          aria-label={t('navigation.settings')}
        >
          <Settings size={24} />
        </button>
        <div className="driver-profile-avatar">
          <User size={48} />
        </div>
        <h1 className="driver-profile-name">{t('driverProfile.name')}</h1>
        <p className="driver-profile-role">{t('driverProfile.role')}</p>
        <button className="edit-profile-btn">
          <Edit size={16} />
          {t('driverProfile.editProfile')}
        </button>
      </div>

      <div className="scrollable-content">
        <div className="progress-section">
          <div className="progress-card card">
            <div className="progress-header">
              <div className="progress-icon">
                <Trophy size={28} />
              </div>
              <div className="progress-info">
                <h3 className="progress-title">{t('driverProfile.deliveryGoal')}</h3>
                <p className="progress-subtitle">{t('driverProfile.rewardMessage', { amount: rewardAmount, goal: deliveriesGoal })}</p>
              </div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="progress-percentage">
                {Math.round(progressPercentage)}% {t('driverProfile.completed')}
              </div>
            </div>
            <div className="progress-stats">
              <div className="progress-stat">
                <span className="stat-number">{deliveriesCompleted}</span>
                <span className="stat-label">{t('driverProfile.delivered')}</span>
              </div>
              <div className="progress-stat-divider"></div>
              <div className="progress-stat">
                <span className="stat-number">{remainingDeliveries}</span>
                <span className="stat-label">{t('driverProfile.remaining')}</span>
              </div>
              <div className="progress-stat-divider"></div>
              <div className="progress-stat">
                <span className="stat-number">{deliveriesGoal}</span>
                <span className="stat-label">{t('driverProfile.goal')}</span>
              </div>
            </div>
            {remainingDeliveries > 0 && (
              <div className="progress-message">
                <p>
                  <strong>{t('driverProfile.remainingMessage', { count: remainingDeliveries, amount: rewardAmount })}</strong>
                </p>
              </div>
            )}
            {remainingDeliveries <= 0 && (
              <div className="reward-achieved">
                <Trophy size={24} />
                <p>{t('driverProfile.congratulations')}</p>
              </div>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h3 className="section-title">{t('driverProfile.personalInfo')}</h3>
          <div className="info-card card">
            <div className="info-item">
              <Phone size={20} />
              <div className="info-content">
                <span className="info-label">{t('driverProfile.phone')}</span>
                <span className="info-value">+212 6XX XXX XXX</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <div className="info-content">
                <span className="info-label">{t('driverProfile.deliveryZone')}</span>
                <span className="info-value">{t('driverProfile.deliveryZoneValue')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3 className="section-title">
            <Package size={20} />
            {t('driverProfile.recentDeliveries')}
          </h3>
          {recentDeliveries.map(delivery => (
            <div key={delivery.id} className="delivery-history-card card">
              <div className="delivery-history-header">
                <div>
                  <h4 className="delivery-history-client">{delivery.clientName}</h4>
                  <p className="delivery-history-date">{delivery.date}</p>
                </div>
                <span className={`status-badge status-${delivery.status.toLowerCase().replace(' ', '-')}`}>
                  {delivery.status}
                </span>
              </div>
              <div className="delivery-history-details">
                <span>{delivery.quantity} {t('driverProfile.tonnesDelivered')}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-section">
          <button 
            className="btn btn-secondary btn-full settings-btn"
            onClick={() => navigate('/driver/settings')}
          >
            <Settings size={20} />
            {t('navigation.settings')}
          </button>
        </div>

        <div className="profile-section">
          <button className="btn btn-secondary btn-full logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            {t('driverProfile.logout')}
          </button>
        </div>
      </div>

      {showLogoutConfirm && (
        <ConfirmDialog
          message={t('driverProfile.logoutConfirm')}
          onConfirm={confirmLogout}
          onCancel={() => setShowLogoutConfirm(false)}
          confirmText={t('driverProfile.logoutConfirmText')}
          cancelText={t('common.cancel')}
        />
      )}
    </div>
  )
}

export default DriverProfile

