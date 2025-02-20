import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Felhasznalok from './Felhasznalok'
import 'tachyons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Felhasznalok />
  </StrictMode>,
)
