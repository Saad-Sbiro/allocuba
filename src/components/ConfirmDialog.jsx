import React, { useEffect } from 'react'
import { AlertTriangle, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './ConfirmDialog.css'

const ConfirmDialog = ({ message, onConfirm, onCancel, confirmText = null, cancelText = null }) => {
  const { t } = useLanguage()
  
  // Prevent background scrolling when dialog is open
  useEffect(() => {
    // Save current scroll positions
    const scrollY = window.scrollY
    const scrollX = window.scrollX
    
    // Lock body scroll
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = `-${scrollX}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    
    // Also lock mobile-container and scrollable-content
    const mobileContainer = document.querySelector('.mobile-container')
    const scrollableContents = document.querySelectorAll('.scrollable-content')
    
    let mobileContainerScrollTop = 0
    if (mobileContainer) {
      mobileContainerScrollTop = mobileContainer.scrollTop
      mobileContainer.style.overflow = 'hidden'
      mobileContainer.style.position = 'fixed'
      mobileContainer.style.top = `-${mobileContainerScrollTop}px`
      mobileContainer.style.width = '100%'
    }
    
    scrollableContents.forEach(element => {
      element.style.overflow = 'hidden'
    })
    
    // Cleanup: restore scroll when dialog closes
    return () => {
      // Restore body styles
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      
      // Restore scroll position
      window.scrollTo(scrollX, scrollY)
      
      // Restore mobile container
      if (mobileContainer) {
        mobileContainer.style.overflow = ''
        mobileContainer.style.position = ''
        mobileContainer.style.top = ''
        mobileContainer.style.width = ''
        // Restore scroll position after a brief delay to ensure styles are reset
        requestAnimationFrame(() => {
          mobileContainer.scrollTop = mobileContainerScrollTop
        })
      }
      
      // Restore scrollable contents
      scrollableContents.forEach(element => {
        element.style.overflow = ''
      })
    }
  }, [])
  
  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <div className="confirm-dialog-header">
          <div className="confirm-dialog-icon">
            <AlertTriangle size={32} />
          </div>
          <button className="confirm-dialog-close" onClick={onCancel}>
            <X size={20} />
          </button>
        </div>
        <div className="confirm-dialog-content">
          <h3 className="confirm-dialog-title">{t('common.confirm')}</h3>
          <p className="confirm-dialog-message">{message}</p>
        </div>
        <div className="confirm-dialog-actions">
          <button className="btn btn-secondary confirm-dialog-cancel" onClick={onCancel}>
            {cancelText || t('confirmDialog.cancel')}
          </button>
          <button className="btn btn-primary confirm-dialog-confirm" onClick={onConfirm}>
            {confirmText || t('common.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog



