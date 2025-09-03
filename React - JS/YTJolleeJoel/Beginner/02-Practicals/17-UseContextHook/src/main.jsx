import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Createac from './Createac'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from './PageNotFound';
import Counter from './Counter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: '/signup',
    element: <Createac />
  },
  {
    path: "/counter",
    element: <Counter />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
