'use client';
import {
  BookOpenIcon,
  EnvelopeIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  /* { name: 'Home', href: '/', icon: HomeIcon },*/
  {
    name: 'All Blogs',
    href: '/blog/posts',
    icon: BookOpenIcon,
    requireAuth: false,
  },
  {
    name: 'About',
    href: '/blog/about',
    icon: UserGroupIcon,
    requireAuth: false,
  },
  {
    name: 'Contact',
    href: '/blog/contact',
    icon: EnvelopeIcon,
    requireAuth: false,
  },
  {
    name: 'My Blogs',
    href: '/blog/my-blogs',
    icon: UserIcon,
    requireAuth: true,
  },
];

export default function NavLinks({ session }: { session: any }) {
  const pathname = usePathname();

  // Filter links based on authentication status
  const filteredLinks = links.filter((link) => {
    return link.requireAuth && !session?.user ? false : true;
  });

  return (
    <>
      {filteredLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-200 md:flex-none md:justify-start md:p-2 md:px-3 bg-white dark:bg-gray-800',
              {
                'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/20':
                  pathname === link.href,
                'text-gray-600 hover:text-purple-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-purple-900/20':
                  pathname !== link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
