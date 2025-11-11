import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Package, User, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'
import logo from '../logoll.png'
import NotificationCard from '../components/NotificationCard'
import './ClientHome.css'

const ClientHome = ({ user }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLanguage()
  const touchStartTime = React.useRef(null)
  const isQuickTap = React.useRef(false)
  const [showOrderNotification, setShowOrderNotification] = React.useState(false)
  
  // Count unread notifications (in a real app, this would come from state/API)
  const unreadCount = 1 // There's 1 unread notification in UpdatesPage

  // Check if we should show order confirmation notification
  useEffect(() => {
    if (location.state?.showOrderNotification) {
      setShowOrderNotification(true)
      // Clear the state to prevent showing again on re-render
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  const orders = [
    {
      id: 1,
      quantity: 5,
      type: t('waterTypes.tantan'),
      status: 'En cours',
      date: '2024-01-15',
      driver: 'Ahmed B.'
    },
    {
      id: 2,
      quantity: 3,
      type: t('waterTypes.filtered'),
      status: 'Livrée',
      date: '2024-01-10',
      driver: 'Mohamed K.'
    },
    {
      id: 3,
      quantity: 4,
      type: t('waterTypes.tantan'),
      status: 'Livrée',
      date: '2024-01-05',
      driver: 'Hassan M.'
    }
  ]

  const driversWithoutApp = [
    { name: 'Youssef A.', phone: '+212 6XX XXX XXX' },
    { name: 'Omar B.', phone: '+212 6XX XXX XXX' },
    { name: 'Ali C.', phone: '+212 6XX XXX XXX' }
  ]

  return (
    <div className="client-home">
      <div className="scrollable-content">
        <div className="home-header">
          <div>
            <h1 className="greeting">
              {t('clientHome.greeting', { name: user?.firstName || t('clientHome.greetingDefault') })}
            </h1>
            <p className="greeting-subtitle">{t('clientHome.subtitle')}</p>
          </div>
          <LanguageToggle />
        </div>

        <div className="main-action-card">
          <div className="action-icon">
            <img src={logo} alt="Allocuba" className="action-logo" />
          </div>
          <h2 className="action-title">{t('clientHome.needWater')}</h2>
          <p className="action-description">{t('clientHome.orderNow')}</p>
          <button 
            className="btn btn-primary btn-full action-btn"
            onClick={(e) => {
              // Only execute if it was a quick tap (not a long press)
              if (isQuickTap.current) {
                e.currentTarget.classList.add('touched');
                setTimeout(() => {
                  navigate('/client/order');
                }, 650);
              }
              isQuickTap.current = false;
            }}
            onTouchStart={() => {
              touchStartTime.current = Date.now();
              isQuickTap.current = false;
            }}
            onTouchEnd={(e) => {
              const touchDuration = touchStartTime.current ? Date.now() - touchStartTime.current : 0;
              // Only trigger if it was a quick tap (< 300ms)
              if (touchDuration < 300 && touchDuration > 0) {
                isQuickTap.current = true;
                e.currentTarget.classList.add('touched');
                // onClick will handle the navigation
              } else {
                isQuickTap.current = false;
              }
              touchStartTime.current = null;
            }}
          >
            <span>{t('clientHome.orderButton')}</span>
            <img src={logo} alt="Allocuba" className="btn-logo-moving" />
          </button>
        </div>

        <div className="section">
          <h3 className="section-title">{t('clientHome.recentOrders')}</h3>
          {orders.map(order => (
            <div key={order.id} className="order-card card">
              <div className="order-header">
                <div className="order-info">
                  <h4 className="order-type">{order.type}</h4>
                  <p className="order-quantity">{order.quantity} tonnes</p>
                </div>
                <span className={`status-badge status-${order.status.toLowerCase().replace(' ', '-')}`}>
                  {order.status === 'En cours' ? t('clientHome.status.inProgress') : t('clientHome.status.delivered')}
                </span>
              </div>
              <div className="order-details">
                <div className="order-detail-item">
                  <MapPin size={16} />
                  <span>{t('clientHome.deliveredBy')} {order.driver}</span>
                </div>
                <div className="order-detail-item">
                  <span className="order-date">{order.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section">
          <h3 className="section-title">{t('clientHome.driversWithoutApp')}</h3>
          <p className="section-subtitle">{t('clientHome.contactDirectly')}</p>
          {driversWithoutApp.map((driver, index) => (
            <div key={index} className="driver-contact-card card">
              <div className="driver-contact-info">
                <div className="driver-avatar">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="driver-name">{driver.name}</h4>
                  <p className="driver-phone">{driver.phone}</p>
                </div>
              </div>
              <a href={`tel:${driver.phone}`} className="phone-link">
                <Phone size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {showOrderNotification && (
        <NotificationCard
          message={t('order.orderConfirmed')}
          type="success"
          onClose={() => setShowOrderNotification(false)}
          duration={3000}
        />
      )}
    </div>
  )
}

export default ClientHome

