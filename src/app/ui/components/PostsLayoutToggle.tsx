'use client';

import { Button } from '@/app/ui/components/button';
import Post from '@/app/ui/components/posts/Post';
import { LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

export default function PostsLayoutToggle({ posts }: { posts: any[] }) {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <>
      <div className="flex justify-end mb-4">
        <div className="flex items-center">
          <Button
            className={`border-2 rounded-l-md ${
              layout === 'grid' ? 'bg-gray-200 d' : ''
            }`}
            onClick={() => setLayout('grid')}
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          <Button
            className={`border-2 rounded-r-md ${
              layout === 'list' ? 'bg-gray-200 ' : ''
            }`}
            onClick={() => setLayout('list')}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        className={
          layout === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
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
          />
        ))}
      </div>
    </>
  );
}
