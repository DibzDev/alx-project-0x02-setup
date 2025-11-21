import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-600 mb-8">Home Page</h1>
        
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
    </div>
  );
}