import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { type ApiPost } from '../interfaces';

interface PostsPageProps {
  posts: ApiPost[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">Posts Page</h1>
        <p className="text-gray-600 mb-8">
          Displaying posts fetched from JSONPlaceholder API using getStaticProps
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
            {' '}using getStaticProps
          </p>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const posts = await response.json();
    
    // Get only first 6 posts for demonstration
    const limitedPosts = posts.slice(0, 6);

    return {
      props: {
        posts: limitedPosts,
      },
      // Re-generate the page at most once per 60 seconds
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    // Return empty posts array if fetch fails
    return {
      props: {
        posts: [],
      },
    };
  }
};