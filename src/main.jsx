import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import PageNotFound from './Pages/Page Not Found'
import Signup from './Pages/Signup'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
