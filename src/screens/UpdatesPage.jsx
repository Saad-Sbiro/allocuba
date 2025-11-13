import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, CheckCircle, Package, ArrowRight, Navigation } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import NotificationCard from '../components/NotificationCard'
import LottieAnimation from '../components/LottieAnimation'
import { LOTTIE_ANIMATIONS } from '../config/lottieAnimations'
import './UpdatesPage.css'

const UpdatesPage = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [showNotification, setShowNotification] = useState(false)
  const [notificationData, setNotificationData] = useState(null)

  const notifications = [
    {
      id: 1,
      type: 'delivery',
      title: t('updates.inRoute'),
      message: t('updates.inRouteMessage', { driver: 'Ahmed B.', quantity: 5, time: '15 minutes' }),
      time: t('updates.timeAgo.minutesPlural', { count: 5 }),
      orderId: 1,
      read: false,
      icon: <Navigation size={24} />
    },
    {
      id: 2,
      type: 'delivered',
      title: t('updates.delivered'),
      message: t('updates.deliveredMessage', { quantity: 3 }),
      time: t('updates.timeAgo.hoursPlural', { count: 2 }),
      orderId: 2,
      read: true,
      icon: <CheckCircle size={24} />
    },
    {
      id: 3,
      type: 'confirmed',
      title: t('updates.confirmed'),
      message: t('updates.confirmedMessage', { quantity: 5 }),
      time: t('updates.timeAgo.yesterday'),
      orderId: 3,
      read: true,
      icon: <Package size={24} />
    },
    {
      id: 4,
      type: 'driver',
      title: t('updates.driverAssigned'),
      message: t('updates.driverAssignedMessage', { driver: 'Mohamed K.' }),
      time: t('updates.timeAgo.days', { count: 1 }),
      orderId: 4,
      read: true,
      icon: <CheckCircle size={24} />
    }
  ]

  const handleNotificationClick = (notification) => {
    if (notification.orderId) {
      // Navigate to home and show order details
      navigate('/client/home')
      // In a real app, you would pass the orderId and show order details
      setTimeout(() => {
        setNotificationData({
          message: `Commande #${notification.orderId}\n\n${notification.message}`,
          type: 'info'
        })
        setShowNotification(true)
      }, 100)
    }
  }

  return (
    <div className="updates-page">
      <div className="updates-header">
        <h1 className="page-title">
          <Bell size={24} />
          {t('updates.title')}
        </h1>
      </div>

      <div className="scrollable-content">
        {notifications.length === 0 ? (
          <div className="empty-state">
            <Bell size={64} color="#7F8C8D" />
            <p className="empty-text">{t('updates.noNotifications')}</p>
          </div>
        ) : (
          <div className="notifications-list">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`notification-card card ${!notification.read ? 'unread' : ''}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="notification-icon">
                  {notification.icon}
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h4 className="notification-title">{notification.title}</h4>
                    {!notification.read && <span className="unread-dot"></span>}
                  </div>
                  <p className="notification-message">{notification.message}</p>
                  <div className="notification-footer">
                    <span className="notification-time">{notification.time}</span>
                    {notification.orderId && (
                      <span 
                        className="view-order"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNotificationClick(notification)
                        }}
                      >
                        {t('updates.viewOrder')}
                        <ArrowRight size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showNotification && notificationData && (
        <NotificationCard
          message={notificationData.message}
          type={notificationData.type}
          onClose={() => {
            setShowNotification(false)
            setNotificationData(null)
          }}
          duration={5000}
        />
      )}
    </div>
  )
}

export default UpdatesPage

