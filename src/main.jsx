import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import SignUp from './routes/SignUp.jsx';
import SignIn from './routes/SignIn.jsx';
import { loader as MagicQuoteLoader } from './components/MagicQuote.jsx';
import Quote from './routes/Quotes.jsx';
import ProtectedRuote from './routes/ProtectedRuote.jsx';
import Root from './components/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: MagicQuoteLoader,
      },
      {
        path: '/',
        element: <ProtectedRuote />,
        children: [
          {
            path: '/Quotes/:username',
            element: <Quote />,
            loader: MagicQuoteLoader,
          }
        ]
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/SignIn',
        element: <SignIn />
      },
      {
        path: "*",
        element: <SignIn />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
