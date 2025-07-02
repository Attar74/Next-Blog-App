import { formatDate } from '@/lib/utils/dateUtils';
import Link from 'next/link';
import { auth } from '../../../../../auth-config';
import CopyLinkButton from './CopyLinkButton';
import DeletePostButton from './DeletePostButton';
interface SinglePostProps {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  email: string;
}

export default async function SinglePost({
  id,
  title,
  author,
  email,
  content,
  date,
}: SinglePostProps) {
  const session = await auth();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                {author}
              </span>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                {formatDate(date)}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-2 bg-white rounded-lg shadow-md border border-gray-200 font-mono text-xs text-gray-600">
            ID: {id}
          </span>
          <CopyLinkButton postId={id} />
          {email === session?.user?.email && (
            <DeletePostButton postId={id} email={email || ''} />
          )}
        </div>
        <Link
          href="/blog/posts"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back to Posts</span>
        </Link>
      </div>
    </div>
  );
}
