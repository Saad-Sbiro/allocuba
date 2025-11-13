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

  // Sync animatingTab with activeTab and force animation restart
  useEffect(() => {
    if (activeTab !== animatingTab) {
      // Remove active class from all items to force animation restart
      const navItems = navRef.current?.querySelectorAll('.nav-item')
      navItems?.forEach(item => {
        item.classList.remove('active')
      })
      
      // Re-add active class immediately to trigger animation
      setAnimatingTab(activeTab)
      const targetItem = Array.from(navItems || []).find((item, index) => {
        if (activeTab === 'home' && index === 0) return true
        if (activeTab === 'orders' && index === 1) return true
        if (activeTab === 'profile' && index === 2) return true
        return false
      })
      if (targetItem) {
        // Use setTimeout with 0 to ensure DOM update happens
        setTimeout(() => {
          targetItem.classList.add('active')
        }, 0)
      }
    }
  }, [activeTab, animatingTab])

  const handleClick = (tab) => {
    // Remove active class immediately
    const navItems = navRef.current?.querySelectorAll('.nav-item')
    navItems?.forEach(item => {
      item.classList.remove('active')
    })
    
    setAnimatingTab(tab)
    
    // Add active class immediately to trigger animation
    const targetItem = Array.from(navItems || []).find((item, index) => {
      if (tab === 'home' && index === 0) return true
      if (tab === 'orders' && index === 1) return true
      if (tab === 'profile' && index === 2) return true
      return false
    })
    if (targetItem) {
      setTimeout(() => {
        targetItem.classList.add('active')
      }, 0)
    }
    
    // Trigger navigation
    onNavClick(tab)
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

