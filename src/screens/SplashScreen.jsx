import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import logo from '../logoll.png'
import LottieAnimation from '../components/LottieAnimation'
import { LOTTIE_ANIMATIONS } from '../config/lottieAnimations'
import './SplashScreen.css'

const SplashScreen = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2500
    const interval = 50
    const increment = (100 / duration) * interval

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + increment
      })
    }, interval)

    const timer = setTimeout(() => {
      navigate('/signup')
    }, duration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [navigate])

  return (
    <div className="splash-screen">
      <div className="splash-background"></div>
      <div className="splash-content">
        <h1 className="splash-title">{t('splash.title')}</h1>
        <p className="splash-tagline">
          {t('splash.tagline')}
        </p>
        <div className="loader-container">
          <div className="loader-wrapper">
            <LottieAnimation
              src={LOTTIE_ANIMATIONS.splashLoader}
              className="splash-loader-animation"
              style={{ width: '200px', height: '200px' }}
              loop={true}
              autoplay={true}
            />
            <div className="loader-percentage">{Math.round(progress)}%</div>
          </div>
        </div>
        <div className="loader-logo-bottom">
          <img src={logo} alt="Allocuba" className="bottom-logo" />
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

