import Button from '@/components/ui/Button';
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button type="button" onClick={() => loginWithRedirect()}>
      Login
    </Button>
  );
}
