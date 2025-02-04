import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import './index.css'

import NavBar from './NavBar.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import Store from './pages/Store.jsx'
import ErrorPage from './Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Navigate to="home" /> },
      { path: "about", element: <AboutUs /> },
      { path: "cart", element: <Cart /> },
      { path: "home", element: <Home /> },
      { path: "store", element: <Store /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
