import React, { useState, useEffect } from 'react'
import { X, AlertTriangle, PhoneOff, MapPin, Clock, UserX, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './DriverReportModal.css'

const DriverReportModal = ({ isOpen, onClose, onReport, orderId, clientName }) => {
  const { t } = useLanguage()
  const [selectedIssue, setSelectedIssue] = useState('')
  const [description, setDescription] = useState('')

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return

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
    
    // Cleanup: restore scroll when modal closes
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
  }, [isOpen])

  const reportReasons = [
    {
      id: 'no_answer',
      icon: PhoneOff,
      label: t('driverReport.noAnswer'),
      description: t('driverReport.noAnswerDesc')
    },
    {
      id: 'wrong_address',
      icon: MapPin,
      label: t('driverReport.wrongAddress'),
      description: t('driverReport.wrongAddressDesc')
    },
    {
      id: 'client_not_available',
      icon: Clock,
      label: t('driverReport.clientNotAvailable'),
      description: t('driverReport.clientNotAvailableDesc')
    },
    {
      id: 'client_refused',
      icon: UserX,
      label: t('driverReport.clientRefused'),
      description: t('driverReport.clientRefusedDesc')
    },
    {
      id: 'other',
      icon: MessageSquare,
      label: t('driverReport.other'),
      description: t('driverReport.otherDesc')
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedIssue) return
    
    onReport({
      orderId,
      clientName,
      reason: selectedIssue,
      description: description.trim() || reportReasons.find(r => r.id === selectedIssue)?.description || ''
    })
    
    // Reset form
    setSelectedIssue('')
    setDescription('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="report-modal-overlay" onClick={onClose}>
      <div className="report-modal" onClick={(e) => e.stopPropagation()}>
        <div className="report-modal-header">
          <div className="report-modal-title-wrapper">
            <AlertTriangle size={24} className="report-icon" />
            <h2 className="report-modal-title">{t('driverReport.title')}</h2>
          </div>
          <button className="report-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="report-modal-content">
          <p className="report-modal-subtitle">
            {t('driverReport.subtitle', { clientName })}
          </p>

          <form onSubmit={handleSubmit} className="report-form">
            <div className="report-issues">
              {reportReasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <button
                    key={reason.id}
                    type="button"
                    className={`report-issue-card ${selectedIssue === reason.id ? 'active' : ''}`}
                    onClick={() => setSelectedIssue(reason.id)}
                  >
                    <div className="report-issue-icon">
                      <Icon size={20} />
                    </div>
                    <div className="report-issue-content">
                      <span className="report-issue-label">{reason.label}</span>
                      <span className="report-issue-desc">{reason.description}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {selectedIssue && (
              <div className="report-description-group">
                <label className="report-description-label">
                  {t('driverReport.additionalDetails')}
                </label>
                <textarea
                  className="report-description-input"
                  placeholder={t('driverReport.descriptionPlaceholder')}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>
            )}

            <div className="report-modal-actions">
              <button
                type="button"
                className="btn btn-secondary report-cancel-btn"
                onClick={onClose}
              >
                {t('confirmDialog.cancel')}
              </button>
              <button
                type="submit"
                className="btn btn-primary report-submit-btn"
                disabled={!selectedIssue}
              >
                {t('driverReport.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DriverReportModal

