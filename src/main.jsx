import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebvitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import './tokens/font.css';

import RootLayout from './components/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import SignUpPage from './components/login/signUp/SignUpPage.jsx';
import MainPage from './components/main/MainPage.jsx';
import Results from './components/Results/MainContent.jsx';
import Notice from './components/notice/Notice.jsx';
import EmailAuth from './components/login/email/EmailAuth.jsx';
import Settings from './components/Settings/Frame.jsx';
import Agreement from './components/login/signUp/AgreementPage.jsx';

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
        path: '/signup',
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: '/main',
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: '/results',
        element: <Results />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: '/notice',
        element: <Notice />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: '/email',
        element: <EmailAuth />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: '/settings',
        element: <Settings />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: '/agreement',
        element: <Agreement />,
        errorElement: <ErrorPage />,
        children: [],
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
