import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {} from 'bootstrap/dist/css/bootstrap.min.css'
import {} from 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
