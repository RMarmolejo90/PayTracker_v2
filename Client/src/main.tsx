import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import PayTracker from './pages/PayTracker.tsx'
import Dev from './pages/Dev.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
