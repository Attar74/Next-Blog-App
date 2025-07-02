import { getPosts } from '@/app/lib/data';
import SinglePost from '@/app/ui/components/posts/SinglePost';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id);

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
    </div>
  );
}
