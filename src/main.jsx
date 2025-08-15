import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import { lazy, Suspense } from "react";
import './index.css'
import App from './App.jsx'
const Homepage = lazy(() => import('./pages/Homepage.jsx'));
import { store } from './app/store'
import { Provider } from 'react-redux'
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>,
)