import Home from './pages/Home.tsx'
import PayTracker from './pages/PayTracker.tsx'
import Dev from './pages/Dev.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import './index.css'
import { createRoot } from 'react-dom/client';import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/PayTracker",
    element: <PayTracker />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Dev",
    element: <Dev />,
    errorElement: <ErrorPage />
  },
  
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <ErrorPage />
  },

  
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
