import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Package, CheckCircle, Navigation, User, Phone, AlertTriangle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../logoll.png'
import NotificationCard from '../components/NotificationCard'
import DriverReportModal from '../components/DriverReportModal'
import './DriverPage.css'

const DriverPage = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const touchStartTime = React.useRef(null)
  const isQuickTap = React.useRef(false)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [reportOrderId, setReportOrderId] = useState(null)
  const [reportClientName, setReportClientName] = useState('')
  
  // Count unread notifications (in a real app, this would come from state/API)
  // DriverUpdatesPage has 2 unread notifications
  const unreadCount = 2

  const availableOrders = [
    {
      id: 1,
      clientName: 'Saad A.',
      quantity: 5,
      type: t('waterTypes.tantan'),
      distance: '2.5 km',
      address: 'Quartier Al Massira, Laayoune',
      phone: '+212 6XX XXX XXX',
      estimatedTime: '15 min'
    },
    {
      id: 2,
      clientName: 'Fatima B.',
      quantity: 3,
      type: t('waterTypes.filtered'),
      distance: '3.8 km',
      address: 'Hay Al Wahda, Laayoune',
      phone: '+212 6XX XXX XXX',
      estimatedTime: '20 min'
    },
    {
      id: 3,
      clientName: 'Mohamed C.',
      quantity: 4,
      type: t('waterTypes.tantan'),
      distance: '1.2 km',
      address: 'Centre-ville, Laayoune',
      phone: '+212 6XX XXX XXX',
      estimatedTime: '8 min'
    }
  ]

  const activeDeliveries = [
    {
      id: 4,
      clientName: 'Hassan D.',
      quantity: 6,
      type: t('waterTypes.filtered'),
      address: 'Hay Al Amal, Laayoune',
      status: t('driver.inRoute')
    }
  ]

  const handleStartDelivery = (order) => {
    // Only execute if it was a quick tap (not a long press)
    if (!isQuickTap.current && touchStartTime.current) {
      return
    }
    setSelectedOrder(order)
    // In a real app, this would update the order status
    isQuickTap.current = false
  }

  const handleMarkDelivered = (orderId) => {
    // Only execute if it was a quick tap (not a long press)
    if (!isQuickTap.current && touchStartTime.current) {
      return
    }
    // In a real app, this would mark the order as delivered
    setShowNotification(true)
    isQuickTap.current = false
  }

  const handleReportIssue = (orderId, clientName) => {
    setReportOrderId(orderId)
    setReportClientName(clientName)
    setShowReportModal(true)
  }

  const handleSubmitReport = (reportData) => {
    // In a real app, this would send the report to the backend
    console.log('Report submitted:', reportData)
    // Show success notification
    setShowNotification(true)
    setShowReportModal(false)
    setReportOrderId(null)
    setReportClientName('')
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
      // onClick will handle the action
    } else {
      isQuickTap.current = false
    }
    touchStartTime.current = null
  }

  return (
    <div className="driver-page">
      <div className="driver-header">
        <h1 className="driver-greeting">{t('driver.greeting')}</h1>
        <p className="driver-subtitle">{t('driver.subtitle')}</p>
      </div>

      <div className="scrollable-content">
        {activeDeliveries.length > 0 && (
          <div className="section">
            <h3 className="section-title active-deliveries">
              <Navigation size={20} />
              {t('driver.activeDeliveries')}
            </h3>
            {activeDeliveries.map(order => (
              <div key={order.id} className="delivery-card card active">
                <div className="delivery-header">
                  <div className="delivery-info">
                    <h4 className="delivery-client">{order.clientName}</h4>
                    <p className="delivery-details">{order.quantity} {t('driver.tonnes')} - {order.type}</p>
                  </div>
                  <span className="status-badge status-en-cours">{t('driver.inRoute')}</span>
                </div>
                <div className="delivery-address">
                  <MapPin size={16} />
                  <span>{order.address}</span>
                </div>
                <div className="delivery-actions">
                  <button
                    className="btn btn-secondary report-btn"
                    onClick={() => handleReportIssue(order.id, order.clientName)}
                  >
                    <AlertTriangle size={18} />
                    <span>{t('driver.reportIssue')}</span>
                  </button>
                  <button
                    className="btn btn-primary delivery-btn"
                    onClick={() => handleMarkDelivered(order.id)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <CheckCircle size={20} />
                    <span>{t('driver.markDelivered')}</span>
                    <img src={logo} alt="Allocuba" className="btn-logo-moving" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="section">
          <h3 className="section-title">
            <Package size={20} />
            {t('driver.availableOrders')}
          </h3>
          {availableOrders.map(order => (
            <div key={order.id} className="order-offer-card card">
              <div className="offer-header">
                <div className="offer-info">
                  <div className="client-avatar">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="offer-client">{order.clientName}</h4>
                    <p className="offer-details">{order.quantity} {t('driver.tonnes')} - {order.type}</p>
                  </div>
                </div>
                <div className="offer-distance">
                  <Navigation size={20} />
                  <span>{order.distance}</span>
                </div>
              </div>
              <div className="offer-details-list">
                <div className="offer-detail-item">
                  <MapPin size={16} />
                  <span>{order.address}</span>
                </div>
                <div className="offer-detail-item">
                  <span>⏱️ {order.estimatedTime}</span>
                </div>
                <div className="offer-detail-item">
                  <Phone size={16} />
                  <a href={`tel:${order.phone}`} className="phone-link-text">{order.phone}</a>
                </div>
              </div>
              <button
                className="btn btn-primary btn-full offer-btn"
                onClick={() => handleStartDelivery(order)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <span>{t('driver.startDelivery')}</span>
                <img src={logo} alt="Allocuba" className="btn-logo-moving" />
              </button>
            </div>
          ))}
        </div>

        <div className="map-section">
          <h3 className="section-title">
            <MapPin size={20} />
            {t('driver.ordersMap')}
          </h3>
          <div className="map-placeholder large">
            <MapPin size={48} color="#4A90E2" />
            <p>{t('driver.mapDescription')}</p>
            <p className="map-hint">{t('driver.mapHint')}</p>
          </div>
        </div>
      </div>

      {showNotification && (
        <NotificationCard
          message={t('driver.markDeliveredSuccess')}
          type="success"
          onClose={() => setShowNotification(false)}
          duration={4000}
        />
      )}

      <DriverReportModal
        isOpen={showReportModal}
        onClose={() => {
          setShowReportModal(false)
          setReportOrderId(null)
          setReportClientName('')
        }}
        onReport={handleSubmitReport}
        orderId={reportOrderId}
        clientName={reportClientName}
      />
    </div>
  )
}

export default DriverPage

