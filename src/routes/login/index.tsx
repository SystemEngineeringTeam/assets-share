import LoginButton from '@/components/shares/LoginButton';
import styles from './index.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <h1>Login</h1>
      <LoginButton />
    </div>
  );
}
