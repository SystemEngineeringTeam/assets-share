import { createBrowserRouter } from 'react-router';
import TopPage from './routes';
import PageLayout from '@/layouts/Page';
import LoginPage from './routes/login';
import CallbackPage from './routes/callback';
import LogoutPage from './routes/logout';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'logout',
        element: <LogoutPage />,
      },
      {
        path: 'callback',
        element: <CallbackPage />,
      },
    ],
  },
]);
