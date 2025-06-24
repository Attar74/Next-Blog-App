import { ConnectToDB, getPosts } from '@/app/lib/data';
import { Button } from '@/app/ui/components/button';
import PostsLayoutToggle from '@/app/ui/components/PostsLayoutToggle';
import Link from 'next/link';
import { auth } from '../../../../auth-config';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const client = await ConnectToDB();
  const posts = await getPosts();
  const session = await auth();

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2">
          <h1 className="text-4xl font-bold">Blogs</h1>
          {client && (
            <div className="animate-pulse text-green-500 w-3 h-3 bg-green-500 rounded-full my-auto" />
          )}
        </div>
        <div>
          {session?.user && (
            <Link href="/blog/post/insert">
              <Button className="text-lg outline outline-1 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">
                New +
              </Button>
            </Link>
          )}
        </div>
      </div>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <PostsLayoutToggle posts={posts} />
      )}
    </>
  );
}
