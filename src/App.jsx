import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import SplashScreen from './screens/SplashScreen'
import SignUpPage from './screens/SignUpPage'
import ClientHome from './screens/ClientHome'
import OrderPage from './screens/OrderPage'
import DriverPage from './screens/DriverPage'
import UpdatesPage from './screens/UpdatesPage'
import ProfilePage from './screens/ProfilePage'
import DriverProfile from './screens/DriverProfile'
import DriverUpdatesPage from './screens/DriverUpdatesPage'
import BottomNavigation from './components/BottomNavigation'

// Navigation Controller Component
const NavigationController = ({ userRole }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')
  
  // Don't show navigation on splash/signup pages
  const shouldShowNav = location.pathname !== '/' && location.pathname !== '/signup'
  
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
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} setUserRole={setUserRole} />} />
          <Route path="/client/home" element={<ClientHome user={user} />} />
          <Route path="/client/order" element={<OrderPage />} />
          <Route path="/client/updates" element={<UpdatesPage />} />
          <Route path="/client/profile" element={<ProfilePage user={user} />} />
          <Route path="/driver/home" element={<DriverPage />} />
          <Route path="/driver/updates" element={<DriverUpdatesPage />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      {/* Bottom Navigation - Rendered outside mobile-container */}
      <NavigationController userRole={userRole} />
    </LanguageProvider>
  )
}

export default App

