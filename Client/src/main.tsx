import Root from './layouts/Root.tsx'
import Home from './pages/Home.tsx'
import PayTrackerBasic from './pages/PayTrackerBasic.tsx'
import PayTrackerPro from './pages/PayTrackerPro.tsx'
import About from './pages/About.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Login from './pages/Login.tsx'
import Logout from './pages/Logout.tsx'
import Register from './pages/Register.tsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from 'react'
import TrackerContextProvider from './utils/TrackerContext.tsx'
import { AuthProvider } from './utils/AuthContext.tsx'
import PrivateRoute from './utils/PrivateRoute.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Logout",
        element: <Logout />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Register",
        element: <Register />,
        errorElement: <ErrorPage />
      },
      {
        path: "/PayTracker",
        element: <PrivateRoute element={<PayTrackerPro />} />, // Use PrivateRoute for protected route
        errorElement: <ErrorPage />
      },
      {
        path: "/PayTracker/Pro",
        element: <PrivateRoute element={<PayTrackerPro />} />, // Use PrivateRoute for protected route
        errorElement: <ErrorPage />
      },
      {
        path: "/PayTracker/Basic",
        element: <PayTrackerBasic />,
        errorElement: <ErrorPage />
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <ErrorPage />
      },   
    ]
  }, 
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrackerContextProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </TrackerContextProvider>
  </React.StrictMode>,
)
