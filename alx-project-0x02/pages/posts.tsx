import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { type ApiPost } from '../interfaces';

export default function PostsPage() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        // Get only first 6 posts for demonstration
        setPosts(data.slice(0, 6));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error: {error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">Posts Page</h1>
        <p className="text-gray-600 mb-8">
          Displaying posts fetched from JSONPlaceholder API
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-700 text-sm">
            <strong>API Info:</strong> Data fetched from{' '}
            <a 
              href="https://jsonplaceholder.typicode.com/posts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              JSONPlaceholder Posts API
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}