import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './modules/map/pages/LandingPage'
import { mapPage } from './modules/map/routers/mapPage.router'
import { LoginpRoute } from './modules/auth/routers/Login.route'
import { RegisterRoute } from './modules/auth/routers/Register.route'
import { DashboardRoute } from './modules/dashboard/routers/Dashboard.route'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      ...mapPage,
      ...LoginpRoute,
      ...RegisterRoute,
      ...DashboardRoute
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)