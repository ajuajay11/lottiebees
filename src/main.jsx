import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import { lazy, Suspense } from "react";
import './index.css'
import App from './App.jsx'
const Homepage = lazy(() => import('./pages/Homepage.jsx'));

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
     { path: "", element: <Homepage /> },
    ]
  }
])

 createRoot(document.getElementById('root')).render(
  <Suspense fallback={'loader....'}>
    <RouterProvider router={router} />
  </Suspense>,
)