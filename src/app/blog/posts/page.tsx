import { ConnectToDB, getPosts } from '@/app/lib/data';
import { Button } from '@/app/ui/components/button';
import Post from '@/app/ui/components/posts/Post';
import Link from 'next/link';
import { auth } from '../../../../auth-config';
export const dynamic = 'force-dynamic';

export default async function Page() {
  const client = await ConnectToDB();
  const posts = await getPosts();
  const session = await auth();

  return (
    <>
      {client && (
        <h1 className="text-2xl font-bold text-green-500">
          Connected to Vercel Postgres
        </h1>
      )}
      <h1>Posts</h1>
      {session?.user && (
        <Link href="/blog/post/insert">
          <Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">
            New +
          </Button>
        </Link>
      )}

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <Post
            id={post.id}
            author={post.author}
            title={post.title}
            content={post.content}
            date={post.date}
            key={post.id}
          />
        ))
      )}
    </>
  );
}
