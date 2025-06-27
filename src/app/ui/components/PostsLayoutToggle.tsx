'use client';

import { Button } from '@/app/ui/components/button';
import Post from '@/app/ui/components/posts/Post';
import { LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

export default function PostsLayoutToggle({ posts }: { posts: any[] }) {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  const handleDelete = async (id: string) => {
    try {
      // Call backend API to delete from DB
      await fetch(`/api/posts?id=${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Layout Toggle Controls */}
      <div className="flex justify-end items-center">
        <div className="hidden lg:flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-1">
          <Button
            className={`px-3 py-2 rounded-md transition-all duration-200 ${
              layout === 'grid'
                ? 'bg-purple-100 text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
            onClick={() => setLayout('grid')}
            variant="ghost"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            className={`px-3 py-2 rounded-md transition-all duration-200 ${
              layout === 'list'
                ? 'bg-purple-100 text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
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
            ? 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6'
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
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
