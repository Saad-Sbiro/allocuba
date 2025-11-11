import React, { useRef, useState, useEffect } from 'react'
import { Home, Bell, User } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './BottomNavigation.css'

const BottomNavigation = ({ activeTab, onNavClick, hasNotifications = false, middleTabLabel = null }) => {
  const navRef = useRef(null)
  const { t, language } = useLanguage()
  const [animatingTab, setAnimatingTab] = useState(activeTab)
  
  // Determine middle tab label based on user role if not provided
  const getMiddleTabLabel = () => {
    if (middleTabLabel) return middleTabLabel
    // Default to orders/notifications based on context
    return language === 'ar' ? t('navigation.orders') : t('navigation.orders')
  }

  // Sync animatingTab with activeTab after a small delay for smooth animation
  useEffect(() => {
    if (activeTab !== animatingTab) {
      let timeoutId
      // Use requestAnimationFrame for smooth start
      const rafId = requestAnimationFrame(() => {
        // Small delay to allow click feedback to complete first
        timeoutId = setTimeout(() => {
          setAnimatingTab(activeTab)
        }, 20) // ~1-2 frame delay for smooth transition
      })
      return () => {
        cancelAnimationFrame(rafId)
        if (timeoutId) clearTimeout(timeoutId)
      }
    }
  }, [activeTab, animatingTab])

  const handleClick = (tab) => {
    // Immediate visual feedback - update state right away
    setAnimatingTab(tab)
    // Trigger navigation on next frame for smoothness
    requestAnimationFrame(() => {
      onNavClick(tab)
    })
  }

  return (
    <div className="bottom-nav" ref={navRef}>
      <div 
        className={`nav-item ${animatingTab === 'home' ? 'active' : ''}`}
        onClick={() => handleClick('home')}
        style={{ order: 1 }}
      >
        <Home size={24} />
        <span className="nav-label">{t('navigation.home')}</span>
      </div>
      <div 
        className={`nav-item ${animatingTab === 'orders' ? 'active' : ''}`}
        onClick={() => handleClick('orders')}
        style={{ order: 2 }}
      >
        <div className="nav-icon-wrapper">
          <Bell size={24} />
          {hasNotifications && <span className="notification-badge"></span>}
        </div>
        <span className="nav-label">{middleTabLabel || (language === 'ar' ? t('navigation.orders') : t('navigation.orders'))}</span>
      </div>
      <div 
        className={`nav-item ${animatingTab === 'profile' ? 'active' : ''}`}
        onClick={() => handleClick('profile')}
        style={{ order: 3 }}
      >
        <User size={24} />
        <span className="nav-label">{t('navigation.profile')}</span>
      </div>
    </div>
  )
}

export default BottomNavigation

