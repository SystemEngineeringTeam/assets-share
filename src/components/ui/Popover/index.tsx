import styles from './index.module.scss';
import { Popover as RadixPopover } from 'radix-ui';

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export default function Popover({ trigger, children }: Props) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button className={styles.icon_button} type="button" aria-label="Update dimensions">
          {trigger}
        </button>
      </RadixPopover.Trigger>

      <RadixPopover.Portal>
        <RadixPopover.Content className={styles.content} sideOffset={5}>
          {children}
          <RadixPopover.Arrow className={styles.arrow} />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
