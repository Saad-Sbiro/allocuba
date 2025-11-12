import React, { useState, useEffect } from 'react'
import { X, Heart, CreditCard } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './DonationModal.css'

const DonationModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useLanguage()
  const [amount, setAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return

    const scrollY = window.scrollY
    const scrollX = window.scrollX
    
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = `-${scrollX}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    
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
    
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      
      window.scrollTo(scrollX, scrollY)
      
      if (mobileContainer) {
        mobileContainer.style.overflow = ''
        mobileContainer.style.position = ''
        mobileContainer.style.top = ''
        mobileContainer.style.width = ''
        requestAnimationFrame(() => {
          mobileContainer.scrollTop = mobileContainerScrollTop
        })
      }
      
      scrollableContents.forEach(element => {
        element.style.overflow = ''
      })
    }
  }, [isOpen])

  const presetAmounts = [20, 50, 100, 200, 500]

  const handleAmountSelect = (value) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(value)
    if (value) {
      setAmount(parseInt(value) || 0)
    }
  }

  const handleConfirm = () => {
    const finalAmount = customAmount ? parseInt(customAmount) : amount
    if (finalAmount > 0) {
      onConfirm(finalAmount)
      onClose()
    }
  }

  if (!isOpen) return null

  const displayAmount = customAmount ? parseInt(customAmount) || 0 : amount

  return (
    <div className="donation-modal-overlay" onClick={onClose}>
      <div className="donation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="donation-modal-header">
          <div className="donation-modal-title-wrapper">
            <Heart size={24} className="donation-icon" />
            <h2 className="donation-modal-title">{t('donationModal.title')}</h2>
          </div>
          <button className="donation-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="donation-modal-content">
          <p className="donation-modal-subtitle">
            {t('donationModal.subtitle')}
          </p>

          <div className="donation-amount-section">
            <label className="donation-amount-label">
              {t('donationModal.selectAmount')}
            </label>
            
            <div className="preset-amounts">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`preset-amount-btn ${amount === preset && !customAmount ? 'active' : ''}`}
                  onClick={() => handleAmountSelect(preset)}
                >
                  {preset} MAD
                </button>
              ))}
            </div>

            <div className="custom-amount-group">
              <label className="custom-amount-label">
                {t('donationModal.customAmount')}
              </label>
              <div className="custom-amount-input-wrapper">
                <input
                  type="text"
                  className="custom-amount-input"
                  placeholder={t('donationModal.enterAmount')}
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  inputMode="numeric"
                />
                <span className="currency-label">MAD</span>
              </div>
            </div>
          </div>

          <div className="donation-summary">
            <div className="donation-summary-row">
              <span className="donation-summary-label">{t('donationModal.donationAmount')}</span>
              <span className="donation-summary-value">{displayAmount} MAD</span>
            </div>
          </div>

          <div className="donation-modal-actions">
            <button
              type="button"
              className="btn btn-secondary donation-cancel-btn"
              onClick={onClose}
            >
              {t('confirmDialog.cancel')}
            </button>
            <button
              type="button"
              className="btn btn-primary donation-confirm-btn"
              onClick={handleConfirm}
              disabled={displayAmount <= 0}
            >
              <CreditCard size={18} />
              {t('donationModal.confirmDonation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationModal


