import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './App.tsx'
import './index.css'
import Privacy from './Privacy.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/privacy', element: <Privacy /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
