'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <main
      className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-5"
      style={{
        height: '100vh',
      }}
    >
      <div className="max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-gray-900 dark:text-white">
              Welcome to Our Blog
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Discover Amazing Stories
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Welcome to our vibrant community of writers and readers. Here
              you'll find insightful articles, creative stories, and
              thought-provoking content that will inspire and engage you.
              Whether you're looking for the latest trends, deep insights, or
              simply a good read, our blog has something for everyone.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Join our community of passionate writers and share your own
              stories. Start exploring our collection of posts or create your
              first article today.
            </p>
            <a
              href="/blog/posts"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center w-fit"
            >
              Explore Blog Posts
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src="/image-desktop.jpeg"
              width={1000}
              height={760}
              className="hidden rounded-lg md:block z-10 shadow-xl"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/image-mobile.jpeg"
              width={560}
              height={620}
              className="block rounded-md md:hidden shadow-lg"
              alt="Screenshot of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
