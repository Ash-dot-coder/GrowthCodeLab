import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Createac from './Createac'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from './PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: '/signup',
    element: <Createac />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
