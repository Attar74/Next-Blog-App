import { getPostsByUser } from '@/app/lib/data';
import { Button } from '@/app/ui/components/button';
import PostsLayoutToggle from '@/app/ui/components/PostsLayoutToggle';
import Link from 'next/link';
import { auth } from '../../../../auth-config';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const session = await auth();
  const posts = await getPostsByUser({
    email: session?.user?.email ?? '',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Blogs
          </h1>
        </div>

        {session?.user && (
          <Link href="/blog/post/insert">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <span className="mr-2">+</span>
              New Post
            </Button>
          </Link>
        )}
      </div>

      {/* Content Section */}
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              No Blogs found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Start writing your first blog post to get started!
            </p>
          </div>
        </div>
      ) : (
        <PostsLayoutToggle posts={posts} session={session} />
      )}
    </div>
  );
}
