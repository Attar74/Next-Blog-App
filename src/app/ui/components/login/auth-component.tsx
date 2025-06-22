import { Button } from '@/app/ui/components/button';
import { redirect } from 'next/navigation';
import { signIn, signOut } from '../../../../../auth-config';

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        'use server';
        try {
          await signOut();
          redirect('/blog/posts');
        } catch (error) {
          console.error('Sign out error:', error);
          redirect('/blog/posts');
        }
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
