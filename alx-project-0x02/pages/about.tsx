import Header from '../components/layout/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">About Page</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            This is the About page of our Next.js application.
          </p>
          <p className="mt-4 text-gray-600">
            We're learning about routing in Next.js with the Pages Router.
          </p>
        </div>
      </main>
    </div>
  );
}