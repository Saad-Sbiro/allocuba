import React, { useEffect } from 'react'
import { CheckCircle, X, Info } from 'lucide-react'
import './NotificationCard.css'

const NotificationCard = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose()
        }
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} />
      case 'info':
        return <Info size={24} />
      default:
        return <CheckCircle size={24} />
    }
  }

  return (
    <div className={`notification-toast notification-toast-${type}`}>
      <div className="notification-toast-content">
        <div className="notification-toast-icon">
          {getIcon()}
        </div>
        <div className="notification-toast-text">
          <p className="notification-toast-message">
            {message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < message.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        <button className="notification-toast-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      <div className="notification-toast-progress"></div>
    </div>
  )
}

export default NotificationCard

