import { formatDate } from '@/lib/utils/dateUtils';
import Link from 'next/link';
import { FiPenTool } from 'react-icons/fi'; // Feather Icons pen

export default function Post({
  id,
  title,
  author,
  content,
  date,
  email,
  session,
}: {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  email: string;
  session: any;
}) {
  return (
    <div
      key={id}
      className="flex flex-col gap-4 group relative backdrop-blur-sm border border-gray-100 dark:border-gray-700 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1 bg-white dark:bg-gray-800"
    >
      <div className="font-bold text-2xl text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight line-clamp-2">
        <Link href={`/blog/post/${id}`} className="relative z-10 block">
          {title}
        </Link>
      </div>

      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
          <svg
            className="w-4 h-4 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-medium">{formatDate(date)}</span>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 text-lg">
        {content}
      </p>

      <div className="mt-auto flex items-center justify-between">
        {/* Enhanced read more indicator */}
        <Link href={`/blog/post/${id}`} className="relative z-10 block">
          <div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full w-fit hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300">
            <span>Read more</span>
            <svg
              className="w-4 h-4 transform hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 rounded-full">
          <div className="bg-gray-50 dark:bg-gray-700 flex items-center gap-2 px-2 py-1 rounded-full">
            <span className="text-gray-700 dark:text-gray-300 rotate-180">
              <FiPenTool />
            </span>
            {author === session?.user?.name ? (
              <span className="font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                {author} (You)
              </span>
            ) : (
              <span className="font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                {author}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
