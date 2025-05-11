import styles from './index.module.scss';
import type { User } from '@auth0/auth0-react';
import { Avatar as RadixAvatar } from 'radix-ui';

interface Props {
  user: User;
}

export default function Avatar({ user }: Props) {
  return (
    <div className={styles.avatar}>
      <RadixAvatar.Root className={styles.root}>
        <RadixAvatar.Image className={styles.img} src={user.picture} alt="Icon" />
        <RadixAvatar.Fallback className={styles.fallback} delayMs={600}>
          {user.name}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
      <p>{user.nickname}</p>
    </div>
  );
}
