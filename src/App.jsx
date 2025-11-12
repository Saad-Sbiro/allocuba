import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import SplashScreen from './screens/SplashScreen'
import SignUpPage from './screens/SignUpPage'
import LanguageSelectionPage from './screens/LanguageSelectionPage'
import ClientHome from './screens/ClientHome'
import OrderPage from './screens/OrderPage'
import DriverPage from './screens/DriverPage'
import UpdatesPage from './screens/UpdatesPage'
import ProfilePage from './screens/ProfilePage'
import DriverProfile from './screens/DriverProfile'
import DriverUpdatesPage from './screens/DriverUpdatesPage'
import SettingsPage from './screens/SettingsPage'
import BottomNavigation from './components/BottomNavigation'

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const scrollToTop = () => {
      // Scroll window
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
      
      // Scroll document body and html
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      if (document.body) {
        document.body.scrollTop = 0
      }
      
      // Scroll mobile-container if it exists
      const mobileContainer = document.querySelector('.mobile-container')
      if (mobileContainer) {
        mobileContainer.scrollTop = 0
      }
      
      // Scroll scrollable-content elements
      const scrollableContents = document.querySelectorAll('.scrollable-content')
      scrollableContents.forEach(element => {
        element.scrollTop = 0
      })
    }
    
    // Use requestAnimationFrame for smooth execution
    requestAnimationFrame(() => {
      scrollToTop()
    })
  }, [pathname])

  return null
}

// Navigation Controller Component
const NavigationController = ({ userRole }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')
  
  // Don't show navigation on splash/signup/settings pages
  const shouldShowNav = location.pathname !== '/' && 
    location.pathname !== '/signup' && 
    !location.pathname.includes('/signup/') &&
    !location.pathname.includes('/settings')
  
  // Update active tab based on current route
  useEffect(() => {
    const path = location.pathname
    if (path.includes('/home')) {
      setActiveTab('home')
    } else if (path.includes('/updates')) {
      setActiveTab('orders')
    } else if (path.includes('/profile')) {
      setActiveTab('profile')
    } else if (path.includes('/order')) {
      setActiveTab('home') // Keep home active when ordering
    }
  }, [location])
  
  const handleNavClick = (tab) => {
    setActiveTab(tab)
    const basePath = userRole === 'driver' ? '/driver' : '/client'
    
    if (tab === 'home') {
      navigate(`${basePath}/home`)
    } else if (tab === 'orders') {
      navigate(`${basePath}/updates`)
    } else if (tab === 'profile') {
      navigate(`${basePath}/profile`)
    }
  }
  
  if (!shouldShowNav) return null
  
  return (
    <BottomNavigation 
      activeTab={activeTab} 
      onNavClick={handleNavClick} 
      hasNotifications={true}
      middleTabLabel={null}
    />
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null) // 'client' or 'driver'

  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} setUserRole={setUserRole} />} />
          <Route path="/signup/language" element={<LanguageSelectionPage setUser={setUser} setUserRole={setUserRole} />} />
          <Route path="/client/home" element={<ClientHome user={user} />} />
          <Route path="/client/order" element={<OrderPage />} />
          <Route path="/client/updates" element={<UpdatesPage />} />
          <Route path="/client/profile" element={<ProfilePage user={user} />} />
          <Route path="/client/settings" element={<SettingsPage userRole="client" />} />
          <Route path="/driver/home" element={<DriverPage />} />
          <Route path="/driver/updates" element={<DriverUpdatesPage />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          <Route path="/driver/settings" element={<SettingsPage userRole="driver" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      {/* Bottom Navigation - Rendered outside mobile-container */}
      <NavigationController userRole={userRole} />
    </LanguageProvider>
  )
}

export default App

