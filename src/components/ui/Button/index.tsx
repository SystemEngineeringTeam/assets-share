import styles from './index.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
