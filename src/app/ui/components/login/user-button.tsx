import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/ui/components/avatar';
import { Button } from '@/app/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/app/ui/components/dropdown-menu';
import { auth } from '../../../../../auth-config';
import { SignIn, SignOut } from './auth-component';

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn variant="outlined" />;
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
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
              <AvatarFallback>{session.user.email}</AvatarFallback>
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
      </DropdownMenu>
      <span className="hidden text-sm sm:inline-flex">{session.user.name}</span>
    </div>
  );
}
