import { type PostProps } from '../../interfaces';

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {body}
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
          Post
        </span>
      </div>
    </div>
  );
}