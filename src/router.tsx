import { createBrowserRouter } from 'react-router';
import TopPage from './routes';
import PageLayout from '@/layouts/Page';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
    ],
  },
]);
