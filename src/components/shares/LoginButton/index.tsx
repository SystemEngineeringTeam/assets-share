import Button from '@/components/ui/Button';
import { useAuth0 } from '@auth0/auth0-react';
import type { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Button> {}

export default function LoginButton({ type = 'button', ...props }: Props) {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button type={type} onClick={() => loginWithRedirect()} {...props}>
      Login
    </Button>
  );
}
