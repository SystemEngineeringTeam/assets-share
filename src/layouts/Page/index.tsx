import styles from './index.module.scss';
import Footer from '@/components/bases/Footer';
import Header from '@/components/bases/Header';
import { Outlet } from 'react-router';

export default function PageLayout() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
