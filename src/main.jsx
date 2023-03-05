import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './components/pages/Store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/pages/Success';
import Cancel from './components/pages/Cancel';
import App from './App';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/store',
        element: <Store />
      },
      {
        path: "/success",
        element: <Success />
      },
      {
        path: "/cancel",
        element: <Cancel />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
