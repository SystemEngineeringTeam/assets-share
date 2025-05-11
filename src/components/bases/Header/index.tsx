import type { ReactElement } from 'react';
import styles from './index.module.scss';
import logo from '@/assets/logo.webp';

interface Props {
  fixed?: boolean;
}

export default function Header({ fixed }: Props): ReactElement {
  return (
    <header className={styles.header} data-fixed={fixed}>
      <a href="/" className={styles.title_container}>
        <img src={logo} alt="logo" className={styles.icon} />
        <h3 className={styles.title}>sysken/assets</h3>
      </a>
    </header>
  );
}
