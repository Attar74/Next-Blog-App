'use client';

import { Button } from '@/app/ui/components/button';
import Post from '@/app/ui/components/posts/Post';
import { LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

export default function PostsLayoutToggle({
  posts,
  session,
}: {
  posts: any[];
  session: any;
}) {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-6">
      {/* Layout Toggle Controls */}
      <div className="flex justify-end items-center">
        <div className="hidden lg:flex items-center rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
          <Button
            className={`px-3 py-2 rounded-md transition-all duration-200 ${
              layout === 'grid'
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={() => setLayout('grid')}
            variant="ghost"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            className={`px-3 py-2 rounded-md transition-all duration-200 ${
              layout === 'list'
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={() => setLayout('list')}
            variant="ghost"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Posts Container */}
      <div
        className={
          layout === 'grid'
            ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            content={post.content}
            date={post.date}
            email={post.email}
            session={session}
          />
        ))}
      </div>
    </div>
  );
}
