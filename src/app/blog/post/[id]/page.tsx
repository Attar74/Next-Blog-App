import { getPosts, getPostsByUser } from '@/app/lib/data';
import SinglePost from '@/app/ui/components/posts/SinglePost';
import PostsLayoutToggle from '@/app/ui/components/PostsLayoutToggle';
import { notFound } from 'next/navigation';
import { auth } from '../../../../../auth-config';

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id);

  const userPosts = await getPostsByUser({
    email: post?.email ?? '',
  });
  const otherPosts = userPosts?.filter((post) => post.id !== params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen ">
      <SinglePost
        id={post.id}
        title={post.title}
        author={post.author}
        content={post.content}
        date={post.date}
        email={post.email}
      />
      {otherPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <hr className="my-8" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Other Posts by {post.author}
          </h1>
          <PostsLayoutToggle posts={otherPosts} session={session} />
        </div>
      )}
    </div>
  );
}
