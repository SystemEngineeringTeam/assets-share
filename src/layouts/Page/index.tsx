import styles from './index.module.scss';
import Footer from '@/components/bases/Footer';
import Header from '@/components/bases/Header';
import LoadingPage from '@/routes/loading';
import LoginPage from '@/routes/login';
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router';

export default function PageLayout() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Header />

      <main className={styles.main}>
        {isLoading && <LoadingPage />}
        {!isLoading && isAuthenticated && <Outlet />}
        {!isLoading && !isAuthenticated && <LoginPage />}
      </main>

      <Footer />
    </>
  );
}
