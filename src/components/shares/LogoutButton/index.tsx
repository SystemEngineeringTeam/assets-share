import Button from '@/components/ui/Button';
import { useAuth0 } from '@auth0/auth0-react';
import type { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Button> {}

export default function LogoutButton({ type = 'button', ...props }: Props) {
  const { logout } = useAuth0();

  return (
    <Button
      type={type}
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }}
      {...props}
    >
      Logout
    </Button>
  );
}
