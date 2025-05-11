import styles from './index.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <svg viewBox="0 0 100 100">
        <title>Loading</title>
        <circle cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
}
