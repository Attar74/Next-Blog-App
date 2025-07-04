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
      <Button
        className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-600 rounded-full"
        {...props}
      >
        Sign In
      </Button>
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
      <Button
        variant="ghost"
        className="w-full p-0 dark:bg-transparent dark:hover:bg-gray-800"
        {...props}
      >
        <svg
          className="w-5 h-5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </Button>
    </form>
  );
}
