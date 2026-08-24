import React from 'react'
import ReactDOM from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.jsx'
import './index.css'

injectSpeedInsights()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
