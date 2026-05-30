import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// TypeScript may complain about side-effect CSS imports when no module
// declarations exist for '*.css'. Suppress the error here.
// @ts-ignore
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
