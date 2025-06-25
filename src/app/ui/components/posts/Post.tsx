import Link from 'next/link';

export default function Component({
  id,
  title,
  author,
  content,
  date,
  onDelete,
}: {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  onDelete?: (id: string) => void;
}) {
  return (
    <div
      key={id}
      className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1"
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/40 group-hover:via-purple-50/30 group-hover:to-pink-50/20 transition-all duration-500 pointer-events-none" />

      {/* Delete button */}
      {false && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            //onDelete(id);
          }}
          className="absolute top-3 right-3 z-20 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          title="Delete post"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      )}

      <Link href={`/blog/post/${id}`} className="relative z-10 block">
        <div className="flex flex-col gap-4 mb-6">
          <div className="font-bold text-2xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight line-clamp-2">
            {title}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500px-3 py-1 rounded-full justify-end">
            <div className=" bg-gray-50 flex items-center gap-2 px-2">
              <span className="font-medium">by</span>
              <span className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {author}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
            <svg
              className="w-4 h-4 text-blue-600"
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
            <span className="font-medium">{date}</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors duration-300 text-lg ">
          {content}
        </p>

        {/* Enhanced read more indicator */}
        <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-50 px-4 py-2 rounded-full w-fit">
          <span>Read more</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
    </div>
  );
}
