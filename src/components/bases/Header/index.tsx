import type { ReactElement } from 'react';
import styles from './index.module.scss';
import logo from '@/assets/logo.webp';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '@/components/shares/LogoutButton';
import LoginButton from '@/components/shares/LoginButton';
import Loading from '@/components/shares/Loading';
import Avatar from '@/components/ui/Avatar';
import Popover from '@/components/ui/Popover';

interface Props {
  fixed?: boolean;
}

export default function Header({ fixed }: Props): ReactElement {
  const { isAuthenticated, user, isLoading } = useAuth0();

  return (
    <header className={styles.header} data-fixed={fixed}>
      <a href="/" className={styles.title_container}>
        <img src={logo} alt="logo" className={styles.icon} />
        <h1 className={styles.title}>sysken/assets</h1>
      </a>

      <nav className={styles.nav}>
        {user && (
          <Popover trigger={<Avatar user={user} />}>
            <LogoutButton variant="ghost" />
          </Popover>
        )}
        {isLoading && <Loading />}
        {!isLoading && !isAuthenticated && <LoginButton />}
      </nav>
    </header>
  );
}
