import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import { PasswordToggle } from './components/password-toggle-demo/password-toggle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordToggle />
  </StrictMode>,
)
