import styles from './index.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export default function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={classNames(styles.button, className)} {...props} data-variant={variant}>
      {children}
    </button>
  );
}
