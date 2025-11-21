import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { PostData } from '../interfaces';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitPost = (post: PostData) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-600">Home Page</h1>
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            + Create Post
          </button>
        </div>
        
        {/* Display dynamic posts */}
        {posts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  title={post.title}
                  content={post.content}
                  className="border-blue-200 bg-blue-50"
                />
              ))}
            </div>
          </div>
        )}

        {/* Static cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Welcome Card" 
            content="This is our first reusable card component. It accepts title and content as props."
            className="hover:shadow-lg transition-shadow"
          />
          
          <Card 
            title="Feature Card" 
            content="This card demonstrates the reusability of our component. Same component, different content."
            className="hover:shadow-lg transition-shadow border-blue-200"
          />
          
          <Card 
            title="Info Card" 
            content="We can easily create multiple cards with different content while maintaining consistent styling."
            className="hover:shadow-lg transition-shadow border-green-200"
          />
        </div>

        <div className="mt-8">
          <Card 
            title="Wide Card" 
            content="This card spans the full width and shows how we can use the same component in different layouts."
            className="hover:shadow-lg transition-shadow"
          />
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPost}
      />
    </div>
  );
}