import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'tachyons'
import Regiok from './regiok'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Regiok />
  </StrictMode>,
)
