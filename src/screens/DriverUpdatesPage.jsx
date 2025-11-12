import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, CheckCircle, Package, ArrowRight, Navigation, DollarSign, Calendar, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './DriverUpdatesPage.css'

const DriverUpdatesPage = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const notifications = [
    {
      id: 1,
      type: 'payment',
      title: t('driverUpdates.paymentDay'),
      message: t('driverUpdates.paymentDayMessage', { amount: 450 }),
      time: t('driverUpdates.timeAgo.hoursPlural', { count: 2 }),
      read: false,
      icon: <DollarSign size={24} />,
      urgent: true
    },
    {
      id: 2,
      type: 'delivery',
      title: t('driverUpdates.newOrderAvailable'),
      message: t('driverUpdates.newOrderMessage', { quantity: 5 }),
      time: t('driverUpdates.timeAgo.minutesPlural', { count: 30 }),
      read: false,
      icon: <Package size={24} />
    },
    {
      id: 3,
      type: 'reminder',
      title: t('driverUpdates.weeklyPaymentReminder'),
      message: t('driverUpdates.weeklyPaymentMessage'),
      time: t('driverUpdates.timeAgo.yesterday'),
      read: true,
      icon: <Calendar size={24} />
    },
    {
      id: 4,
      type: 'completed',
      title: t('driverUpdates.deliveryCompleted'),
      message: t('driverUpdates.deliveryCompletedMessage', { count: 3 }),
      time: t('driverUpdates.timeAgo.days', { count: 1 }),
      read: true,
      icon: <CheckCircle size={24} />
    },
    {
      id: 5,
      type: 'alert',
      title: t('driverUpdates.importantMeeting'),
      message: t('driverUpdates.meetingMessage', { time: '10h00' }),
      time: t('driverUpdates.timeAgo.daysPlural', { count: 2 }),
      read: true,
      icon: <AlertCircle size={24} />
    }
  ]

  const handleNotificationClick = (notification) => {
    if (notification.type === 'delivery') {
      navigate('/driver/home')
    }
  }

  return (
    <div className="driver-updates-page">
      <div className="driver-updates-header">
        <h1 className="page-title">
          <Bell size={24} />
          {t('driverUpdates.title')}
        </h1>
      </div>

      <div className="scrollable-content">
        {notifications.length === 0 ? (
          <div className="empty-state">
            <Bell size={64} color="#7F8C8D" />
            <p className="empty-text">{t('driverUpdates.noNotifications')}</p>
          </div>
        ) : (
          <div className="notifications-list">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`notification-card card ${!notification.read ? 'unread' : ''} ${notification.urgent ? 'urgent' : ''}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="notification-icon">
                  {notification.icon}
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h4 className="notification-title">{notification.title}</h4>
                    {!notification.read && !notification.urgent && <span className="unread-dot"></span>}
                    {notification.urgent && <span className="urgent-badge">{t('driverUpdates.urgent')}</span>}
                  </div>
                  <p className="notification-message">{notification.message}</p>
                  <div className="notification-footer">
                    <span className="notification-time">{notification.time}</span>
                    {notification.type === 'delivery' && (
                      <span 
                        className="view-order"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNotificationClick(notification)
                        }}
                      >
                        {t('driverUpdates.viewOrders')}
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
    </div>
  )
}

export default DriverUpdatesPage

