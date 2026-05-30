import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardRoute } from './modules/dashboard/routers/Dashboard.route.tsx'
import App from './App.tsx'
import { LoginpRoute } from './modules/auth/routers/Login.route.tsx'
import { RegisterRoute } from './modules/auth/routers/Register.route.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...LoginpRoute,
      ...RegisterRoute,
      ...DashboardRoute
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
