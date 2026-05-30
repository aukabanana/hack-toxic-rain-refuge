import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// TypeScript may complain about side-effect CSS imports when no module
// declarations exist for '*.css'. Suppress the error here.
// @ts-ignore
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './modules/map/pages/LandingPage.tsx'
import { mapPage } from './modules/map/routers/mapPage.router.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      ...mapPage
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
