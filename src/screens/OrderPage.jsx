import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, CheckCircle, ArrowLeft, ArrowRight, Navigation } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../logoll.png'
import './OrderPage.css'

const OrderPage = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const touchStartTime = React.useRef(null)
  const isQuickTap = React.useRef(false)
  const [currentStep, setCurrentStep] = useState(1) // 1: Quantity & Type, 2: Location, 3: Summary
  const [quantity, setQuantity] = useState(3)
  const [waterType, setWaterType] = useState('tantan')
  const [deliveryTime, setDeliveryTime] = useState('30-45 min')
  const [isDetectingLocation, setIsDetectingLocation] = useState(false)
  const [address, setAddress] = useState('Ain awda, Laayoune, Maroc')

  const handleDetectLocation = () => {
    setIsDetectingLocation(true)
    // Simulate location detection
    setTimeout(() => {
      setIsDetectingLocation(false)
      setAddress('Position mise à jour')
      // In a real app, this would use the Geolocation API
      // navigator.geolocation.getCurrentPosition((position) => {
      //   // Handle location
      // })
    }, 1500)
  }

  const handleConfirm = (e) => {
    // Only execute if it was a quick tap (not a long press)
    if (!isQuickTap.current && touchStartTime.current) {
      return
    }
    const button = e?.currentTarget || document.querySelector('.confirm-btn')
    if (button) {
      button.classList.add('touched')
    }
    setTimeout(() => {
      // In a real app, this would submit the order
      // Navigate to home with notification state
      navigate('/client/home', { state: { showOrderNotification: true } })
    }, 650)
    isQuickTap.current = false
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
      // onClick will handle the confirmation
    } else {
      isQuickTap.current = false
    }
    touchStartTime.current = null
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      navigate('/client/home')
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="order-section">
              <h3 className="section-title">
                <img src={logo} alt="Allocuba" className="section-logo" />
                {t('order.quantity')}
              </h3>
              <div className="quantity-selector">
                <div className="quantity-display">
                  <span className="quantity-number">{quantity}</span>
                  <span className="quantity-label">{t('order.tonnes')}</span>
                </div>
                <div className="slider-wrapper">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="quantity-slider"
                    id="quantity-slider"
                  />
                  <img 
                    src={logo} 
                    alt="Allocuba" 
                    className="slider-thumb-logo"
                    style={{
                      left: `calc(${((quantity - 1) / 9) * 100}% - 16px)`
                    }}
                  />
                </div>
                <div className="quantity-labels">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            <div className="order-section">
              <h3 className="section-title">
                <img src={logo} alt="Allocuba" className="section-logo" />
                {t('order.waterType')}
              </h3>
              <div className="water-type-selector">
                <button
                  className={`water-type-card ${waterType === 'tantan' ? 'active' : ''}`}
                  onClick={() => setWaterType('tantan')}
                >
                  <div className="water-type-icon">
                    <img src={logo} alt="Allocuba" className="water-type-logo" />
                  </div>
                  <h4 className="water-type-name">{t('waterTypes.tantan')}</h4>
                  <p className="water-type-price">{t('waterTypes.pricePerTonne')}</p>
                  <p className="water-type-breakdown">{t('waterTypes.fixedFee')}</p>
                </button>
                <button
                  className={`water-type-card ${waterType === 'filtered' ? 'active' : ''}`}
                  onClick={() => setWaterType('filtered')}
                >
                  <div className="water-type-icon">
                    <img src={logo} alt="Allocuba" className="water-type-logo" />
                  </div>
                  <h4 className="water-type-name">{t('waterTypes.filtered')}</h4>
                  <p className="water-type-price">{t('waterTypes.pricePerTonne')}</p>
                  <p className="water-type-breakdown">{t('waterTypes.fixedFee')}</p>
                </button>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <div className="order-section">
            <h3 className="section-title">
              <MapPin size={20} />
              {t('order.deliveryAddress')}
            </h3>
            <div className="map-placeholder">
              <MapPin size={48} color="#4A90E2" />
              <p>{t('order.interactiveMap')}</p>
              <p className="map-hint">{t('order.currentLocation')}</p>
              <button className="btn btn-secondary map-select-btn">
                {t('order.chooseAddress')}
              </button>
            </div>
            <div className="address-info">
              <div className="address-header">
                <p className="address-text">{t('order.currentAddress')}</p>
                <button 
                  className="detect-location-btn"
                  onClick={handleDetectLocation}
                  disabled={isDetectingLocation}
                >
                  <Navigation size={18} />
                  {isDetectingLocation ? t('order.detecting') : t('order.detectLocation')}
                </button>
              </div>
              <p className="address-details">{address}</p>
            </div>
          </div>
        )
      case 3:
        return (
          <>
            <div className="order-summary card">
              <h3 className="summary-title">{t('order.orderSummary')}</h3>
              <div className="summary-row">
                <span>{t('order.quantity')}</span>
                <span>{quantity} {t('order.tonnes')}</span>
              </div>
              <div className="summary-row">
                <span>{t('order.waterType')}</span>
                <span>{waterType === 'tantan' ? t('waterTypes.tantan') : t('waterTypes.filtered')}</span>
              </div>
              <div className="summary-row">
                <span>{t('order.unitPrice')}</span>
                <span>{t('waterTypes.pricePerTonne')}</span>
              </div>
              <div className="summary-row">
                <span>{t('order.water')} ({quantity} {t('order.tonnes')} × 40 MAD)</span>
                <span>{quantity * 40} MAD</span>
              </div>
              <div className="summary-row">
                <span>{t('order.serviceFee')}</span>
                <span>5 MAD</span>
              </div>
              <div className="summary-row total">
                <span>{t('order.total')}</span>
                <span>{(quantity * 40) + 5} MAD</span>
              </div>
              <div className="delivery-time">
                <CheckCircle size={16} />
                <span>{t('order.estimatedDelivery')}: {deliveryTime}</span>
              </div>
            </div>

            <button 
              className="btn btn-primary btn-full confirm-btn" 
              onClick={handleConfirm}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <span>{t('order.confirmOrder')}</span>
              <img src={logo} alt="Allocuba" className="btn-logo-moving" />
            </button>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="order-page">
      <div className="order-header">
        <button className="back-btn" onClick={handleBack}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="page-title">{t('order.title')}</h2>
      </div>

      {/* Step Indicators */}
      <div className="step-indicators">
        <div className={`step-indicator ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">{t('order.step1')}</div>
        </div>
        <div className={`step-line ${currentStep > 1 ? 'active' : ''}`}></div>
        <div className={`step-indicator ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">{t('order.step2')}</div>
        </div>
        <div className={`step-line ${currentStep > 2 ? 'active' : ''}`}></div>
        <div className={`step-indicator ${currentStep >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">{t('order.step3')}</div>
        </div>
      </div>

      <div className="scrollable-content">
        {renderStepContent()}

        {/* Navigation Buttons */}
        {currentStep < 3 && (
          <button 
            className="btn btn-primary btn-full next-btn" 
            onClick={handleNext}
          >
            <span>{t('common.next')}</span>
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  )
}

export default OrderPage

