import type { ReactElement } from 'react';
import styles from './index.module.scss';
import logo from '@/assets/logo.webp';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '@/components/shares/LogoutButton';
import LoginButton from '@/components/shares/LoginButton';
import Loading from '@/components/shares/Loading';

interface Props {
  fixed?: boolean;
}

export default function Header({ fixed }: Props): ReactElement {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <header className={styles.header} data-fixed={fixed}>
      <a href="/" className={styles.title_container}>
        <img src={logo} alt="logo" className={styles.icon} />
        <h1 className={styles.title}>sysken/assets</h1>
      </a>

      <nav className={styles.nav}>
        {isLoading && <Loading />}
        {!isLoading && isAuthenticated && <LogoutButton />}
        {!isLoading && !isAuthenticated && <LoginButton />}
      </nav>
    </header>
  );
}
