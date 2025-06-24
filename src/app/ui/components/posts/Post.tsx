import Link from 'next/link';

export default function Component({
  id,
  title,
  author,
  content,
  date,
}: {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
}) {
  return (
    <div
      key={id}
      className="border border-gray-200 p-4 my-4 rounded-md hover:bg-gray-50 transition-all duration-300 cursor-pointer"
    >
      <Link href={`/blog/post/${id}`}>
        <h2 className="font-semibold text-lg">
          {title} by {author}
        </h2>
      </Link>
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-800">{content}</p>
    </div>
  );
}
