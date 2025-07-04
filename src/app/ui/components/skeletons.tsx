// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function PostSkeleton() {
  return (
    <div
      className={`${shimmer} bg-gray-50 dark:bg-gray-800 relative overflow-hidden border border-gray-200 dark:border-gray-700 p-10 my-4 rounded-lg`}
    >
      <div className="h-2 p-1 w-1/4 rounded-md bg-gray-100 dark:bg-gray-700" />
      <div className="h-2 p-1 mt-2 w-1/6 rounded-md bg-gray-100 dark:bg-gray-700" />
      <div className="mt-2 h-6 w-full rounded-md bg-gray-100 dark:bg-gray-700" />
    </div>
  );
}

export function PostsSkeleton() {
  return (
    <>
      {Array.from({ length: 7 }, (_, index) => (
        <PostSkeleton key={index} />
      ))}
    </>
  );
}
