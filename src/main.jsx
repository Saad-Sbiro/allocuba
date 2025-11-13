import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeColorProvider } from './context/ThemeColorContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ThemeColorProvider>
        <App />
        </ThemeColorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

