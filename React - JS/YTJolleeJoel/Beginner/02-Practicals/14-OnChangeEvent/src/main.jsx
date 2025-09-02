import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Createac from './Createac'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Createac />
  </StrictMode>,
)
