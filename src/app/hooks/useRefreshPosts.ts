'use client';
import { useRouter } from 'next/navigation';

export function useRefreshPosts(): () => void {
  const router = useRouter();

  return () => {
    router.refresh();
  };
}
