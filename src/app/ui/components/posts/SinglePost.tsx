import { formatDate } from '@/lib/utils/dateUtils';
import Link from 'next/link';
import { FaArrowLeft, FaCalendar, FaUser } from 'react-icons/fa';
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
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <span className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full sm:w-auto justify-center sm:justify-start">
              {session?.user?.image ? (
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name ?? ''}
                  className="w-4 h-4 rounded-full"
                />
              ) : (
                <FaUser className="text-purple-600" />
              )}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                {author}
              </span>
            </span>
            <span className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full sm:w-auto justify-center sm:justify-start">
              <FaCalendar className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {formatDate(date)}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none dark:prose-invert">
            <div className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
              {content}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <span className="p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 font-mono text-xs text-gray-600 dark:text-gray-400 w-full sm:w-auto text-center sm:text-left">
            ID: {id}
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
            <CopyLinkButton postId={id} />
            {email === session?.user?.email && (
              <DeletePostButton postId={id} email={email || ''} />
            )}
          </div>
        </div>
        <Link
          href="/blog/posts"
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Posts</span>
        </Link>
      </div>
    </div>
  );
}
