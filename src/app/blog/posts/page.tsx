import { ConnectToDB, getPosts } from '@/app/lib/data';
//import { supabase } from '@/app/lib/supabase';
import { Button } from '@/app/ui/components/button';
import Post from '@/app/ui/components/posts/Post';
import Link from 'next/link';

export default async function Page() {
  /*const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);*/
  const client = await ConnectToDB();
  const posts = await getPosts();

  /* useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.from('posts').select('*');

        if (error) {
          setError(error.message);
          console.error('Error fetching posts:', error);
        } else {
          setPosts(data || []);
        }
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  /*if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }*/

  return (
    <>
      {client && (
        <h1 className="text-2xl font-bold text-green-500">
          Connected to Vercel Postgres
        </h1>
      )}
      <h1>Posts</h1>
      <Link href="/blog/post/insert">
        <Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">
          New +
        </Button>
      </Link>

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
