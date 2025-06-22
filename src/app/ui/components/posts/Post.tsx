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
    <div key={id} className="border border-gray-200 p-4 my-4">
      <Link href={`/blog/post/${id}`}>
        <h2 className="font-semibold text-lg">{title}</h2>
      </Link>
      <p className="text-gray-500">{date}</p>
      <p>{content}</p>
      <p className="text-gray-500">{author}</p>
    </div>
  );
}
