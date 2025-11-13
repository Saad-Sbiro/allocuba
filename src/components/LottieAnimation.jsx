import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import ErrorBoundary from './ErrorBoundary'
import './LottieAnimation.css'

const LottieAnimation = ({ 
  src, 
  className = '', 
  loop = true, 
  autoplay = true,
  style = {},
  onComplete,
  speed = 1
}) => {
  const handleComplete = () => {
    if (onComplete) {
      onComplete()
    }
  }

  if (!src) {
    return null
  }

  return (
    <ErrorBoundary fallback={null}>
      <div className={`lottie-container ${className}`} style={style}>
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={autoplay}
          onComplete={handleComplete}
          speed={speed}
        />
      </div>
    </ErrorBoundary>
  )
}

export default LottieAnimation

