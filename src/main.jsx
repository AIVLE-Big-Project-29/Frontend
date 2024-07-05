import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebvitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import RootLayout from './components/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import Results from './components/Results/MainContent.jsx';

// 루트 경로 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
       path: '/Results',
       element: <Results />,
       errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
