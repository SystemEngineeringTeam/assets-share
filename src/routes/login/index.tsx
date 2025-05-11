import styles from './index.module.scss';
import LoginButton from '@/components/shares/LoginButton';

export default function LoginPage() {
  return (
    <div className={styles.page} data-center>
      <p>ログインしてください</p>
      <div>
        <LoginButton />
      </div>
    </div>
  );
}
