import type { ReactElement } from 'react';
import styles from './index.module.scss';

export default function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>SET © {year} Copyright.</p>
    </footer>
  );
}
