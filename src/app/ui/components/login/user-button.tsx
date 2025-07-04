import { auth } from '../../../../../auth-config';
import { SignIn, SignOut } from './auth-component';

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn variant="outlined" />;
  return (
    <div className="flex justify-even gap-2 items-center">
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-12 h-12 rounded-full">
            <Avatar className="w-12 h-12">
              {session.user.image && (
                <AvatarImage
                  src={
                    session.user.image ??
                    'https://source.boringavatars.com/beam/120'
                  }
                  className="rounded-full border-2 border-gray-200 p-1"
                  alt={session.user.name ?? ''}
                />
              )}
              <AvatarFallback>
                <div className="inline-block h-8 w-8 rounded-full animate-spin">
                  <svg
                    className="w-full h-full text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu> */}
      <div className="flex gap-2 items-center">
        <img
          src={
            session.user.image ?? 'https://source.boringavatars.com/beam/120'
          }
          className="rounded-full border-2 border-gray-200 p-1"
          alt={session.user.name ?? ''}
          width={40}
          height={40}
        />
        <span className="hidden text-sm sm:inline-flex dark:text-white">
          {session.user.name}
        </span>
      </div>
      <div>
        <SignOut />
      </div>
    </div>
  );
}
